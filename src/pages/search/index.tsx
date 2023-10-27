import { HomeLayout } from "@/layouts/homeLayout";
import { apiI } from "@/services/api";
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
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Alerts } from "@/utils/AlertsContainers";
import { useRouter } from "next/navigation";

interface IRestaurants {
  id: string;
  username: string;
  fullName: string;
  profileImageURL: string;
  following_me: true;
  localization: {
    latitude: number;
    longitude: number;
    street: string;
    number: number;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
}

export default function Search() {
  const router = useRouter();
  const [restaurants, setRestaurants] = useState<IRestaurants[]>([]);
  const [refresh, setRefresh] = useState(false);

  const redirectLogin = function () {
    router.push("/");
  };

  const getRestaurants = async () => {
    const getCookie = Cookies.get("user_data");
    if (!getCookie) {
      Alerts.warningLight("Por favor faça login novamente");
      redirectLogin();
      return false;
    }
    const idUser = JSON.parse(getCookie).userID;
    try {
      const response = await apiI.get(`/post/restaurants/${idUser}`);
      if (response.status === 200) {
        setRestaurants(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const followRestaurant = async (idRestaurant: string) => {
    const getCookie = Cookies.get("user_data");
    if (!getCookie) {
      Alerts.warningLight("Por favor faça login novamente");
      redirectLogin();
      return false;
    }
    const idUser = await JSON.parse(getCookie).userID;
    try {
      const response = await apiI.post(`/post/follow`, {
        userID: idUser,
        restaurantID: idRestaurant,
      });
      if (response.status === 201) {
        setRefresh(!refresh);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, [refresh]);

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
                <CaretDown size={16} weight="fill" />
                <p>Filtros</p>
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
          {restaurants.map((restaurant) => {
            return (
              <CardRestaurant key={restaurant.id}>
                <img className="food" src={restaurant.profileImageURL} />
                <div className="content">
                  <div className="left">
                    <img src={restaurant.profileImageURL} />
                    <div className="info">
                      <h5>{restaurant.username}</h5>
                      <h6>
                        {restaurant.localization.city}, {restaurant.localization.state}
                      </h6>
                    </div>
                  </div>
                  {restaurant.following_me ? (
                    <button className="follow" onClick={() => followRestaurant(restaurant.id)}>
                      <p>Não seguir</p>
                    </button>
                  ) : (
                    <button className="follow" onClick={() => followRestaurant(restaurant.id)}>
                      <p>Seguir</p>
                    </button>
                  )}
                </div>
              </CardRestaurant>
            );
          })}
        </ResultSearch>
      </SearchContainer>
    </>
  );
}

Search.PageLayout = HomeLayout;
