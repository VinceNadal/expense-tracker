import { Meta, StoryObj } from '@storybook/react';
import { ToggleTheme } from '@/components/ui/ToggleTheme';
import { ThemeProvider } from '@/components/ThemeProvider' 
import { useTheme } from 'next-themes';

const meta = {
  title: 'Components/ToggleTheme',
  component: ToggleTheme,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof ToggleTheme>
export default meta;

type Story = StoryObj<typeof meta>;

export const LightMode: Story = {
  args: {
    
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider attribute="class" defaultTheme='light' storageKey='light-mode'>
          <Story />
        </ThemeProvider>
      );
    },
  ],
}

export const DarkMode: Story = {
  decorators: [
    (Story) => {
      return (
        <ThemeProvider attribute="class" defaultTheme="dark" storageKey='dark-mode'>
          <Story />
        </ThemeProvider>
      );
    },
  ],
}

export const SystemTheme: Story = {
  decorators: [
    (Story) => {
      return (
        <ThemeProvider attribute="class" defaultTheme='system' storageKey='system' enableSystem>
          <Story />
        </ThemeProvider>
      );
    },
  ],
}