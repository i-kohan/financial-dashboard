export interface Card {
  id: number;
  balance: number;
  holder: string;
  number: string;
  validThru: string;
}

export interface Transaction {
  id: number;
  description: string;
  date: string;
  amount: number;
  transactionType: "card" | "paypal" | "transfer";
}

export interface WeeklyActivity {
  day: string;
  deposit: number;
  withdraw: number;
}

export interface ExpenseStatistics {
  category: string;
  value: number;
  color: string;
}

export interface ContactItem {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

export interface BalanceHistory {
  month: string;
  balance: number;
}

const wrapPromise = <T>(promise: Promise<T>) => {
  let status = "pending";
  let result: T;

  const suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    },
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    },
  };
};

const mockPromise = <T>(data: T) => {
  return wrapPromise<T>(
    new Promise((resolve) => setTimeout(() => resolve(data), 100)),
  );
};

export interface MockApi {
  getCards: { read(): Card[] };
  getAllCards: { read(): Card[] };
  getTransactions: { read(): Transaction[] };
  getWeeklyActivity: { read(): WeeklyActivity[] };
  getExpenseStatistics: { read(): ExpenseStatistics[] };
  getContacts: { read(): ContactItem[] };
  getBalanceHistory: { read(): BalanceHistory[] };
}

export const mockApi: MockApi = {
  getCards: mockPromise([
    {
      id: 1,
      balance: 5756,
      holder: "Eddy Cusuma",
      number: "3778 **** **** 1234",
      validThru: "12/22",
    },
    {
      id: 2,
      balance: 8200,
      holder: "John Doe",
      number: "4491 **** **** 5678",
      validThru: "11/24",
    },
  ]),
  getAllCards: mockPromise([
    {
      id: 1,
      balance: 5756,
      holder: "Eddy Cusuma",
      number: "3778 **** **** 1234",
      validThru: "12/22",
    },
    {
      id: 2,
      balance: 8200,
      holder: "John Doe",
      number: "4491 **** **** 5678",
      validThru: "11/24",
    },
    {
      id: 3,
      balance: 8200,
      holder: "John Doe",
      number: "4491 **** **** 5678",
      validThru: "11/24",
    },
    {
      id: 4,
      balance: 8200,
      holder: "John Doe",
      number: "4491 **** **** 5678",
      validThru: "11/24",
    },
  ]),
  getTransactions: mockPromise([
    {
      id: 1,
      description: "Deposit from my Card",
      date: "28 January 2021",
      amount: -850,
      transactionType: "card",
    },
    {
      id: 2,
      description: "Deposit Paypal",
      date: "25 January 2021",
      amount: 2500,
      transactionType: "paypal",
    },
    {
      id: 3,
      description: "Jemi Wilson",
      date: "21 January 2021",
      amount: 5400,
      transactionType: "transfer",
    },
  ]),
  getWeeklyActivity: mockPromise([
    { day: "Sat", deposit: 200, withdraw: 500 },
    { day: "Sun", deposit: 100, withdraw: 350 },
    { day: "Mon", deposit: 300, withdraw: 400 },
    { day: "Tue", deposit: 400, withdraw: 500 },
    { day: "Wed", deposit: 150, withdraw: 200 },
    { day: "Thu", deposit: 250, withdraw: 450 },
    { day: "Fri", deposit: 350, withdraw: 400 },
  ]),
  getExpenseStatistics: mockPromise([
    { category: "Others", value: 35, color: "#000000" },
    { category: "Entertainment", value: 30, color: "#1F3B6F" },
    { category: "Investment", value: 20, color: "#3B82F6" },
    { category: "Bill Expense", value: 15, color: "#F97316" },
  ]),
  getContacts: mockPromise([
    {
      id: 1,
      name: "Livia Bator",
      role: "CEO",
      avatar: "/assets/avatars/avatar.png",
    },
    {
      id: 2,
      name: "Randy Press",
      role: "Director",
      avatar: "/assets/avatars/avatar (1).png",
    },
    {
      id: 3,
      name: "Workman",
      role: "Designer",
      avatar: "/assets/avatars/avatar (2).png",
    },
    {
      id: 4,
      name: "Anna Doe",
      role: "Manager",
      avatar: "/assets/avatars/avatar (3).png",
    },
    {
      id: 5,
      name: "John Smith",
      role: "Engineer",
      avatar: "/assets/avatars/avatar (4).png",
    },
  ]),
  getBalanceHistory: mockPromise([
    { month: "Jul", balance: 200 },
    { month: "Aug", balance: 400 },
    { month: "Sep", balance: 600 },
    { month: "Oct", balance: 800 },
    { month: "Nov", balance: 500 },
    { month: "Dec", balance: 700 },
    { month: "Jan", balance: 650 },
  ]),
};
