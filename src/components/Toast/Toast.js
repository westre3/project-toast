import React from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from 'react-feather';

import { ToastContext } from '../ToastProvider/ToastProvider';
import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, children, variant }) {
  const { removeToast } = React.useContext(ToastContext);
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <VisuallyHidden>{variant} - </VisuallyHidden>
      <p className={styles.content}>{children}</p>
      <button
        className={styles.closeButton}
        onClick={() => {
          removeToast(id);
        }}
        aria-label='Dismiss message'
        aria-live='off'>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
