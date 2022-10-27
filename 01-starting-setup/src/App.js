import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2021, 2, 28),
      title: 'Car insurance',
      amount: 200 
    },
    {
      id: 'e2',
      date: new Date(2022, 4, 15),
      title: 'Wedding',
      amount: 3000
    },
    {
      id: 'e3',
      date: new Date(2021, 7, 6),
      title: 'Europe trip',
      amount: 10000
    },
    {
      id: 'e4',
      date: new Date(2020, 9, 18),
      title: 'X Expense',
      amount: 100
    },
  ]
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
