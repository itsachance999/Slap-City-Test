import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

import counterAtom from '@/store/counter';

import styles from './wdbuttton.module.css';
import { useAtom } from 'jotai';

const WalletDisconnectButton: React.FC = () => {
  const { disconnect } = useWallet();
  const [, setCount] = useAtom(counterAtom);

  const handleDisconnect = () => {
    disconnect();
    setCount(0);
  };

  return (
    <button 
        className={styles.btnLogout}
        onClick={handleDisconnect}
    >
      Logout
    </button>
  );
};

export default WalletDisconnectButton;