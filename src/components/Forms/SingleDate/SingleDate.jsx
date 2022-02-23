import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import Styled from "./SingleDate.styled";

const SingleDate = () => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(new Date());
  const handleCalendarClose = () => {
    setActive(false);
  };

  const handleCalendarOpen = () => {
    setActive(true);
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Styled.DatePicker value={value} ref={ref} onClick={onClick}>
      {value}
    </Styled.DatePicker>
  ));

  return (
    <Styled.DateContainer active={active}>
      <DatePicker
        customInput={<CustomInput />}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        selected={value}
        onChange={(date) => setValue(date)}
        dateFormat="yyyy년 MM월 dd일"
      />
      <Styled.ClearButton onClick={() => setValue("")} />
    </Styled.DateContainer>
  );
};

export default SingleDate;
