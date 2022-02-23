import React, { useState } from "react";
import Flex from "@components/Flex";
import Card from "@components/Cards/Card";
import Form from "@components/Forms/Form";
import Radio from "@components/Forms/Radio";

export default {
  title: "Example/Forms/Radio",
  components: Radio,
  argTypes: {
    id: { type: "string" },
    name: { type: "string" },
    disabled: { type: "boolean" },
  },
};

const Template = ({ id, ...args }) => {
  const [radio, setRadio] = useState("radio1");

  const submit = (e) => {
    e.preventDefault();
    alert(radio);
  };

  const handler = (e) => {
    setRadio(e.target.value);
  };

  return (
    <Card>
      <Form onSubmit={submit}>
        <Flex align="center" gap={16}>
          {["radio1", "radio2", "radio3", "radio4"].map((item, index) => (
            <Radio
              key={`${args.id}${index}`}
              id={`${args.id}${index}`}
              {...args}
              value={item}
              onChange={(e) => handler(e)}
              checked={radio === item}
            >
              {item}
            </Radio>
          ))}
        </Flex>
      </Form>
    </Card>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "id",
  name: "name",
  disabled: false,
};
