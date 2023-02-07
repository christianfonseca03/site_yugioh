import Head from "next/head";
import { useState } from "react";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Card as CardType } from "../types/card";
import { Steps } from "../components/Steps";
import Login from "../assets/user-30.png";
import Search from "../assets/icons8-search.png";
import Deck from "../assets/cards-66.png";
import DollarSign from "../assets/icons8-dollar.png";

export default function Home() {
  const [card, setCard] = useState<CardType | null>(null);

  function handleCardChange(card: CardType) {
    setCard(card);
  }

  return (
    <>
      <Head>
        <title>House of Duels</title>
      </Head>
      <Header setCard={handleCardChange} />
      <div className="flex flex-col justify-center items-center">
        {card ? (
          <Card card={card} />
        ) : (
          <section>
            <p className="py-16 px-96 text-center text-xl font-medium">
              Welcome to House of Duels, a place where you can build your yugioh
              decks and stay updated about their prices on the market!
            </p>
            <ul className="flex justify-evenly w-screen">
              <Steps
                img={Login.src}
                altText="Login"
                text="Login into your account with Google"
              />

              <Steps
                img={Deck.src}
                text="Create the decks you want to storage!"
                altText="Decks"
              />

              <Steps
                img={Search.src}
                text="Search for cards and start building your decks!"
                altText="Search icon"
              />

              <Steps
                img={DollarSign.src}
                text="Keep track of your deck prices and individual cards too!"
                altText="Dollar icon"
              />
            </ul>
          </section>
        )}
      </div>
    </>
  );
}
