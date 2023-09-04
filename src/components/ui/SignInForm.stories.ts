import { Meta, StoryObj } from '@storybook/react';
import { SignInForm } from '@/components/ui/SignInForm';

const meta = {
  title: "Components/SignInForm",
  parameters: {
    layout: "centered"
  },
  component: SignInForm,
  tags: ["autodocs"]
} satisfies Meta<typeof SignInForm>;

export default meta;

type Story = StoryObj<typeof meta> 

export const DefaultSignInForm: Story = {
  
}