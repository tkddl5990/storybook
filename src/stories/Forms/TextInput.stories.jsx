import React, { useState, useEffect } from "react";
import Card from "@components/Cards/Card";
import Form from "@components/Forms/Form";
import Grid from "@components/Grid";
import Label from "@components/Forms/Label";
import TextInput from "@components/Forms/TextInput";

export default {
  title: "Example/Forms/TextInput",
  components: TextInput,
  argTypes: {
    placeholder: { type: "string" },
    error: { type: "boolean" },
    disabled: { type: "boolean" },
  },
};

const Template = (args) => {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(text);
  };

  return (
    <Card>
      <Form onSubmit={submit}>
        <TextInput
          placeholder={args.placeholder}
          onChange={(e) => setText(e.target.value)}
          disabled={args.disabled}
          error={args.error}
        />
      </Form>
    </Card>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "This Is TextInput Component",
  error: false,
  disabled: false,
};

const Template2 = (args) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setText(e.target.value);
    setError(false);
  };

  useEffect(() => {
    setError(args.error);
  }, [args.error]);

  const submit = (e) => {
    e.preventDefault();
    if (!text) {
      setError(true);
      return;
    }
    alert(text);
  };

  return (
    <Card>
      <Form onSubmit={submit}>
        <Grid col="auto 1fr" gap={30} align="center">
          <Label weight={700}>여기는 라벨입니다</Label>
          <TextInput
            onChange={onChange}
            error={error}
            disabled={args.disabled}
            placeholder={args.placeholder}
          />
        </Grid>
      </Form>
    </Card>
  );
};
export const Second = Template2.bind({});
Second.args = {
  placeholder: "This Is TextInput Component",
  error: false,
  disabled: false,
};
