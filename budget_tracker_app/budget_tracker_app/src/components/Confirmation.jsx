import ReactDOM from 'react-dom';

export default function Confirmation({ message, onConfirm, onCancel }) {
  return ReactDOM.createPortal(
    <div className="confirmation-overlay">
      <div className="confirmation">
        <p>{message}</p>
        <div className="confirmation-buttons">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById('confirmation-root')
  );
}
