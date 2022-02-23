import React from "react";
import Button from "@components/Button";
import Card from "@components/Cards/Card";
import Flex from "@components/Flex";

export default {
  title: "Example/Commons/Button",
  componentst: Button,
  argTypes: {
    children: { type: "string" },
    size: {
      type: "select",
      options: ["small", "medium", "large"],
    },
    disabled: { type: "boolean" },
    outline: { type: "boolean" },
  },
};

const defaultArgs = {
  children: "text",
  size: "small",
  disabled: false,
  outline: false,
};

const TotalButton = (args) => {
  return (
    <Card>
      <Flex align="center" gap={10}>
        <Button primary {...args} />
        <Button success {...args} />
        <Button warning {...args} />
        <Button dark {...args} />
        <Button danger {...args} />
      </Flex>
    </Card>
  );
};
export const Total = TotalButton.bind({});
Total.args = defaultArgs;

const PrimaryButton = (args) => <Button {...args} primary />;
export const Primary = PrimaryButton.bind({});
Primary.args = defaultArgs;

const SuccessButton = (args) => <Button {...args} success />;
export const Success = SuccessButton.bind({});
Success.args = defaultArgs;

const WarningButton = (args) => <Button {...args} warning />;
export const Warning = WarningButton.bind({});
Warning.args = defaultArgs;

const DarkButton = (args) => <Button {...args} dark />;
export const Dark = DarkButton.bind({});
Dark.args = defaultArgs;

const DangerButton = (args) => <Button {...args} danger />;
export const Danger = DangerButton.bind({});
Danger.args = defaultArgs;
