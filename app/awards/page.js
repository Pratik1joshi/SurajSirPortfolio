import Head from "next/head";
import Awards from "@/components/Awards";
import Header from "@/components/Header";

export default function AwardsPage() {
  return (
    <>
      <Head>
        <title>Awards & Recognition | Suraj Gautam</title>
        <meta name="description" content="Awards and recognitions received by Suraj Gautam" />
      </Head>
      <Header />
      <main>
        <Awards />
      </main>
    </>
  );
}
