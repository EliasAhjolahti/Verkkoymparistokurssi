export default function TransactionList({ transactions, onDelete }) {

    return (
      <div>
        <h3>Transactions</h3>
        <ul id="transaction-list">
          {transactions.map((tx, index) => (
            <li key={index} className={tx.sum >= 0 ? 'income' : 'expense'}>
              {tx.description}: €{tx.sum}
              <button onClick={() => onDelete(index)}>Poista</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  