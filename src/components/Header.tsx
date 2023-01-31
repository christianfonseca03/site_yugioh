import Image from "next/image";
import Logo from "../assets/newLogo.png";
import Link from "next/link";
import UserIcon from "../assets/user-64.png";
import Decks from "../assets/cards-66.png";
import SearchIcn from "../assets/icons8-search.png";
import { FormEvent } from "react";

import { handleSearchCard } from "../utils/handleSearchCard";
import { Card } from "../types/card";
import { HeaderButton } from "./HeaderButton";

interface HeaderProps {
  setCard: (card: Card) => void;
}

export function Header(props: HeaderProps) {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const cardName = (e.target as any).card.value as string;

    const card = await handleSearchCard(cardName);

    props.setCard(card);

    console.log(card);
  }

  function refreshPage() {
    window.location.reload()
  }

  return (
    <header className="flex justify-between items-center px-10 bg-gradient-to-b from-neutral-400 to-white ">
      <Link href=".">
        <>
          <Image src={Logo} alt="Logo" className="h-36 w-36" onClick={refreshPage}></Image>
        </>
      </Link>
      <form
        className="flex w-1/2 h-10 items-center relative"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="card"
          className="bg-white text-black rounded-full w-full border-black border-2 flex p-2 focus:border-red-600 focus:outline-none focus:transition-all"
          placeholder="Search card"
        />
        <button className="absolute right-5" type="submit">
          <Image
            src={SearchIcn}
            alt="Search Icon"
            className=" h-9 w-9 "
          ></Image>
        </button>
      </form>

      <nav className="flex">
        <HeaderButton img={UserIcon.src} text="Login" altText="User Icon Img"/>
        <HeaderButton img={Decks.src} text="Decks" altText="Decks Img"/>
      </nav>
    </header>
  );
}
