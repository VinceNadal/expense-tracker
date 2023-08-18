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
        children: "Item 1",
      },
      {
        id: "2",
        children: "Item 2",
      },
      {
        id: "3",
        children: "Item 3",
      },
    ],
  },
};

export const MultipleFolder: Story = {
  args: {
    name: "Multiple",
    items: [
      {
        id: "1",
        children: "Item 1",
      },
      {
        id: "2",
        children: "Item 2",
      },
      {
        id: "3",
        children: "Item 3",
      },
    ],
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Story />
      </div>
    ),
  ],
};
