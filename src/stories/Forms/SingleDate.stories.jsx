import React, { useState } from "react";
import Card from "@components/Cards/Card";
import SingleDate from "@components/Forms/SingleDate";

export default {
  title: "Example/Forms/SingleDate",
  components: SingleDate,
  argTypes: {
    format: { type: "string" },
    returnFormat: { type: "string" },
    isShowTime: { type: "boolean" },
  },
};

const Template = ({ format, returnFormat, isShowTime, ...rest }) => {
  const [single, setSingle] = useState(new Date());

  return (
    <Card>
      <SingleDate
        format={format}
        value={single}
        onChange={setSingle}
        returnFormat={returnFormat}
        isShowTime={isShowTime}
        {...rest}
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
