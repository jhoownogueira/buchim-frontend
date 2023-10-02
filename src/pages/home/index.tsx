import { HomeLayout } from "@/layouts/homeLayout";
import { HomeContainer, Posts, PostsContainer, SugestionsContainer } from "@/styles/pages/home/homeStyle";
import { ChatCircle, DotsThree, ForkKnife, PaperPlaneTilt, Star } from "@phosphor-icons/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buchim | Início</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <HomeContainer>
        <PostsContainer>
          <Posts>
            <header>
              <div className="left">
                <img src="/login-images/006.jpg" />
                <strong>bomdeprato_gourmet</strong>
                <span>• 12 h</span>
              </div>
              <div className="right">
                <button>
                  <DotsThree size={24} />
                </button>
              </div>
            </header>
            <img src="/login-images/008.jpg" alt="" />
            <div className="buttons">
              <div className="left">
                <button>
                  <ForkKnife size={24} />
                </button>
                <button>
                  <ChatCircle size={24} />
                </button>
                <button>
                  <PaperPlaneTilt size={24} />
                </button>
              </div>
              <div className="right">
                <button>
                  <Star size={24} />
                </button>
              </div>
            </div>
            <footer>
              <p>
                🤤🍽 Sinta-se em Casa com o Nosso Strogonoff de Frango 🍽🤤 ✨ Se você está com água na boca só de
                olhar, você não está sozinho! Desejado por 105 famintos e contando...mais 🍗 Feito com amor e
                ingredientes frescos, nosso Strogonoff de Frango é a combinação perfeita de creme de leite, cogumelos e
                temperos que vão fazer seu paladar dançar! 🍄💃 🔥 Venha para o Buchim e faça parte dessa experiência
                culinária. Reserve sua mesa agora! 📲 #Buchim #StrogonoffDeFrango #ComidaCaseira #AmorPelaCulinária
                #SintaSeEmCasa
              </p>
            </footer>
          </Posts>
          <Posts>
            <header>
              <div className="left">
                <img src="/login-images/006.jpg" />
                <strong>bomdeprato_gourmet</strong>
                <span>• 12 h</span>
              </div>
              <div className="right">
                <button>
                  <DotsThree size={24} />
                </button>
              </div>
            </header>
            <img src="/login-images/008.jpg" alt="" />
            <div className="buttons">
              <div className="left">
                <button>
                  <ForkKnife size={24} />
                </button>
                <button>
                  <ChatCircle size={24} />
                </button>
                <button>
                  <PaperPlaneTilt size={24} />
                </button>
              </div>
              <div className="right">
                <button>
                  <Star size={24} />
                </button>
              </div>
            </div>
            <footer>
              <p>
                🤤🍽 Sinta-se em Casa com o Nosso Strogonoff de Frango 🍽🤤 ✨ Se você está com água na boca só de
                olhar, você não está sozinho! Desejado por 105 famintos e contando...mais 🍗 Feito com amor e
                ingredientes frescos, nosso Strogonoff de Frango é a combinação perfeita de creme de leite, cogumelos e
                temperos que vão fazer seu paladar dançar! 🍄💃 🔥 Venha para o Buchim e faça parte dessa experiência
                culinária. Reserve sua mesa agora! 📲 #Buchim #StrogonoffDeFrango #ComidaCaseira #AmorPelaCulinária
                #SintaSeEmCasa
              </p>
            </footer>
          </Posts>
        </PostsContainer>
        <SugestionsContainer>
          <span>Sugestões para você</span>
          <div className="row">
            <div className="left">
              <img src="/login-images/006.jpg" />
              <strong>bomdeprato_gourmet</strong>
            </div>
            <div className="right">
              <button>Visitar</button>
            </div>
          </div>
        </SugestionsContainer>
      </HomeContainer>
    </>
  );
}

Home.PageLayout = HomeLayout;
