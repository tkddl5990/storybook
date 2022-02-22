import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Styled from "./Select.styled";

const Select = ({
  isTotal = false,
  isInit = false,
  options,
  defaultOptions: { label, value: optionValue },
  key = "",
  ...rest
}) => {
  const { disabled } = rest;

  useEffect(() => {
    if (!options.find((item) => item[optionValue]))
      throw new Error(`${optionValue} is not found`);
  }, [options, optionValue]);

  return (
    <Styled.SelectWrapper disabled={disabled}>
      <Styled.Select {...rest}>
        {(isTotal || isInit) && (
          <option value="">{(isTotal && "전체") || (isInit && "선택")}</option>
        )}
        {options?.map((data) => (
          <option
            key={`select-${data[optionValue]}-${key}`}
            value={data[optionValue]}
          >
            {data[label]}
          </option>
        ))}
      </Styled.Select>
    </Styled.SelectWrapper>
  );
};

Select.propTypes = {
  isTotal: PropTypes.bool,
  isInit: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.any),
  defaultOptions: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  key: PropTypes.string,
};

export default Select;
