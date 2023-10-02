import { HomeLayout } from "@/layouts/homeLayout";
import { HomeContainer } from "@/styles/pages/home/homeStyle";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buchim | Início</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <HomeContainer>
        <h1 style={{ fontSize: "150px" }}>Página Inicial</h1>
        <h1 style={{ fontSize: "150px" }}>Página Inicial</h1>
        <h1 style={{ fontSize: "150px" }}>Página Inicial</h1>
        <h1 style={{ fontSize: "150px" }}>Página Inicial</h1>
        <h1 style={{ fontSize: "150px" }}>Página Inicial</h1>
        <h1 style={{ fontSize: "150px" }}>Página Inicial</h1>
      </HomeContainer>
    </>
  );
}

Home.PageLayout = HomeLayout;
