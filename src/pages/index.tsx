import Layout from "@/components/Layout";
import styles from '../styles/home.module.css';
import Head from "next/head";

const Home: React.FC = () => {
    return (
        <Layout>
            <Head>
                <title>Slap City</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col items-center">
                <h1 className={styles.title}>Welcome to Slap City</h1>
                <p className={styles.content}>This is the home page content.</p>
            </div>
        </Layout>
    );
}

export default Home;