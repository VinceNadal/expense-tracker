import { Meta, StoryObj } from "@storybook/react";
import { PieChart } from "@/components/ui/PieChart";

const meta = {
  title: 'Components/PieChart',
  component: PieChart
} satisfies Meta<typeof PieChart>; 

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    labels: ["Red", "Blue", "Green", "Yellow"],
    dataSets: [{
      label: "Example Dataset",
      data: [25, 50, 15, 10],
      backgroundColor: ["Red", "Blue", "Green", "Yellow"]
    }]
  }
}