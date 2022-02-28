import React, { useState } from "react";
import Card from "@components/Cards/Card";
import Period from "@components/Units/Period";

export default {
  title: "Example/Units/Period",
  components: Period,
  argsTypes: {
    format: { type: "string" },
    returnFormat: { type: "string" },
    isShowTime: { type: "boolean" },
  },
};

const Template = (args) => {
  const [period, setPeriod] = useState({ start: new Date(), end: new Date() });

  const onChangePeriodHandler = (key) => (date) => {
    setPeriod((prev) => ({
      ...prev,
      [key]: date,
    }));
  };

  return (
    <Card>
      <Period
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
