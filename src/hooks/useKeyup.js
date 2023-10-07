import React from 'react';

export default function useKeyup(key, callback) {
  React.useEffect(() => {
    function escapeListener(event) {
      if (event.key === key) {
        callback();
      }
    }

    window.addEventListener('keyup', escapeListener);
    return () => {
      window.removeEventListener('keyup', escapeListener);
    };
  }, [key, callback]);
}
