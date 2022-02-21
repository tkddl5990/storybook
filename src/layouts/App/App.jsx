import React from "react";
import Card from "@components/Cards/Card";
import CardTitle from "@components/Cards/CardTitle";
import Flex from "@components/Flex";

const App = () => {
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
    </div>
  );
};

export default App;
