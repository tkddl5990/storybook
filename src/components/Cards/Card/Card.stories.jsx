import React from "react";
import Card from "./Card";

export default {
  title: "Example/Cards/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <div>helo world</div>,
};
