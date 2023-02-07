import { Card } from "../types/card";
import { AddCardButton } from "./AddCardButton";

interface CardProps {
  card: Card;
}

export function Card({ card }: CardProps) {
  const spell = ["spell"].includes(card.frameType);
  const trap = ["trap"].includes(card.frameType);

  return (
    <>
      {spell || trap ? (
        <section className="flex h-full w-full justify-start mt-8">
          <div className="flex flex-col items-center w-2/4 ">
            <h1 className="text-3xl mb-6 font-bold">{card.name}</h1>
            <img
              className="w-80 h-auto"
              src={card.card_images[0].image_url}
              alt="card-image"
            ></img>
          </div>
          <div className="w-2/4 flex flex-col mt-14">
            <h2 className="font-semibold text-2xl mb-2">Card Info:</h2>
            <h3 className="flex font-semibold mb-1">
              Card type:
              <p className="font-normal">{card.frameType}</p>
            </h3>
            <h3 className="font-semibold mb-4">
              Effect/Description:
              <p className="w-3/4 max-h-72 font-normal">{card.desc}</p>
            </h3>

            <h3 className="flex font-semibold mb-4 ">
              TCG Player Price: ${card.card_prices[0].tcgplayer_price}
            </h3>

            <AddCardButton />
          </div>
        </section>
      ) : (
        <section className="flex h-full w-full justify-start mt-8">
          <div className="flex flex-col items-center w-2/4 ">
            <h1 className="text-3xl mb-6 font-bold">{card.name}</h1>
            <img
              className="w-80 h-auto"
              src={card.card_images[0].image_url}
              alt="card-image"
            ></img>
          </div>
          <div className="w-2/4 flex flex-col mt-14">
            <h2 className="font-semibold text-2xl mb-2">Card Info:</h2>
            <h3 className="flex font-semibold mb-1">
              Monster type:
              <p className="font-normal">{card.frameType}</p>
            </h3>
            <h3 className="flex font-semibold mb-1">
              ATK:
              <p className="font-normal mb-1">{card.atk}</p>
            </h3>
            <h3 className="flex font-semibold mb-1">
              DEF:
              <p className="font-normal">{card.def} </p>
            </h3>
            <h3 className="font-semibold mb-4">
              Effect/Description:
              <p className="w-3/4 max-h-72 font-normal">{card.desc}</p>
            </h3>

            <h3 className="flex font-semibold mb-4 ">
              TCG Player Price: ${card.card_prices[0].tcgplayer_price}
            </h3>

            <AddCardButton />
          </div>
        </section>
      )}
    </>
  );
}
