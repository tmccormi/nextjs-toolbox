import Head from "next/head";
import Header from "@components/Header";
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
        <p className="description">
          Here's an example of a Netlify Form! When you fill this out, the
          submissions can be found in the Netlify Admin site.
        </p>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
