import { HomeContainer } from "@/styles/pages/home/style";
import React from "react";

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HomeContainer>Meu menu</HomeContainer>
      {children}
      <footer>meu rodape</footer>
    </>
  );
}
