import Head from "next/head";
import { useRouter } from "next/navigation";
import { RegisterUserContainer } from "@/styles/pages/register-user/registerUserStyle";
import { Anchor, BowlFood, Cookie, CookingPot, Shrimp, UsersFour } from "@phosphor-icons/react";
import Dropzone from "react-dropzone";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { Alerts } from "@/utils/AlertsContainers";
import { api } from "@/services/api";

export default function RegisterUser() {
  const router = useRouter();
  const redirectLogin = function () {
    router.push("/");
  };
  const [image, setImage] = useState("");
  const [file, setFile] = useState();
  const [usuarioUser, setUsuarioUser] = useState("");
  const [nomeUser, setNomeUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [senhaUser, setSenhaUser] = useState("");
  const [usuarioRestaurant, setUsuarioRestaurant] = useState("");

  const [imageRestaurant, setImageRestaurant] = useState("");
  const [fileRestaurant, setFileRestaurant] = useState();
  const [nomeRestaurant, setNomeRestaurant] = useState("");
  const [emailRestaurant, setEmailRestaurant] = useState("");
  const [senhaRestaurant, setSenhaRestaurant] = useState("");
  const [cepRestaurant, setCepRestaurant] = useState("");
  const [numeroRestaurant, setNumeroRestaurant] = useState("");

  const onDrop = (acceptedFiles: any) => {
    const file = acceptedFiles[0];
    setFile(file);
    setImage(URL.createObjectURL(file));
  };

  const onDropRestaurant = (acceptedFiles: any) => {
    const file = acceptedFiles[0];
    setFileRestaurant(file);
    setImageRestaurant(URL.createObjectURL(file));
  };

  const registerUser = async (data: any) => {
    try {
      const response = await api.post("/register/user", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        Alerts.successDark("Cadastrado efetuado sucesso");
        redirectLogin();
      }
    } catch (error: any) {
      console.log(error);
      Alerts.errorDark(error.response.data.message);
    }
  };

  const handleRegisterUser = () => {
    if (!image) {
      Alerts.warningLight("Selecione uma imagem de perfil");
      return false;
    }

    if (!usuarioUser || !nomeUser || !emailUser || !senhaUser) {
      Alerts.warningLight("Preencha todos os campos");
      return false;
    }

    const data = {
      username: usuarioUser,
      fullName: nomeUser,
      email: emailUser,
      password: senhaUser,
    };

    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    } else {
      Alerts.warningLight("Nenhum arquivo foi selecionado!");
      return;
    }
    formData.append("data", JSON.stringify(data));

    registerUser(formData);
  };

  const registerRestaurant = async (data: any) => {
    try {
      const response = await api.post("/register/restaurant", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        Alerts.successDark("Cadastrado efetuado sucesso");
        redirectLogin();
      }
    } catch (error: any) {
      console.log(error);
      Alerts.errorDark(error.response.data.message);
    }
  };

  const getDataCEP = async (cep: string) => {
    try {
      const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.status === 200) {
        const { logradouro, bairro, localidade, uf } = response.data;
        return { logradouro, bairro, localidade, uf };
      }
    } catch (error: any) {
      console.log(error);
      Alerts.errorDark(error.response.data.message);
    }
  };

  const handleRegisterRestaurant = async () => {
    if (!imageRestaurant) {
      Alerts.warningLight("Selecione uma imagem de perfil");
      return false;
    }

    if (
      !usuarioRestaurant ||
      !nomeRestaurant ||
      !emailRestaurant ||
      !senhaRestaurant ||
      !cepRestaurant ||
      !numeroRestaurant
    ) {
      Alerts.warningLight("Preencha todos os campos");
      return false;
    }

    if (cepRestaurant.length !== 8) {
      Alerts.warningLight("CEP inválido");
      return false;
    }

    const dataCEP = await getDataCEP(cepRestaurant);

    if (!dataCEP) {
      Alerts.warningLight("CEP inválido");
      return false;
    }

    const data = {
      username: usuarioRestaurant,
      fullName: nomeRestaurant,
      email: emailRestaurant,
      password: senhaRestaurant,
      cep: cepRestaurant,
      street: dataCEP.logradouro,
      number: numeroRestaurant,
      neighborhood: dataCEP.bairro,
      city: dataCEP.localidade,
      state: dataCEP.uf,
      country: "Brasil",
      zipCode: cepRestaurant,
      latitude: -20.424023,
      longitude: -49.974574,
    };

    const formData = new FormData();
    if (fileRestaurant) {
      formData.append("file", fileRestaurant);
    } else {
      Alerts.warningLight("Nenhum arquivo foi selecionado!");
      return;
    }
    formData.append("data", JSON.stringify(data));
    registerRestaurant(formData);
  };

  return (
    <>
      <Head>
        <title>Buchim | Cadastrar</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <RegisterUserContainer>
        <div className="left">
          <img className="small-logo" src="/logo/logo-orange-small-menu.svg" />
          <main>
            <h2>
              Bem vindo à comunidade <br />
              Buchim!
            </h2>
            <p>Você acabou de encontrar o ponto de encontro definitivo para os amantes de gastronomia e restaurante.</p>
            <div className="cards">
              <div className="card">
                <Shrimp size={32} />
                <span>Descubra Novos Sabores</span>
              </div>
              <div className="card">
                <UsersFour size={32} />
                <span>Amizade à mesa</span>
              </div>
              <div className="card">
                <Anchor size={32} />
                <span>Deixa sua marca</span>
              </div>
              <div className="card">
                <BowlFood size={32} />
                <span>Coma com confiança</span>
              </div>
            </div>
          </main>
        </div>
        <div className="right">
          <h1>Crie sua conta</h1>
          <p>Registrar-se é rápido e simples, como pedir seu prato favorito!</p>
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
                <div className="input-with-photo">
                  <div className="img-profile">
                    <img src={image ? image : "/silueta.jpg"} />
                  </div>

                  <Dropzone onDrop={onDrop}>
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()} style={{ width: "100%" }}>
                        <input {...getInputProps()} />
                        <p className="drop-image">Carregar foto de perfil</p>
                      </div>
                    )}
                  </Dropzone>
                </div>
                <fieldset>
                  <input
                    type="text"
                    placeholder="Usuário"
                    maxLength={15}
                    value={usuarioUser}
                    onChange={(e) => setUsuarioUser(e.target.value)}
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="text"
                    placeholder="Nome completo"
                    value={nomeUser}
                    onChange={(e) => setNomeUser(e.target.value)}
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={emailUser}
                    onChange={(e) => setEmailUser(e.target.value)}
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="text"
                    placeholder="Senha"
                    value={senhaUser}
                    onChange={(e) => setSenhaUser(e.target.value)}
                  />
                </fieldset>

                <button className="register" onClick={handleRegisterUser}>
                  Cadastrar
                </button>
              </article>
            </Tabs.Content>
            <Tabs.Content value="restaurant">
              <article>
                <div className="input-with-photo">
                  <div className="img-profile">
                    <img src={imageRestaurant ? imageRestaurant : "/silueta.jpg"} />
                  </div>
                  <Dropzone onDrop={onDropRestaurant}>
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()} style={{ width: "100%" }}>
                        <input {...getInputProps()} />
                        <p className="drop-image">Carregar foto de perfil</p>
                      </div>
                    )}
                  </Dropzone>
                </div>
                <fieldset>
                  <input
                    type="text"
                    placeholder="Usuário"
                    maxLength={15}
                    value={usuarioRestaurant}
                    onChange={(e) => setUsuarioRestaurant(e.target.value)}
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="text"
                    placeholder="Nome completo"
                    value={nomeRestaurant}
                    onChange={(e) => setNomeRestaurant(e.target.value)}
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={emailRestaurant}
                    onChange={(e) => setEmailRestaurant(e.target.value)}
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="text"
                    placeholder="Senha"
                    value={senhaRestaurant}
                    onChange={(e) => setSenhaRestaurant(e.target.value)}
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="text"
                    placeholder="CEP"
                    value={cepRestaurant}
                    onChange={(e) => setCepRestaurant(e.target.value)}
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="text"
                    placeholder="Número"
                    value={numeroRestaurant}
                    onChange={(e) => setNumeroRestaurant(e.target.value)}
                  />
                </fieldset>
                <button className="register" onClick={handleRegisterRestaurant}>
                  Cadastrar
                </button>
              </article>
            </Tabs.Content>
          </Tabs.Root>
          <p>
            Já possuí conta?{" "}
            <button className="to-login" onClick={redirectLogin}>
              Voltar ao login.
            </button>
          </p>
        </div>
      </RegisterUserContainer>
    </>
  );
}
