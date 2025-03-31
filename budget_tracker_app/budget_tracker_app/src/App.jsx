import { useState } from 'react'
import './styles.css'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {

const [transactions, setTransactions] = useState([]);

const addTransaction = (tx) => {
setTransactions([...transactions, tx]);
};

  return (
    <>
      <TransactionForm onAdd={addTransaction}/>
      <TransactionList transactions={transactions}/>    
      </>
  )
}

export default App
