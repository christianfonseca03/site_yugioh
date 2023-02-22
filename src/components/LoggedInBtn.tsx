import close from "../assets/close.png";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

interface LoggedInBtnProps {
  logName?: string | null | undefined
}

export function LoggedInBtn({logName} : LoggedInBtnProps) {
  const { data: session } = useSession();

  const firstName = session?.user?.name

  firstName?.split('')

    logName = firstName[0] 

    firstName[0]?z logName = firstName[0] : logName = "unknown"


  return (
    <button
      onClick={() => signOut()}
      className=" first:mr-4 text-sm font-medium w-28 h-12 flex items-center justify-center bg-neutral-200 hover:bg-neutral-300 transition-all rounded-full drop-shadow-md"
    >
      Hello! {logName}
      <img src={close.src} alt="Logout btn" className="w-6 h-6 ml-2" />
    </button>
  );
}
