import ReactDOM from 'react-dom';
import { useTheme } from '../BudgetAppContext';



export default function Settings({ onClose }) {
    const { theme, toggleTheme, currency, setCurrency } = useTheme();


  return ReactDOM.createPortal(
    <div className="settings-overlay">
      <div className="settings">
        <h3>Settings</h3>

        <button onClick={toggleTheme}>
            Switch mode
        </button>


        <div>
          <label htmlFor="currency-select">Currency:</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="€">(€)</option>
            <option value="$">($)</option>
            <option value="£">(£)</option>
          </select>
        </div>


        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('settings-root')
  );
}
