import React from "react";
import Input from "@components/Input";
import Card from "@components/Cards/Card";
import CardTitle from "@components/Cards/CardTitle";

const App = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#e4e5e6" }}>
      <Input />
      <Card>
        <CardTitle>이것은 카드 타이틀이여~~</CardTitle>
        카드바디
      </Card>
      <Card>하이루~</Card>
    </div>
  );
};

export default App;
