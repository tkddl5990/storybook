import React, { useState } from "react";
import Flex from "@components/Flex";
import Card from "@components/Cards/Card";
import Form from "@components/Forms/Form";
import Check from "@components/Forms/Check";

export default {
  title: "Example/Forms/Check",
  components: Check,
  argTypes: {
    id: { type: "string" },
    name: { type: "string" },
    disabled: { type: "boolean" },
  },
};

const Template = ({ id, ...args }) => {
  const [check, setCheck] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(check));
  };

  const handler = (e) => {
    const { value } = e.target;
    if (check.indexOf(value) === -1) {
      setCheck((prev) => [...prev, value]);
    } else {
      setCheck((prev) => prev.filter((it) => it !== value));
    }
  };

  return (
    <Card>
      <Form onSubmit={submit}>
        <Flex align="center" gap={16}>
          {[
            "check1",
            "check2",
            "check3",
            "check4",
            "check5",
            "check6",
            "check7",
            "check8",
          ].map((item, index) => (
            <Check
              key={`${id}${index}`}
              id={`${id}${index}`}
              value={item}
              onChange={(e) => handler(e)}
              checked={check.includes(item)}
              {...args}
            >
              {item}
            </Check>
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
