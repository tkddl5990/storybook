import React from "react";
import Flex from "@components/Flex";
import Card from "@components/Cards/Card";

export default {
  title: "Example/Layouts/Flex",
  components: Flex,
  argTypes: {
    align: {
      control: "select",
      options: ["center", "flex-start", "flex-end", "stretch", "baseline"],
    },
    justify: {
      control: "select",
      options: [
        "center",
        "flex-start",
        "flex-end",
        "space-between",
        "space-around",
      ],
    },
    direction: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    gap: { type: "number" },
  },
};

const Template = (args) => {
  return (
    <Card>
      <Flex {...args} style={{ width: "100%", height: 300 }}>
        <Flex
          align="center"
          justify="center"
          style={{ width: 120, height: 120, background: "red" }}
        >
          1
        </Flex>
        <Flex
          align="center"
          justify="center"
          style={{ width: 120, height: 120, background: "gold" }}
        >
          2
        </Flex>
      </Flex>
    </Card>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  align: "flex-start",
  justify: "flex-start",
  direction: "row",
  gap: 0,
};
