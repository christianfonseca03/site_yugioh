interface HeaderButtonProps {
  text: string;
  img: string;
  altText: string;
}

export function HeaderButton({ text, img, altText }: HeaderButtonProps) {
  return (
    <button className=" first:mr-4 text-sm font-medium w-28 h-12 flex items-center justify-center bg-neutral-200 hover:bg-neutral-300 transition-all rounded-full drop-shadow-md">
      {text}
      <img src={img} alt={altText} className="w-6 h-6 ml-2" />
    </button>
  );
}