import React, { Dispatch, SetStateAction } from 'react'
import { Choice, ContractId } from '@daml/types';
import { useLedger } from '@daml/react';

import FormikMod, { Formik, Form, Field, FieldProps, FormikHelpers, FieldAttributes, useField } from 'formik';
import { Share } from 'phosphor-react';
import Select, { Props } from 'react-select';
import Modal from './Modal';
import DayPicker from "./DayPicker";

export const Nothing = Symbol('Nothing');
type Nothing = typeof Nothing;

/// Each field is made optional without edge cases, provided nothing else uses `Nothing`.
type PartialMaybe<T> = {
  [P in keyof T]: T[P] | Nothing;
};

function complete<T>(i: PartialMaybe<T>) : T | undefined {
  for( const [key, value] of Object.entries(i) ) {
    if (value == Nothing) {
      return undefined;
    }
  }
  return i as T;
}

type ChoiceModalProps<T extends object, C, R, K> =
  { choice: Choice<T,C,R,K>,
    contract: ContractId<T>,
    submitTitle: string,
    buttonTitle: string,
    icon?: React.ReactNode,
    initialValues: PartialMaybe<C>,
    className?: string,
    children:
      React.ReactNode |
      ((_: {
        errors: FormikMod.FormikErrors<PartialMaybe<C>>;
        touched: FormikMod.FormikTouched<PartialMaybe<C>>;
      }) => React.ReactNode),
  };

export const Success = Symbol('Success');
type Success = typeof Success;

interface Failure {
  error: any;
};

type MaybeSuccessOrFailure = Nothing | Success | Failure;

export function ChoiceModal<T extends object, C, R, K>({ choice, contract, submitTitle, buttonTitle, initialValues, icon, className, children }: ChoiceModalProps<T,C,R,K>) {
  const [modalActive, setModalActiveInner] = React.useState(false);
  const [successOrFailure, setSuccessOrFailure] = React.useState<MaybeSuccessOrFailure>(Nothing);
  const setModalActive = (s : SetStateAction<boolean>) => {
    setModalActiveInner((p : boolean) => {
      const shown = typeof s == 'function' ? s(p) : s;
      if(!shown && successOrFailure != Nothing) setSuccessOrFailure(Nothing);
      return shown;
    })};
  const ledger = useLedger();
  let submitF = (values : PartialMaybe<C>, { setSubmitting } : FormikHelpers<PartialMaybe<C> >) => {
    console.log("Exercising option: " + choice);
    console.log(values);
    const arg = complete(values);
    if(arg) {
        const success=() => { setSuccessOrFailure(Success); };
        const failure=(f : any) => { console.log(f); setSuccessOrFailure({error: f})};
        ledger.exercise(choice, contract, arg).then(success, failure);
    } else {
        console.log("Incomplete Parameters");
    }
  };
  var content;
  switch(successOrFailure) {
    case Nothing: {
      content = (
        <Formik initialValues={initialValues} onSubmit={ submitF } >
          {({ errors, touched, isValidating, isSubmitting}) => (<Form className={className}>
            {typeof children == "function" ? children({ errors, touched }) : children}
            <div className="flex justify-center align-center">
              <button type="submit" disabled={isSubmitting}
                      className="flex justify-center items-center space-x-2 px-4 py-2 rounded-lg border-black border-2 bg-blue text-white">
                {submitTitle}</button>
            </div>
            {/* <Field name="email" validate={validateEmail} />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <Field name="username" validate={validateUsername} />
                {errors.username && touched.username && <div>{errors.username}</div>}
                <button type="submit">Submit</button> */}
          </Form>)}
        </Formik>
      )
      break;
    }
    case Success: {
      content = (
        <>Success</>
      );
      break;
    }
    default: { // Failure case
      content = (
        <>Failure</>
      );
      break;
    }
  }
  return (
    <>
    <button onClick={() => setModalActive(true)} className="flex justify-center items-center space-x-2 px-4 py-2 rounded-lg border-black border-2 bg-blue text-white">
      {icon}
    <div> {buttonTitle} </div>
    </button>
    <Modal active={modalActive} setActive={setModalActive} hasCloseButton={true}>
      {content}
    </Modal>
    </>
  );
}

export type ChoiceErrorsType = { [_: string]: string | undefined };

export const validateNonEmpty = (label: string) => (a: any) => {
  let error;
  if (a == Nothing) {
    error = `${label} is required`;
  }
  return error;
};

export const RenderError: React.FC<{ error: string | undefined }> = ({ error }) => (
  <>
  {error /* && touched */ && (
    <div className="text-sm text-red-800">{error}</div>
  )}
  </>
);

export const LField : React.FC<FieldAttributes<any> & {
  label: string,
  errors?: ChoiceErrorsType,
}> = ({ errors, label, ...props }) => {
  const error = errors?.[props.name];
  return (
    <div className="">
      <label htmlFor={props.name} className="block label-sm ">{label}</label>
      <Field
        {... props}
        className="bg-trueGray-100 h-11 rounded w-full"
        validate={validateNonEmpty(label)}
      />
      <RenderError error={error} />
    </div>
  );
}

export const EField : React.FC<{
  name: string,
  e: any,
  label: string,
  errors?: ChoiceErrorsType,
}> = ({name, e, label, errors}) => {
  const [ field, meta, helpers ] = useField({
    name,
    validate: validateNonEmpty(label),
  });
  const { setValue } = helpers;
  const error = errors?.[name];
  return (
    <div className="flow flow-col"><label htmlFor={name} className="block label-sm">{label}</label>
      <Select
        cla1ssNamePrefix="react-select-modal-enum"
        multi={false}
        options={e.keys.map((a:string)=>({value: a, label: a}))}
        onChange={(option) => setValue(option?.value)}
        styles={({singleValue: (base) => ({ textOverflow: "ellipsis", maxWidth: "10em" }) })}
        validate={undefined}
      />
      <RenderError error={error} />
    </div>
  )
}

export const DayPickerField : React.FC<{
  name: string
  errors?: ChoiceErrorsType,
}> = ({ name, errors }) => {
  const [ field, meta, { setValue } ] = useField(name);
  const error = errors?.[name];
  return (
    <>
    <DayPicker
      setModalActive={ () => null }
      date={new Date()}
      setDate={(d)=>setValue(d.toISOString().split('T')[0])}
      theme={({ blue: "var(--color-blue)" })}
    />
    <RenderError error={error} />
    </>
  );
}
