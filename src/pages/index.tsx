import { LoginContainer } from "@/styles/pages/indexStyle";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const redirectLogin = function () {
    router.push("/inicio");
  };

  console.log(redirectLogin);
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
            <button>Inscreva-se</button>
          </header>
          <main>
            <img src="/logo/logo-orange.svg" />
            <span>Bem vindo ao Buchim, por favor entre com seus dados para usar o aplicativo.</span>
            <fieldset>
              <input type="text" placeholder="E-mail" />
            </fieldset>
            <fieldset>
              <input type="password" placeholder="Senha" />
            </fieldset>
            <button className="forget-password">Esqueceu sua senha?</button>
            <button className="login">Entrar</button>
            <button className="google">Entrar com o Google</button>
          </main>
        </div>
      </LoginContainer>
    </>
  );
}
