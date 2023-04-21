import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>Complete Care PPC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Submission Received!</h1>
        <p>Thank you for your questions! 
          Head back to the <Link href="/"><a>home page</a></Link>.
          </p>
      </main>

      <Footer />
    </div>
  )
}
