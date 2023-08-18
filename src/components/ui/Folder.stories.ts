import { Folder } from "@/components/ui/Folder";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Folder",
  component: Folder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Folder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Example",
    items: [
      {
        id: "1",
        name: "Item 1",
      },
      {
        id: "2",
        name: "Item 2",
      },
      {
        id: "3",
        name: "Item 3",
      },
    ],
  },
};
