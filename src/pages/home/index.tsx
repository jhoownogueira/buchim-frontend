import { HomeLayout } from "@/layouts/homeLayout";
import { QuadradoAmarelo, QuadradoVermelho } from "@/styles/pages/home/style";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState(true);
  const Alternar = function () {
    setView(!view);
  };
  return (
    <>
      <h1>Oi tudo bem?</h1>
      {view ? <QuadradoVermelho /> : <QuadradoAmarelo />}
      <h1>como se ta</h1>
      <h1>quero saber a cor</h1>
      <button onClick={Alternar}>Change</button>
    </>
  );
}

Home.PageLayout = HomeLayout;
