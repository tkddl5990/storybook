import React from "react";
import Card from "@components/Cards/Card";
import Label from "@components/Forms/Label";

export default {
  title: "Example/Forms/Label",
  components: Label,
  argTypes: {
    children: { type: "string" },
    size: { type: "string" },
    color: { type: "string" },
    weight: { type: "string" },
    required: { type: "boolean" },
  },
};

const Template = (args) => {
  return (
    <Card>
      <Label {...args}>{args.children}</Label>
    </Card>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: "이것은 라벨입니다.",
  size: "16px",
  color: "#111",
  weight: "500",
  required: false,
};
