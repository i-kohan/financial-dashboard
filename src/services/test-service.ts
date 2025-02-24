export const mockApi = {
  getCards: async () => [
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
  ],
  getTransactions: async () => [
    {
      id: 1,
      description: "Deposit from my Card",
      date: "28 Jan 2021",
      amount: -850,
    },
    { id: 2, description: "Deposit Paypal", date: "25 Jan 2021", amount: 2500 },
    { id: 3, description: "Jemi Wilson", date: "21 Jan 2021", amount: 5400 },
  ],
  getBalanceHistory: async () => [120, 300, 400, 700, 650, 800],
};

export default mockApi;
