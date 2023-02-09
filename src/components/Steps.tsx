interface StepsProps {
  img: string;
  altText: string;
  text: string;
}

export function Steps({ img, altText, text }: StepsProps) {
  return (
    <li className="relative items-center w-56 h-72 rounded-lg flex flex-col justify-end shadow-lg">
      <div className="rounded-t-lg bg-gradient-to-b from-neutral-400 to-neutral-100 w-full h-24"></div>
      <div className="bg-white rounded-full h-12 w-12 absolute left-1/2 -translate-x-1/2 m-auto top-1/4 flex items-center justify-center">
        <img
          src={img}
          alt={altText}
          className="p-2"
        />
      </div>

      <p className="text-black bg-neutral-100 h-2/3 text-center pt-8 px-4">{text}</p>
    </li>
  );
}
