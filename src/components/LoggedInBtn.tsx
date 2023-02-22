import close from "../assets/close.png";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export function LoggedInBtn() {
  const { data: session } = useSession();

  const userName = session?.user?.name?.split(" ")[0] ?? "User";

  return (
    <button
      onClick={() => signOut()}
      className=" first:mr-4 text-sm font-medium w-28 h-12 flex items-center justify-center bg-neutral-200 hover:bg-neutral-300 transition-all rounded-full drop-shadow-md"
    >
      Hello! {userName}
      <img src={close.src} alt="Logout btn" className="w-6 h-6 ml-2" />
    </button>
  );
}
