import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useWallet } from "@solana/wallet-adapter-react";
import Loading from "../Loading";

interface SlapRouterProps {
    unauthorizedRoutes: string[];
    children: ReactNode
}

const SlapRouter: React.FC<SlapRouterProps> = ({
    unauthorizedRoutes,
    children
}) => {
    const router = useRouter();
    const { publicKey } = useWallet();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!publicKey && !unauthorizedRoutes.includes(router.pathname)) {
            router.push('/');
        }else {
            setLoading(false);
        }
    }, [publicKey, router, unauthorizedRoutes]);

    return loading ? <Loading /> : <>{children}</>;
};

export default SlapRouter;