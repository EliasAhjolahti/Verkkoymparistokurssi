import { useState } from 'react';
import './styles.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Confirmation from './components/Confirmation';
import { useTheme } from './BudgetAppContext';
import Settings from './components/Settings';

function App() {
  const { theme, currency } = useTheme();
  const [showSettings, setShowSettings] = useState(false);

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
      <div className={`app-container ${theme}`}>

      <div className="balance-box">
        <h2>Saldo: {saldo.toFixed(2)} {currency}</h2>
      </div>

      <TransactionForm onAdd={addTransaction} />

      <TransactionList transactions={transactions} onDelete={requestDelete} currency={currency}/>

      {showDialog && (
        <Confirmation
          message="Are you sure?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}


      <button className='settings-toggle' onClick={() => setShowSettings(true)}>
      Settings
      </button>

      {showSettings && <Settings onClose={() => setShowSettings(false)} />}
      
      </div>
    </>
  );
}

export default App;
