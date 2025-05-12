import Head from "next/head";
import Projects from "@/components/Projects";
import Header from "@/components/Header";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Suraj Gautam</title>
        <meta name="description" content="Key projects led by Suraj Gautam in disaster risk management" />
      </Head>
      <Header />
      <main>
        <Projects />
      </main>
    </>
  );
}
