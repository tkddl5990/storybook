import React, { useState } from "react";
import Card from "@components/Cards/Card";
import CardTitle from "@components/Cards/CardTitle";
import Flex from "@components/Flex";
import Grid from "@components/Grid";
import Form from "@components/Forms/Form";
import TextInput from "@components/Forms/TextInput";
import Label from "@components/Forms/Label";

const App = () => {
  const [text, setText] = useState("");
  const [label, setLabel] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(text, label);
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#e4e5e6" }}>
      <Card>
        <CardTitle>이것은 카드 타이틀이여~~</CardTitle>
        카드바디
      </Card>
      <Card>
        <Flex>
          <div style={{ width: 120, height: 120, background: "red" }} />
          <div style={{ width: 120, height: 120, background: "gold" }} />
        </Flex>
      </Card>
      <Card>
        <Grid col="1fr 2fr 1fr" row="repeat(3, minmax(100px, auto))">
          <div style={{ padding: 20, background: "red" }} />
          <div style={{ padding: 20, background: "orange" }} />
          <div style={{ padding: 20, background: "yellow" }} />
          <div style={{ padding: 20, background: "green" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            molestias mollitia nemo asperiores quis ut, aliquid totam obcaecati.
          </div>
          <div style={{ padding: 20, background: "blue" }} />
          <div style={{ padding: 20, background: "navy" }} />
          <div style={{ padding: 20, background: "purple" }} />
          <div style={{ padding: 20, background: "grey" }} />
          <div style={{ padding: 20, background: "black" }} />
        </Grid>
      </Card>
      <Card>
        <Form onSubmit={submit}>
          <Grid col="80px 1fr" gap={30} align="center" mb-12>
            <Label>text</Label>
            <TextInput onChange={(e) => setText(e.target.value)} error />
          </Grid>
          <Grid col="80px 1fr" gap={30} align="center">
            <Label required>labael</Label>
            <TextInput onChange={(e) => setLabel(e.target.value)} />
          </Grid>
        </Form>
      </Card>
    </div>
  );
};

export default App;
