import { HomeLayout } from "@/layouts/homeLayout";
import {
  CardRestaurant,
  DropdownButton,
  DropdownContent,
  DropdownRoot,
  DropdownTrigger,
  Pills,
  ResultSearch,
  SearchContainer,
} from "@/styles/pages/search/searchStyle";
import { CaretDown, CookingPot, ForkKnife } from "@phosphor-icons/react";
import Head from "next/head";

export default function Search() {
  return (
    <>
      <Head>
        <title>Buchim | Pesquisar</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <SearchContainer>
        <header>
          <input type="text" placeholder="Pesquisar restaurantes, tipo de cozinha ..." />
          <span>Eu estou procurando por..</span>
          <div className="filters">
            <div className="pills">
              <Pills>
                <ForkKnife size={16} weight="fill" />
                <p>Restaurantes</p>
              </Pills>
              <Pills>
                <CookingPot size={16} weight="fill" />
                <p>Tipo de cozinha</p>
              </Pills>
            </div>
            <DropdownRoot>
              <DropdownTrigger>
                <button>
                  <CaretDown size={16} weight="fill" />
                  <p>Filtros</p>
                </button>
              </DropdownTrigger>
              <DropdownContent align="start">
                <DropdownButton>Restaurantes</DropdownButton>
                <DropdownButton>Tipo de cozinha</DropdownButton>
                <DropdownButton>Localização</DropdownButton>
                <hr />
                <DropdownButton>Remover filtros</DropdownButton>
              </DropdownContent>
            </DropdownRoot>
          </div>
        </header>
        <ResultSearch>
          <CardRestaurant>
            <img className="food" src="/login-images/007.jpg" />
            <div className="content">
              <img src="/login-images/010.jpg" />
              <div className="info">
                <h5>bomdeprato_gourmet</h5>
                <h6>Votuporanga, São Paulo</h6>
              </div>
            </div>
          </CardRestaurant>
          <CardRestaurant>
            <img className="food" src="/login-images/008.jpg" />
            <div className="content">
              <img src="/login-images/008.jpg" />
              <div className="info">
                <h5>bomdeprato_gourmet</h5>
                <h6>Votuporanga, São Paulo</h6>
              </div>
            </div>
          </CardRestaurant>
          <CardRestaurant>
            <img className="food" src="/login-images/010.jpg" />
            <div className="content">
              <img src="/login-images/010.jpg" />
              <div className="info">
                <h5>bomdeprato_gourmet</h5>
                <h6>Votuporanga, São Paulo</h6>
              </div>
            </div>
          </CardRestaurant>
          <CardRestaurant>
            <img className="food" src="/login-images/019.jpg" />
            <div className="content">
              <img src="/login-images/019.jpg" />
              <div className="info">
                <h5>bomdeprato_gourmet</h5>
                <h6>Votuporanga, São Paulo</h6>
              </div>
            </div>
          </CardRestaurant>
          <CardRestaurant>
            <img className="food" src="/login-images/017.jpg" />
            <div className="content">
              <img src="/login-images/017.jpg" />
              <div className="info">
                <h5>bomdeprato_gourmet</h5>
                <h6>Votuporanga, São Paulo</h6>
              </div>
            </div>
          </CardRestaurant>
          <CardRestaurant>
            <img className="food" src="/login-images/012.jpg" />
            <div className="content">
              <img src="/login-images/012.jpg" />
              <div className="info">
                <h5>bomdeprato_gourmet</h5>
                <h6>Votuporanga, São Paulo</h6>
              </div>
            </div>
          </CardRestaurant>
        </ResultSearch>
      </SearchContainer>
    </>
  );
}

Search.PageLayout = HomeLayout;
