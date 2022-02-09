import React from "react";
import Card from "../Card";
import CardTitle from "./CardTitle";

export default {
  title: "Example/Cards/CardTitle",
  component: CardTitle,
  argTypes: {
    children: { type: "string" },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    color: { type: "string" },
  },
};

const Template = (args) => (
  <Card>
    <CardTitle {...args} />
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "이것은 카드 타이틀입니다",
  size: "large",
  color: "#111",
};
