import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import WalletDisconnectButton from "../WalletDisconnectButton";
import Link from 'next/link';

import styles from './header.module.css';

const Header: React.FC = () => {
    const { publicKey } = useWallet();

    return (
        <header>
            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                <Link 
                    passHref={true} 
                    href="/" 
                    className={styles.title}
                >
                    Slap City
                </Link>
                <nav className="flex flex-wrap justify-center items-center text-base md:py-1 md:pl-4 md:mr-auto md:ml-4 md:border-l md:border-gray-400">
                    <Link
                        key="/member"
                        href="/member"
                        className="mr-5 hover:text-gray-900"
                    >
                        Member
                    </Link>
                </nav>
                {publicKey? (
                    <>
                        <p className="mr-3">{publicKey.toBase58()}</p>
                        <WalletDisconnectButton></WalletDisconnectButton>
                    </>
                ) : (
                    <WalletMultiButton />
                )}
            </div>
        </header>
    );
}

export default Header;