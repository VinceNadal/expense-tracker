import { Meta, StoryObj } from '@storybook/react'
import { Expense, ExpensesTable } from '@/components/ui/ExpensesTable';

const meta = {
  title: "Components/ExpensesTable",
  component: ExpensesTable,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ExpensesTable>

export default meta;

type Story = StoryObj<typeof meta>

const expenses: Expense[] = [
  {
    id: "1",
    name: "Office Supplies",
    amount: 50,
    quantity: 2,
  },
  {
    id: "2",
    name: "Travel Expenses",
    amount: 120,
    quantity: 1,
  },
  {
    id: "3",
    name: "Marketing Materials",
    amount: 200,
    quantity: 3,
  },
  {
    id: "4",
    name: "Utilities",
    amount: 80,
    quantity: 1,
  },
  {
    id: "5",
    name: "Employee Salaries",
    amount: 1500,
    quantity: 5,
  },
  {
    id: "6",
    name: "Rent",
    amount: 700,
    quantity: 1,
  },
  {
    id: "7",
    name: "Equipment Maintenance",
    amount: 100,
    quantity: 2,
  },
  {
    id: "8",
    name: "Training Expenses",
    amount: 300,
    quantity: 1,
  },
  {
    id: "9",
    name: "Software Subscriptions",
    amount: 250,
    quantity: 3,
  },
  {
    id: "10",
    name: "Consultation Fees",
    amount: 450,
    quantity: 2,
  },
];

export const Sample:Story = {
  args: {
    expenseList: expenses,
    currencyFormat: "PHP"
  }
}

const expenseListWithFiftyItems: Expense[] = [
  { id: "1", name: "Office Supplies", amount: 50, quantity: 2 },
  { id: "2", name: "Travel Expenses", amount: 120, quantity: 1 },
  { id: "3", name: "Marketing Materials", amount: 200, quantity: 3 },
  { id: "4", name: "Utilities", amount: 80, quantity: 1 },
  { id: "5", name: "Employee Salaries", amount: 1500, quantity: 5 },
  { id: "6", name: "Rent", amount: 700, quantity: 1 },
  { id: "7", name: "Equipment Maintenance", amount: 100, quantity: 2 },
  { id: "8", name: "Training Expenses", amount: 300, quantity: 1 },
  { id: "9", name: "Software Subscriptions", amount: 250, quantity: 3 },
  { id: "10", name: "Consultation Fees", amount: 450, quantity: 2 },
  { id: "11", name: "Printing Costs", amount: 80, quantity: 1 },
  { id: "12", name: "Advertising Expenses", amount: 300, quantity: 2 },
  { id: "13", name: "Internet Services", amount: 50, quantity: 1 },
  { id: "14", name: "Tax Payments", amount: 600, quantity: 1 },
  { id: "15", name: "Travel Accommodation", amount: 250, quantity: 3 },
  { id: "16", name: "Repairs and Maintenance", amount: 120, quantity: 1 },
  { id: "17", name: "Conference Fees", amount: 350, quantity: 1 },
  { id: "18", name: "Cleaning Services", amount: 100, quantity: 2 },
  { id: "19", name: "Office Furniture", amount: 500, quantity: 1 },
  { id: "20", name: "Shipping Costs", amount: 60, quantity: 2 },
  { id: "21", name: "Employee Benefits", amount: 800, quantity: 1 },
  { id: "22", name: "Insurance Premiums", amount: 180, quantity: 3 },
  { id: "23", name: "Phone Expenses", amount: 70, quantity: 1 },
  { id: "24", name: "Legal Fees", amount: 400, quantity: 2 },
  { id: "25", name: "Training Workshops", amount: 150, quantity: 1 },
  { id: "26", name: "Renovation Costs", amount: 1200, quantity: 1 },
  { id: "27", name: "Subscription Services", amount: 90, quantity: 2 },
  { id: "28", name: "Entertainment Expenses", amount: 250, quantity: 1 },
  { id: "29", name: "Vehicle Expenses", amount: 300, quantity: 3 },
  { id: "30", name: "Printing Services", amount: 50, quantity: 1 },
  { id: "31", name: "Healthcare Costs", amount: 180, quantity: 2 },
  { id: "32", name: "Conference Travel", amount: 400, quantity: 1 },
  { id: "33", name: "Subcontractor Payments", amount: 150, quantity: 1 },
  { id: "34", name: "Membership Fees", amount: 70, quantity: 2 },
  { id: "35", name: "Charitable Donations", amount: 200, quantity: 1 },
  { id: "36", name: "Consulting Services", amount: 350, quantity: 3 },
  { id: "37", name: "Promotional Items", amount: 60, quantity: 1 },
  { id: "38", name: "Employee Training", amount: 500, quantity: 2 },
  { id: "39", name: "Bank Fees", amount: 40, quantity: 1 },
  { id: "40", name: "Office Equipment", amount: 700, quantity: 1 },
  { id: "41", name: "Advertising Campaigns", amount: 300, quantity: 2 },
  { id: "42", name: "Travel Allowances", amount: 100, quantity: 1 },
  { id: "43", name: "Software Licenses", amount: 250, quantity: 3 },
  { id: "44", name: "Vehicle Maintenance", amount: 120, quantity: 1 },
  { id: "45", name: "Conference Registrations", amount: 450, quantity: 2 },
  { id: "46", name: "Cleaning Supplies", amount: 80, quantity: 1 },
  { id: "47", name: "Marketing Campaigns", amount: 300, quantity: 1 },
  { id: "48", name: "Website Development", amount: 600, quantity: 5 },
  { id: "49", name: "Travel Insurance", amount: 250, quantity: 1 },
  { id: "50", name: "Vendor Payments", amount: 450, quantity: 2 },
];

export const MultiplePages:Story = {
  args: {
    expenseList: expenseListWithFiftyItems,
    currencyFormat: "PHP",
  }
}

export const SelectionEnabled:Story = {
  args: {
    expenseList: expenses,
    currencyFormat: "PHP",
    enableRowSelection: true
  }
}