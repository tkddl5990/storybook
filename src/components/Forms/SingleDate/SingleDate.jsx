import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import Styled from "./SingleDate.styled";

const initialValueConvertor = (value) =>
  typeof value === "string" ? dayjs(value).toDate() : value;

const SingleDate = ({
  value,
  format,
  onChange,
  returnFormat,
  closeOnScroll,
  isShowTime,
  ...rest
}) => {
  const [active, setActive] = useState(false);

  const handleCalendarClose = () => {
    const { calendarClose } = rest;
    calendarClose && calendarClose();
    setActive(false);
  };

  const handleCalendarOpen = () => {
    const { calendarOpen } = rest;
    calendarOpen && calendarOpen();
    setActive(true);
  };

  const convertDateToString = (value) => dayjs(value).format(returnFormat);

  const onChangeHandler = (date) => {
    onChange && onChange(returnFormat ? convertDateToString(date) : date);
  };

  const clear = (e) => {
    const { calendarClear } = rest;
    e.preventDefault();
    calendarClear && clear();
    onChangeHandler(new Date());
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Styled.DatePicker value={value} ref={ref} onClick={onClick}>
      {value}
    </Styled.DatePicker>
  ));

  return (
    <Styled.DateContainer active={active}>
      <DatePicker
        showTimeSelect={isShowTime}
        customInput={<CustomInput />}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        selected={initialValueConvertor(value)}
        onChange={onChangeHandler}
        dateFormat={format}
        closeOnScroll={closeOnScroll}
        {...rest}
      />
      <Styled.ClearButton onClick={clear} />
    </Styled.DateContainer>
  );
};

SingleDate.defaultProps = {
  format: "yyyy-MM-dd",
  returnFormat: "",
  value: new Date(),
  closeOnScroll: (e) => e.target === document,
  isShowTime: false,
};

SingleDate.propTypes = {
  format: PropTypes.string,
  returnFormat: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  calendarOpen: PropTypes.func,
  calendarClose: PropTypes.func,
  calendarClear: PropTypes.func,
  closeOnScroll: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  isShowTime: PropTypes.bool,
};

export default SingleDate;
