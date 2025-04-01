import { useState } from 'react'
import './styles.css'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {

  const deleteTransaction = (indexDelete) => {
    setTransactions(transactions.filter((_, index) => index !== indexDelete));
  };
  

const [transactions, setTransactions] = useState([]);

const saldo = transactions.reduce((acc, tx) => acc + tx.sum, 0)

const addTransaction = (tx) => {
setTransactions([...transactions, tx]);
};

  return (
    <>
      <div className="balance-box">
      <h2>Saldo: {saldo.toFixed(2)} €</h2>
      </div>
      <TransactionForm onAdd={addTransaction}/>
      <TransactionList transactions={transactions} onDelete={deleteTransaction}/>    
      </>
  )
}


export default App