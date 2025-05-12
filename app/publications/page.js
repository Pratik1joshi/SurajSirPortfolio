import Head from "next/head";
import Publications from "@/components/Publications";
import Header from "@/components/Header";

export default function PublicationsPage() {
  return (
    <>
      <Head>
        <title>Publications | Suraj Gautam</title>
        <meta name="description" content="Research publications by Suraj Gautam, Disaster Risk Management Expert" />
      </Head>
      <Header />
      <main>
        <Publications />
      </main>
    </>
  );
}
