import Link from "next/link"
import {auth} from "../utils/firebase" 
//import { useAuthState } from "react-firebase-hooks/auth";


export default function Nav() {
    return(
        <div className="flex justify-between items-center py-10">
            <h1>Dumpster</h1>
            <ul className="flex gap-10">
                <Link className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8" href={"/auth/login"}>
                   Sign in 
                </Link>
                <Link href="/dashboard">
              <img
                className="w-12 rounded-full cursor-pointer"
                
              />
            </Link>
            </ul>
        </div>
    )
}