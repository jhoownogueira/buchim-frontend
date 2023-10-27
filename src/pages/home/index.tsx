import { HomeLayout } from "@/layouts/homeLayout";
import { HomeContainer, Posts, PostsContainer, SugestionsContainer } from "@/styles/pages/home/homeStyle";
import { ChatCircle, DotsThree, ForkKnife, PaperPlaneTilt, Star } from "@phosphor-icons/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Alerts } from "@/utils/AlertsContainers";
import { useRouter } from "next/navigation";
import { apiI } from "@/services/api";

interface IPost {
  postID: string;
  content: string;
  imageURL: string;
  likedMe: true;
  restaurant: {
    id: string;
    username: string;
    photoURL: string;
  };
  comments: {
    id: string;
    image: string;
    createdAt: string;
    user: {
      id: string;
      username: string;
      photoURL: string;
    };
  }[];
}

export default function Home() {
  const router = useRouter();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [refresh, setRefresh] = useState(false);
  const redirectLogin = function () {
    router.push("/");
  };

  const getPosts = async () => {
    const getCookie = Cookies.get("user_data");
    if (!getCookie) {
      Alerts.warningLight("Por favor faça login novamente");
      redirectLogin();
      return false;
    }
    const idUser = JSON.parse(getCookie).userID;
    try {
      const response = await apiI.get(`/post/list/${idUser}`);
      if (response.status === 200) {
        setPosts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const likePosts = async (idPost: string) => {
    const getCookie = Cookies.get("user_data");
    if (!getCookie) {
      Alerts.warningLight("Por favor faça login novamente");
      redirectLogin();
      return false;
    }
    const idUser = JSON.parse(getCookie).userID;
    try {
      const response = await apiI.post(`/post/like/`, {
        userID: idUser,
        postID: idPost,
      });
      if (response.status === 201) {
        setRefresh(!refresh);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, [refresh]);

  return (
    <>
      <Head>
        <title>Buchim | Início</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <HomeContainer>
        <PostsContainer>
          {posts.map((post) => {
            return (
              <Posts key={post.postID}>
                <header>
                  <div className="left">
                    <img src={post.restaurant.photoURL} />
                    <strong>{post.restaurant.username}</strong>
                  </div>
                  <div className="right">
                    <button>
                      <DotsThree size={24} />
                    </button>
                  </div>
                </header>
                <img className="post-img" src={post.imageURL} />
                <div className="buttons">
                  <div className="left">
                    <button onClick={() => likePosts(post.postID)}>
                      {post.likedMe ? <ForkKnife size={24} weight="fill" /> : <ForkKnife size={24} />}
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
                  <p>{post.content}</p>
                </footer>
              </Posts>
            );
          })}
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
