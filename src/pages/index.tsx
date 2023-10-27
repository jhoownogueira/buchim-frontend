import { LoginContainer } from "@/styles/pages/indexStyle";
import Head from "next/head";
import { useRouter } from "next/navigation";
import * as Tabs from "@radix-ui/react-tabs";
import { Cookie, CookingPot } from "@phosphor-icons/react";
import { useState } from "react";
import { Alerts } from "@/utils/AlertsContainers";
import { api } from "@/services/api";
import Cookies from "js-cookie";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const redirectHome = () => {
    router.push("/home");
  };

  const redirectRegister = () => {
    router.push("/register-user");
  };

  const loginUser = async () => {
    if (!username || !password) {
      Alerts.warningLight("Preencha todos os campos");
      return false;
    }
    const data = {
      username,
      password,
    };

    try {
      const response = await api.post("/login/user", data);
      if (response.status === 200) {
        const { access_token, refreshToken, user } = response.data;
        if (access_token && refreshToken && user) {
          const expirationHour = 5;
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 7);
          expirationDate.setHours(expirationHour, 0, 0, 0);
          user.type = "user";
          Cookies.set("user_data", JSON.stringify(user), {
            expires: expirationDate,
          });
          Cookies.set("token", access_token, { expires: expirationDate });
          Cookies.set("refresh_token", refreshToken, {
            expires: expirationDate,
          });
          redirectHome();
        } else {
          console.log("Erro ao salvar os cookies");
          Alerts.warningLight("Por favor faça login novamente");
        }
      }
    } catch (error: any) {
      if (error.response.data.statusCode === 401) {
        Alerts.warningLight(error.response.data.message);
      }
      console.log(error);
    }
  };

  const loginRestaurant = async () => {
    if (!username || !password) {
      Alerts.warningLight("Preencha todos os campos");
      return false;
    }
    const data = {
      username,
      password,
    };

    try {
      const response = await api.post("/login/restaurant", data);
      if (response.status === 200) {
        const { access_token, refreshToken, restaurant } = response.data;
        if (access_token && refreshToken && restaurant) {
          const expirationHour = 5;
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 7);
          expirationDate.setHours(expirationHour, 0, 0, 0);
          restaurant.type = "restaurant";
          Cookies.set("user_data", JSON.stringify(restaurant), {
            expires: expirationDate,
          });
          Cookies.set("token", access_token, { expires: expirationDate });
          Cookies.set("refresh_token", refreshToken, {
            expires: expirationDate,
          });
          redirectHome();
        } else {
          console.log("Erro ao salvar os cookies");
          Alerts.warningLight("Por favor faça login novamente");
        }
      }
    } catch (error: any) {
      if (error.response.data.statusCode === 401) {
        Alerts.warningLight(error.response.data.message);
      }
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Buchim | Entrar</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <LoginContainer>
        <div className="left">
          <div className="images-container">
            <div className="column-image">
              <img src="/login-images/001.jpg" />
              <img src="/login-images/002.jpg" />
              <img src="/login-images/003.jpg" />
              <img src="/login-images/004.jpg" />
            </div>
            <div className="column-image">
              <img src="/login-images/005.jpg" />
              <img src="/login-images/006.jpg" />
              <img src="/login-images/007.jpg" />
              <img src="/login-images/008.jpg" />
            </div>
            <div className="column-image">
              <img src="/login-images/009.jpg" />
              <img src="/login-images/010.jpg" />
              <img src="/login-images/011.jpg" />
              <img src="/login-images/012.jpg" />
            </div>
            <div className="column-image">
              <img src="/login-images/013.jpg" />
              <img src="/login-images/014.jpg" />
              <img src="/login-images/015.jpg" />
              <img src="/login-images/016.jpg" />
            </div>
            <div className="column-image">
              <img src="/login-images/017.jpg" />
              <img src="/login-images/018.jpg" />
              <img src="/login-images/019.jpg" />
              <img src="/login-images/020.jpg" />
            </div>
          </div>
        </div>
        <div className="right">
          <header>
            <span>Não possui conta?</span>
            <button onClick={redirectRegister}>Inscreva-se</button>
          </header>
          <main>
            <img src="/logo/logo-orange.svg" />
            <span>Bem vindo ao Buchim, por favor entre com seus dados para usar o aplicativo.</span>
          </main>
          <Tabs.Root defaultValue="user" className="root-tabs">
            <Tabs.List className="container-tabs">
              <Tabs.Trigger className="tab-button" value="user">
                <Cookie size={24} />
                Usuário
              </Tabs.Trigger>
              <Tabs.Trigger className="tab-button" value="restaurant">
                <CookingPot size={24} />
                Anunciante
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="user">
              <article>
                <fieldset>
                  <input
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
                <button className="forget-password">Esqueceu sua senha?</button>
                <button className="login" onClick={loginUser}>
                  Entrar
                </button>
              </article>
            </Tabs.Content>
            <Tabs.Content value="restaurant">
              <article>
                <fieldset>
                  <input
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
                <button className="forget-password">Esqueceu sua senha?</button>
                <button className="login" onClick={loginRestaurant}>
                  Entrar
                </button>
              </article>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </LoginContainer>
    </>
  );
}
