import Footer from '@/components/Footer';
import MainComponent from '@/components/MainComponent';
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
    return (
        <>
            <Head>
                <title>Happy Birthday!!! Miraz:)</title>

                <link
                    href="https://fonts.googleapis.com/css?family=Work+Sans:300,400"
                    rel="stylesheet"
                />
                <link rel="icon" href="favicon.ico" />
            </Head>

            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"
                strategy="lazyOnload"
            />
            <Script src="main.js" strategy="lazyOnload" />

            <MainComponent />
            <Footer />
        </>
    );
}
