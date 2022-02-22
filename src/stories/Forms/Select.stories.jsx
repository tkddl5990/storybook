import React, { useState } from "react";
import Card from "@components/Cards/Card";
import Form from "@components/Forms/Form";
import Select from "@components/Forms/Select";

export default {
  title: "Example/Forms/Select",
  components: Select,
  argTypes: {
    isTotal: { type: "boolean" },
    isInit: { type: "boolean" },
    disabled: { type: "boolean" },
    defaultOptions: { type: "object" },
    options: { type: "object" },
  },
};

const commonArgs = {
  disabled: false,
  defaultOptions: { label: "text", value: "id" },
  options: [
    { id: "1", text: "select 1" },
    { id: "2", text: "select 2" },
    { id: "3", text: "select 3" },
    { id: "4", text: "select 4" },
    { id: "5", text: "select 5" },
    { id: "6", text: "select 6" },
    { id: "7", text: "select 7" },
  ],
};

const Template = (args) => {
  const [select, setSelect] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(select);
  };

  return (
    <Card>
      <Form onSubmit={submit}>
        <Select
          {...args}
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        />
      </Form>
    </Card>
  );
};

export const TotalSelect = Template.bind({});
TotalSelect.args = {
  isTotal: true,
  ...commonArgs,
};

export const InitSelect = Template.bind({});
InitSelect.args = {
  isInit: true,
  ...commonArgs,
};
