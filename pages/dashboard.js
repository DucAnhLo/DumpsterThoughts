import {auth, db} from "../utils/firebase" 
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { async } from "@firebase/util";
import { useEffect } from "react";


export default function Dashboard(){
    const [user, loading] = useAuthState(auth)
    const route = useRouter()
    const getData = async () => {
        if(loading) return
        if(!user) return route.push("/auth/login")
    }

    useEffect(() => {
        getData()
    }, [user,loading])

    return (
        <div>
            <button onClick={()=> auth.signOut()} className="font-medium bg-gray-800 text-white py-2 px-4 rounded-lg textx-sm">
                Sign out
            </button>
        </div>
    )

}