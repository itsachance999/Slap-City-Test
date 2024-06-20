import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "jotai";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import SlapRouter from "@/components/Router";

import { slapStore } from "@/store";
import '@solana/wallet-adapter-react-ui/styles.css';
import '@/styles/globals.css';
import { useMemo } from "react";

const queryClient = new QueryClient();

function SlapApp({ Component, pageProps }: AppProps) {
    const endpoint = useMemo(() => clusterApiUrl('devnet'), []);

    const wallets = useMemo(() =>[
        new PhantomWalletAdapter()
    ], [])
    return (
        <Provider
            store={slapStore}    
        >
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>
                        <SessionProvider
                            session={pageProps.session}
                            refetchInterval={5 * 60}
                        >
                            <QueryClientProvider client={queryClient}>
                                <SlapRouter unauthorizedRoutes={['/']}>
                                    <Component {...pageProps} />
                                </SlapRouter>
                                <ReactQueryDevtools initialIsOpen={false} />
                            </QueryClientProvider>
                        </SessionProvider>
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </Provider>
    );
}

export default SlapApp;