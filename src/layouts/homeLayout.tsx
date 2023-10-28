import {
  ButtonLogoFull,
  ButtonLogoSmall,
  FooterMenuMobile,
  HeaderMenuMobile,
  HomeLayoutContainer,
  MainContent,
  MenuLateral,
  NavClosed,
  NavFooter,
  NavOpen,
} from "@/styles/layouts/homeLayout";
import { Bell, Compass, House, MagnifyingGlass, UserList } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

interface UserData {
  email: string;
  fullName: string;
  profileImageURL: string;
  type: string;
  userID: string;
  username: string;
}
export function HomeLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  const [userData, setUserData] = useState<UserData>();

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const getCookieData = async () => {
    const getCookie = Cookies.get("user_data");
    if (!getCookie) {
      return false;
    }

    setUserData(JSON.parse(getCookie));
  };

  useEffect(() => {
    getCookieData();
  }, []);

  if (!userData) {
    return <></>;
  }

  return (
    <>
      <HomeLayoutContainer>
        <MenuLateral $isOpen={isOpenMenu}>
          <header>
            {isOpenMenu ? (
              <ButtonLogoFull onClick={handleMenu}>
                <img src="/logo/logo-orange-menu.svg" alt="" />
              </ButtonLogoFull>
            ) : (
              <ButtonLogoSmall onClick={handleMenu}>
                <img src="/logo/logo-orange-small-menu.svg" alt="" />
              </ButtonLogoSmall>
            )}
          </header>
          {isOpenMenu ? (
            <NavOpen>
              <ul>
                <li>
                  <Link href="/home" className={router.pathname == "/home" ? "activeLink" : ""}>
                    <House size={24} weight="fill" />
                    <span>Página Inicial</span>
                  </Link>
                </li>
                <li>
                  <Link href="/search" className={router.pathname == "/search" ? "activeLink" : ""}>
                    <MagnifyingGlass size={24} weight="fill" />
                    <span>Pesquisa</span>
                  </Link>
                </li>
                <li>
                  <Link href="/find" className={router.pathname == "/find" ? "activeLink" : ""}>
                    <Compass size={24} weight="fill" />
                    <span>Descobrir</span>
                  </Link>
                </li>
                <li>
                  <Link href="/notifications" className={router.pathname == "/notifications" ? "activeLink" : ""}>
                    <Bell size={24} weight="fill" />
                    <span>Notificações</span>
                  </Link>
                </li>
                <li>
                  <Link href="/perfil" className={router.pathname == "/perfil" ? "activeLink" : ""}>
                    <UserList size={24} weight="fill" />
                    <span>Perfil</span>
                  </Link>
                </li>
              </ul>
            </NavOpen>
          ) : (
            <NavClosed>
              <ul>
                <li>
                  <Link href="/home" className={router.pathname == "/home" ? "activeLink" : ""}>
                    <House size={24} weight="fill" />
                  </Link>
                </li>
                <li>
                  <Link href="/search" className={router.pathname == "/search" ? "activeLink" : ""}>
                    <MagnifyingGlass size={24} weight="fill" />
                  </Link>
                </li>
                <li>
                  <Link href="/find" className={router.pathname == "/find" ? "activeLink" : ""}>
                    <Compass size={24} weight="fill" />
                  </Link>
                </li>
                <li>
                  <Link href="/notifications" className={router.pathname == "/notifications" ? "activeLink" : ""}>
                    <Bell size={24} weight="fill" />
                  </Link>
                </li>
                <li>
                  <Link href="/perfil" className={router.pathname == "/perfil" ? "activeLink" : ""}>
                    <UserList size={24} weight="fill" />
                  </Link>
                </li>
              </ul>
            </NavClosed>
          )}
          <NavFooter>
            <Link href="/" className={router.pathname == "/" ? "activeLink" : ""}>
              <img src={userData.profileImageURL} title="Sair" />
            </Link>
          </NavFooter>
        </MenuLateral>
        {/* Mobile */}
        <HeaderMenuMobile>
          <img src="/logo/logo-orange-menu.svg" alt="" />
          <img src={userData.profileImageURL} className="profile" />
        </HeaderMenuMobile>
        <FooterMenuMobile>
          <ul>
            <li>
              <Link href="/home" className={router.pathname == "/home" ? "activeLink" : ""}>
                <House size={24} weight="fill" />
              </Link>
            </li>
            <li>
              <Link href="/search" className={router.pathname == "/search" ? "activeLink" : ""}>
                <MagnifyingGlass size={24} weight="fill" />
              </Link>
            </li>
            <li>
              <Link href="/find" className={router.pathname == "/find" ? "activeLink" : ""}>
                <Compass size={24} weight="fill" />
              </Link>
            </li>
            <li>
              <Link href="/notifications" className={router.pathname == "/notifications" ? "activeLink" : ""}>
                <Bell size={24} weight="fill" />
              </Link>
            </li>
            <li>
              <Link href="/" className={router.pathname == "/" ? "activeLink" : ""}>
                <UserList size={24} weight="fill" />
              </Link>
            </li>
          </ul>
        </FooterMenuMobile>
        <MainContent>{children}</MainContent>
      </HomeLayoutContainer>
    </>
  );
}
