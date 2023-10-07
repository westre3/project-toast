import React from 'react';

import useKeyup from '../../hooks/useKeyup';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastsContent, setToastsContent] = React.useState([]);
  useKeyup('Escape', () => {
    setToastsContent([]);
  });

  function addToast(message, variant, id = crypto.randomUUID()) {
    setToastsContent([...toastsContent, { id, message, variant }]);
  }

  function removeToast(id) {
    setToastsContent(toastsContent.filter(toastContent => toastContent.id !== id));
  }

  return <ToastContext.Provider value={{ toastsContent, addToast, removeToast }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
