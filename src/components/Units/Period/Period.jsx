import React from "react";
import dayjs from "dayjs";
import Flex from "@components/Flex";
import DoubleDate from "@components/Forms/DoubleDate";
import Styled from "./Period.styled";

const Period = ({ before, after, ...rest }) => {
  const { end, returnFormat, onChangeStart, onChangeEnd } = rest;

  const setDateCalculator = (key) => {
    const targetIdx = [...key].findIndex((i) => isNaN(i));
    const period = key.substr(0, targetIdx),
      type = key.substr(targetIdx, [...key].length - 1);
    const result = dayjs(end).subtract(period, type).format(returnFormat);
    onChangeStart(returnFormat ? result : dayjs(result).toDate());
  };

  const setPeriodHandler = (key) => () => {
    if (key === "today") {
      const result = returnFormat
        ? dayjs(new Date()).format(returnFormat)
        : new Date();
      onChangeStart(result);
      onChangeEnd(result);
    } else setDateCalculator(key);
  };

  return (
    <Flex align="center" gap={16}>
      <Flex align="center" gap={4}>
        <Styled.PeriodButton onClick={setPeriodHandler("today")}>
          오늘
        </Styled.PeriodButton>
        <Styled.PeriodButton onClick={setPeriodHandler("1week")}>
          1주일
        </Styled.PeriodButton>
        <Styled.PeriodButton onClick={setPeriodHandler("1month")}>
          1개월
        </Styled.PeriodButton>
        <Styled.PeriodButton onClick={setPeriodHandler("3month")}>
          3개월
        </Styled.PeriodButton>
      </Flex>
      <DoubleDate {...rest} />
    </Flex>
  );
};

export default Period;
