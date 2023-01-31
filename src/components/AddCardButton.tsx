import Plus from "../assets/icons8-plus.png";

export function AddCardButton() {
  return (
    <button className="text-sm font-medium w-32 h-16 mt-10 flex items-center justify-center bg-neutral-200 hover:bg-neutral-300 transition-all rounded-full drop-shadow-md">
      Add to deck
      <img src={Plus.src} alt="AddButton" className="w-5 h-5 ml-1"></img>
    </button>
  );
}
