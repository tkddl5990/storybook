import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Flex from "@components/Flex";
import SingleDate from "@components/Forms/SingleDate";
import dayjs from "dayjs";
import { Span } from "./DoubleDate.styled";

const DoubleDate = ({
  start,
  end,
  onChangeStart,
  onChangeEnd,
  format,
  returnFormat,
  isShowTime,
  endOptions,
  startOptions,
}) => {
  const setPeriodValueType = useCallback(
    (value) => (typeof value === "string" ? dayjs(value).toDate() : value),
    []
  );

  return (
    <Flex align="center" gap={10}>
      <SingleDate
        value={start}
        onChange={onChangeStart}
        format={format}
        returnFormat={returnFormat}
        isShowTime={isShowTime}
        selectsStart
        startDate={setPeriodValueType(start)}
        endDate={setPeriodValueType(end)}
        {...startOptions}
      />
      <Span>~</Span>
      <SingleDate
        value={end}
        onChange={onChangeEnd}
        format={format}
        returnFormat={returnFormat}
        isShowTime={isShowTime}
        selectsEnd
        startDate={setPeriodValueType(start)}
        endDate={setPeriodValueType(end)}
        minDate={setPeriodValueType(start)}
        {...endOptions}
      />
    </Flex>
  );
};

DoubleDate.propTypes = {
  start: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  end: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
};

export default DoubleDate;
