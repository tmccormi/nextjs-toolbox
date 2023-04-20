import Head from "next/head";
import Header from "@components/Header";
import MainBody from "@components/MainBody";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Complete Care PPC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="CCPPC Web Chat POC 2" />
        <hr />
        <MainBody />
        <p className="description">
          Questions, ask our very intelligent AI Chatbot!
        </p>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
