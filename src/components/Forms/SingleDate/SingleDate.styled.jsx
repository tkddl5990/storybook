import styled from "styled-components";

const DateContainer = styled.div.attrs(({ active, disabled }) => ({
  className: active ? "active" : disabled ? "disabled" : "",
}))`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e4e7ea;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  height: calc(1.5em + 0.75rem + 2px);
  border-radius: 0.25rem;

  &.active {
    box-shadow: 0 0 0 0.2rem rgb(32 168 216 / 25%);
    color: #5c6873;
    background-color: #fff;
    border-color: #8ad4ee;
    outline: 0;
  }

  &.disabled {
    color: #73818f;
    background-color: #e4e7ea;

    & * {
      color: #73818f;
      background-color: #e4e7ea;
      cursor: not-allowed;
    }

    & .clear-button {
      display: none;
    }
  }

  &.error {
    border-color: #ff2d55;
    box-shadow: 0 0 0 0.2rem rgb(255 45 85 / 25%);
  }

  & .react-datepicker-wrapper {
    height: 100%;
  }

  & .react-datepicker__input-container {
    height: 100%;
  }

  & .react-datepicker__triangle::after {
    display: none;
  }

  & .react-datepicker__triangle::before {
    display: none;
  }

  & .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #5c6873;
  }

  & .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    color: #2a87d0;
    background-color: #fff;
  }

  & .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    color: #2a87d0;
    background-color: #fff;
  }

  & .react-datepicker__header {
    background-color: #fff;
    border: 0;
    padding: 14px 0;
  }

  & .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    color: #5c6873;
    font-weight: 300;
    margin-bottom: 8px;
  }

  & .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    border-color: #ccc;
    border-style: solid;
    border-width: 1px 1px 0 0;
    content: "";
    display: block;
    height: 9px;
    position: absolute;
    top: 18px;
    width: 9px;
  }
`;

const DatePicker = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
  font-size: 0.875rem;
  font-weight: 400;
  color: #5c6873;
  background: #fff;
  text-align: left;
`;

const ClearButton = styled.button.attrs({ className: "clear-button" })`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #e4e7ea;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "\\d7";
    color: #ccc;
    font-size: 0.875rem;
  }
`;

export default {
  DateContainer,
  DatePicker,
  ClearButton,
};
