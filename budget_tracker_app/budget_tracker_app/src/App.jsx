import { useState } from 'react';
import './styles.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Confirmation from './components/Confirmation';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const saldo = transactions.reduce((acc, tx) => acc + tx.sum, 0);

  const addTransaction = (tx) => {
    setTransactions([...transactions, tx]);
  };

  const requestDelete = (index) => {
    setDeleteIndex(index);
    setShowDialog(true);
  };

  const handleConfirm = () => {
    if (deleteIndex !== null) {
      setTransactions(transactions.filter((_, index) => index !== deleteIndex));
    }
    setShowDialog(false);
    setDeleteIndex(null);
  };

  const handleCancel = () => {
    setShowDialog(false);
    setDeleteIndex(null);
  };

  return (
    <>
      <div className="balance-box">
        <h2>Saldo: {saldo.toFixed(2)} €</h2>
      </div>

      <TransactionForm onAdd={addTransaction} />

      <TransactionList transactions={transactions} onDelete={requestDelete} />

      {showDialog && (
        <Confirmation
          message="Are you sure?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
}

export default App;
