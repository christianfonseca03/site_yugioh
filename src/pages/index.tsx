import Head from "next/head";
import { useState } from "react";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Card as CardType } from "../types/card";


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
          <>
            <p>
              Welcome to House of Duels, a place where you can build your yugioh
              decks and stay updated about their prices on the market!
            </p>
          </>
        )}
      </div>
    </>
  );
}
