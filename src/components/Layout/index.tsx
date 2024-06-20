import Header from "../Header";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>{children}</main>
        </div>
    );
}

export default Layout;