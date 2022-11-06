import Link from "next/link"
import {auth} from "../utils/firebase" 

import { useAuthState } from "react-firebase-hooks/auth";

//import { useAuthState } from "react-firebase-hooks/auth";


export default function Nav() {

    const [user , loading] = useAuthState(auth)
    return(
        <div className="flex justify-between items-center py-10">
            <Link href={"/"}>
                <h1>Dumpster</h1>
            </Link>
            <ul className="flex gap-10">
                {!user && (
                    <Link className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8" href={"/auth/login"}>
                    Sign in 
                    </Link>
                )}

                {user && (
                   <div className="flex items-center gap-6">
                    <Link href={"/posts"}>
                        <button  className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-lg textx-sm">
                            Post
                        </button>
                    </Link>
                    <h1>Git Testing </h1>
                    <Link href="/dashboard">
                    <img
                        className="w-12 rounded-full cursor-pointer"
                        src={user.photoURL}
                    />
                    </Link>
                   </div>

                )}    
            </ul>
        </div>
    )
}