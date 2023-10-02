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
import { Bell, Compass, Gear, House, MagnifyingGlass, UserList } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

export function HomeLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

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
                  <Link href="/seach" className={router.pathname == "/seach" ? "activeLink" : ""}>
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
                  <Link href="/seach" className={router.pathname == "/seach" ? "activeLink" : ""}>
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
            <button>
              <Gear size={24} />
            </button>
          </NavFooter>
        </MenuLateral>
        {/* Mobile */}
        <HeaderMenuMobile>
          <img src="/logo/logo-orange-menu.svg" alt="" />
        </HeaderMenuMobile>
        <FooterMenuMobile>
          <ul>
            <li>
              <Link href="/home" className={router.pathname == "/home" ? "activeLink" : ""}>
                <House size={24} weight="fill" />
              </Link>
            </li>
            <li>
              <Link href="/seach" className={router.pathname == "/seach" ? "activeLink" : ""}>
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
        </FooterMenuMobile>
        <MainContent>{children}</MainContent>
      </HomeLayoutContainer>
    </>
  );
}
