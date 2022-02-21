import React from "react";
import Card from "@components/Cards/Card";
import CardTitle from "@components/Cards/CardTitle";

export default {
  title: "Example/Cards/Card",
  component: Card,
};

const Template = (args) => {
  return (
    <Card {...args}>
      {args.isTtile === "visible" && <CardTitle>이것은 카드타이틀</CardTitle>}
      <p>{args.children}</p>
    </Card>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: <div>여기는 내용</div>,
};
