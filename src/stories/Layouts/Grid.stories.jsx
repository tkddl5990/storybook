import React from "react";
import Card from "@components/Cards/Card";
import Grid from "@components/Grid";
import Flex from "@components/Flex";

export default {
  title: "Example/Layouts/Grid",
  components: Grid,
  argTypes: {
    col: { type: "string" },
    row: { type: "string" },
    gap: { type: "number" },
  },
};

const tempArr = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "navy",
  "purple",
  "grey",
  "pink",
];

const Template = (args) => {
  return (
    <Card>
      <Grid {...args}>
        {tempArr.map((item, index) => (
          <Flex
            key={`${item}`}
            style={{ background: item, padding: "20px" }}
            align="center"
            justfy="center"
          >
            {index}
            {index === 3 && (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                molestias mollitia nemo asperiores quis ut, aliquid totam
                obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Vel molestias mollitia nemo asperiores quis ut, aliquid
                totam obcaecati. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vel molestias mollitia nemo asperiores quis
                ut, aliquid totam obcaecati.
              </p>
            )}
          </Flex>
        ))}
      </Grid>
    </Card>
  );
};
export const Primary = Template.bind({});
Primary.args = {
  col: "1fr 2fr 1fr",
  row: "repeat(3, minmax(100px, auto))",
  gap: 0,
};
