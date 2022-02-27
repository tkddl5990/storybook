import React, { useState } from "react";
import Card from "@components/Cards/Card";
import DoubleDate from "@components/Forms/DoubleDate";

export default {
  title: "Example/Forms/DoubleDate",
  components: DoubleDate,
  argTypes: {
    format: { type: "string" },
    returnFormat: { type: "string" },
    isShowTime: { type: "boolean" },
  },
};

const Template = (args) => {
  const [period, setPeriod] = useState({ start: new Date(), end: new Date() });

  const onChangePeriodHandler = (key) => (date) => {
    setPeriod({
      ...period,
      [key]: date,
    });
  };

  return (
    <Card>
      <DoubleDate
        {...args}
        start={period.start}
        end={period.end}
        onChangeStart={onChangePeriodHandler("start")}
        onChangeEnd={onChangePeriodHandler("end")}
      />
    </Card>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  format: "yyyy-MM-dd",
  returnFormat: "YYYY-MM-DD",
  isShowTime: false,
};
