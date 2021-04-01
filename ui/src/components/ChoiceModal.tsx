
import React, { Dispatch, SetStateAction } from 'react'
import { Choice, ContractId } from '@daml/types';
import { useLedger } from '@daml/react';

import { Formik, Form, Field, FieldProps, FormikHelpers, FieldAttributes, useField } from 'formik';
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
    initialValues: PartialMaybe<C>
    className?: string
  };

export const Success = Symbol('Success');
type Success = typeof Success;

interface Failure {
  error: any;
};

type MaybeSuccessOrFailure = Nothing | Success | Failure;

export function ChoiceModal<T extends object, C, R, K>({ choice, contract, submitTitle, buttonTitle, initialValues, icon, className, children }: React.PropsWithChildren<ChoiceModalProps<T,C,R,K> >) {
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
            {({isSubmitting}) => (<Form className={className}>
              {children}
              <div className="flex justify-center align-center">
              <button type="submit" disabled={isSubmitting} 
              className="flex justify-center items-center space-x-2 px-4 py-2 rounded-lg border-black border-2 bg-blue text-white">
              {submitTitle}</button>
              </div>
              </Form>)}
          </Formik>
      );
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

export const LField : React.FC<FieldAttributes<any> & { label?: string } > = props => (
  <div className=""><label htmlFor={props.name} className="block label-sm ">{props.label}</label>
  <Field {... props} className="bg-trueGray-100 h-11 rounded w-full" />
  </div>
)

export const EField : React.FC<{name: string, e: any, label?: string}> = ({name, e, label}) => {
  const [ field, meta, helpers ] = useField(name);
  const { setValue } = helpers;
  return (
  <div className="flow flow-col"><label htmlFor={name} className="block label-sm">{label}</label>
    <Select classNamePrefix="react-select-modal-enum" multi={false} options={e.keys.map((a:string)=>({value: a, label: a}))} onChange={(option) => setValue(option?.value)} styles={({singleValue: (base) => ({ textOverflow: "ellipsis", maxWidth: "10em" }) })} />
  </div>
  )
}

export const DayPickerField : React.FC<{name: string}> = ({name}) => {
    const [ field, meta, { setValue } ] = useField(name);
    return <DayPicker setModalActive={ () => null } date={new Date()} setDate={(d)=>setValue(d.toISOString().split('T')[0])} theme={({ blue: "var(--color-blue)" })}/>
}
