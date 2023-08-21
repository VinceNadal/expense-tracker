import { Meta, StoryObj } from "@storybook/react";
import { SignUpForm } from "./SignUpForm";

const meta = {
  title: "Components/SignupForm",
  tags: ["autodocs"],
  component: SignUpForm,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SignUpForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data) => {
      console.log(data);
    },
  },
};
