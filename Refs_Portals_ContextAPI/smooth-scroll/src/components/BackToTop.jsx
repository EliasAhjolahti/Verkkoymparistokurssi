
// BackToTop.js
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function BackToTop() {
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    let root = document.getElementById('portal-root');

    // If portal-root doesn't exist, create it
    if (!root) {
      root = document.createElement('div');
      root.id = 'portal-root';
      document.body.appendChild(root);
    }

    setPortalRoot(root);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        padding: '10px 15px',
        fontSize: '16px',
        zIndex: 1000,
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}
    >
    Back to Top
    </button>,
    portalRoot
  );
}

export default BackToTop;
