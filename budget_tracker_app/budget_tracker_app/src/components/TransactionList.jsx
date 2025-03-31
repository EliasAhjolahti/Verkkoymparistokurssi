export default function TransactionList({ transactions }) {
    return (
      <div>
        <h3>Transactions</h3>
        <ul>
          {transactions.map((tx, index) => (
            <li key={index}>
              {tx.description}: €{tx.sum}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  