import { api } from "../services/api";

export async function handleSearchCard(cardName: string) {
  const { data } = await api.get(`?name=${cardName}`);
  return data.data[0];
}
