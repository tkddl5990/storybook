import React from "react";
import Card from "@components/Cards/Card";
import CardTitle from "@components/Cards/CardTitle/CardTitle";

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
    <p>
      s Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestias
      mollitia nemo asperiores quis ut, aliquid totam obcaecati. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Vel molestias mollitia nemo
      asperiores quis ut, aliquid totam obcaecati. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Vel molestias mollitia nemo asperiores quis
      ut, aliquid totam obcaecati. modal singledate doubledate table pagination
    </p>
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "이것은 카드 타이틀입니다",
  size: "large",
  color: "#111",
};
