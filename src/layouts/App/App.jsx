import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Card from "@components/Cards/Card";
import CardTitle from "@components/Cards/CardTitle";
import Flex from "@components/Flex";
import Grid from "@components/Grid";
import Form from "@components/Forms/Form";
import TextInput from "@components/Forms/TextInput";
import Label from "@components/Forms/Label";
import Button from "@components/Button";
import Select from "@components/Forms/Select";
import Radio from "@components/Forms/Radio";
import Check from "@components/Forms/Check";
import SingleDate from "@components/Forms/SingleDate";
import DoubleDate from "@components/Forms/DoubleDate";

function App() {
  const { isLoading, error, data, isFetching } = useQuery("test", () =>
    axios("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res
    )
  );
  const [text, setText] = useState("");
  const [label, setLabel] = useState("");
  const [select, setSelect] = useState("3");
  const [select1, setSelect1] = useState("2");
  const [radio, setRadio] = useState("1");
  const [single, setSingle] = useState(new Date());
  const [single2, setSingle2] = useState("2021-10-06");
  const [period, setPeriod] = useState({
    start: "2022-02-01",
    end: "2022-02-28",
  });

  useEffect(() => {
    console.log("isLoading", isLoading);
    console.log("error", error);
    console.log("data", data);
    console.log("isFetcching", isFetching);
  }, []);

  const onChangePeriodHandler = (key) => (date) => {
    setPeriod({
      ...period,
      [key]: date,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(
      { text },
      { label },
      { select },
      { radio },
      { single },
      { single2 },
      { start: period.start, end: period.end }
    );
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
          <Grid col="minmax(120px, auto) 1fr" gap={30} align="center" mb-12>
            <Label>text</Label>
            <TextInput onChange={(e) => setText(e.target.value)} />
          </Grid>
          <Grid col="minmax(120px, auto) 1fr" gap={30} align="center">
            <Label required size="32px">
              label
            </Label>
            <Flex align="center" gap={8}>
              <TextInput onChange={(e) => setLabel(e.target.value)} disabled />
              <Button onClick={submit}>check</Button>
            </Flex>
          </Grid>
          <Grid col="minmax(120px, auto) 1fr" gap={30} align="center" mt-12>
            <Label>Radio</Label>
            <Flex gap={16}>
              <Radio
                id="test1"
                name="test"
                value="1"
                onChange={(e) => setRadio(e.target.value)}
                checked={radio === "1"}
                disabled
              >
                심쿵배송
              </Radio>
              <Radio
                id="test2"
                name="test"
                value="2"
                onChange={(e) => setRadio(e.target.value)}
                checked={radio === "2"}
              >
                물류배송
              </Radio>
              <Radio
                id="test3"
                name="test"
                value="3"
                onChange={(e) => setRadio(e.target.value)}
                checked={radio === "3"}
              >
                업체배송
              </Radio>
              <Radio
                id="test4"
                name="test"
                value="4"
                onChange={(e) => setRadio(e.target.value)}
                checked={radio === "4"}
              >
                라이더배송
              </Radio>
            </Flex>
          </Grid>
          <Grid col="minmax(120px, auto) 1fr" gap={30} align="center" mt-12>
            <Label>select</Label>
            <Flex gap={10}>
              <Select
                options={[
                  { id: "1", value: "value1" },
                  { id: "2", value: "value2" },
                  { id: "3", value: "value3" },
                ]}
                defaultOptions={{ label: "value", value: "id" }}
                isTotal
                disabled
                value={select1}
                onChange={(e) => setSelect1(e.target.value)}
              />
              <Select
                options={[
                  { id: "1", value: "value1" },
                  { id: "2", value: "value2" },
                  { id: "3", value: "value3" },
                ]}
                defaultOptions={{ label: "value", value: "id" }}
                isTotal
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              />
              <Select
                options={[
                  { id: "1", value: "value1" },
                  { id: "2", value: "value2" },
                  { id: "3", value: "value3" },
                ]}
                defaultOptions={{ label: "value", value: "id" }}
                isTotal
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              />
            </Flex>
          </Grid>
          <Grid col="minmax(120px, auto) 1fr" gap={30} align="center" mt-12>
            <Label>check</Label>
            <Flex gap={16}>
              <Check id="1" name="check" disabled>
                닭
              </Check>
              <Check id="2" name="check">
                오리
              </Check>
              <Check id="3" name="check">
                칠면조
              </Check>
              <Check id="4" name="check">
                소
              </Check>
              <Check id="5" name="check">
                양
              </Check>
              <Check id="6" name="check">
                돼지
              </Check>
              <Check id="7" name="check">
                사슴
              </Check>
              <Check id="8" name="check">
                캥거루
              </Check>
              <Check id="9" name="check">
                연어
              </Check>
              <Check id="10" name="check">
                흰살생선
              </Check>
              <Check id="11" name="check">
                야채
              </Check>
              <Check id="12" name="check">
                기타
              </Check>
            </Flex>
          </Grid>
        </Form>
      </Card>
      <Card>
        <Flex gap={10}>
          <Button primary>primary</Button>
          <Button warning size="medium">
            warning
          </Button>
          <Button dark size="large">
            dark
          </Button>
          <Button danger>danger</Button>
          <Button success>success</Button>
        </Flex>
        <Flex gap={10} mt-16>
          <Button primary outline>
            primary
          </Button>
          <Button warning outline>
            warning
          </Button>
          <Button dark outline>
            dark
          </Button>
          <Button danger outline>
            danger
          </Button>
          <Button success outline>
            success
          </Button>
        </Flex>
      </Card>
      <Card>
        <Grid col="minmax(80px, auto) 1fr" gap={10} align="center">
          <Label weight="700" size="1rem">
            포맷없는경우
          </Label>
          <SingleDate
            format="yyyy년 MM월 dd일"
            value={single}
            onChange={setSingle}
          />
        </Grid>
        <Grid col="minmax(80px, auto) 1fr" gap={10} align="center" mt-20>
          <Label weight="700" size="1rem">
            포맷있는경우
          </Label>
          <DoubleDate
            format="yyyy년 MM월 dd일"
            returnFormat="YYYY-MM-DD"
            start={period.start}
            end={period.end}
            onChangeStart={onChangePeriodHandler("start")}
            onChangeEnd={onChangePeriodHandler("end")}
          />
        </Grid>
      </Card>
      <Card>
        <CardTitle>컨텐츠목록</CardTitle>
        <Form>
          <Grid col="1fr 1fr" align="center" gap={40}>
            <Grid col="minmax(80px, auto) 1fr" gap={10} align="center">
              <Label weight="700" size="1rem" color="#5c6873">
                대분류
              </Label>
              <Select
                options={[
                  { id: "1", value: "value1" },
                  { id: "2", value: "value2" },
                  { id: "3", value: "value3" },
                ]}
                defaultOptions={{ label: "value", value: "id" }}
                isTotal
                disabled
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              />
            </Grid>
            <Grid col="minmax(80px, auto) 1fr" gap={10} align="center">
              <Label weight="700" size="1rem">
                소분류
              </Label>
              <Select
                options={[
                  { id: "1", value: "value1" },
                  { id: "2", value: "value2" },
                  { id: "3", value: "value3" },
                ]}
                defaultOptions={{ label: "value", value: "id" }}
                isTotal
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid col="1fr 1fr" align="center" gap={40} mt-20>
            <Grid col="minmax(80px, auto) 1fr" gap={10} align="center">
              <Label weight="700" size="1rem">
                기준일시
              </Label>
              <Select
                options={[
                  { id: "1", value: "value1" },
                  { id: "2", value: "value2" },
                  { id: "3", value: "value3" },
                ]}
                defaultOptions={{ label: "value", value: "id" }}
                isTotal
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              />
            </Grid>
            <Grid col="minmax(80px, auto) 1fr" gap={10} align="center">
              <Label weight="700" size="1rem">
                선택시간
              </Label>
              <Grid col="60px minmax(120px, auto) 1fr" align="center">
                <Radio id="total" name="day">
                  전체
                </Radio>
                <Radio id="choice" name="day">
                  기준일시 선택
                </Radio>
                <SingleDate
                  value={single2}
                  onChange={setSingle2}
                  isShowTime
                  format="yyyy-MM-dd HH:mm:ss"
                  returnFormat="YYYY-MM-DD HH:mm:ss"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid col="minmax(80px, auto) 1fr" gap={10} align="center" mt-20>
            <Label weight="700" size="1rem">
              제목검색
            </Label>
            <TextInput />
          </Grid>
        </Form>
      </Card>
    </div>
  );
}

export default App;
