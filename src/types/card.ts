export interface Card {
  name: string;
  card_images: { image_url: string }[];
  card_prices: { tcgplayer_price: string }[];
  atk: number;
  def: number;
  desc: string;
  frameType: string;
}
