import ReactDOM from 'react-dom';
import { useTheme } from '../BudgetAppContext';


export default function Settings({ onClose }) {
    const { theme, toggleTheme } = useTheme();

  return ReactDOM.createPortal(
    <div className="settings-overlay">
      <div className="settings">
        <h3>Settings</h3>

        <button onClick={toggleTheme}>
            Switch mode
        </button>

        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('settings-root')
  );
}
