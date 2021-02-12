import React, { Dispatch, SetStateAction, useState } from 'react';

import ReactDayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

type Props = {
  setModalActive: Dispatch<SetStateAction<boolean>>;
  date: Date;
  setDate: (date:Date) => void;
  theme: { blue: string };
}

const DayPicker: React.FC<Props> = ({setModalActive, date, setDate, theme}) => {
  const month = date;
  let hovered = null;

  const modifiers = {
    hover: undefined,
    selected: date,
    today: undefined,
  };

  const styles = {
    hover: {
      border: theme.blue,
    },
    outside: {
      background: '#fafafa',
      cursor: 'pointer',
    },
    selected: {
      background: theme.blue,
    },
  };

  const onClick = (date: Date) => {
    setDate(date);
    setModalActive(false);
  }

  return (
    <ReactDayPicker
      modifiers={modifiers}
      modifiersStyles={styles}
      month={month}
      onDayClick={onClick}
      showOutsideDays={true}
    />
  )
}

export default DayPicker;
