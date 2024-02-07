import { CheckCircledIcon } from "@radix-ui/react-icons";

import Link from "next/link";
import { useRouter } from "next/router";

const Dropdown = ({ user }) => {
    
    const router = useRouter();
    const logout = async () => {
        console.log('signing out');
        const response = await fetch('http://localhost:4000/api/auth/logout', { 
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        router.reload();
    }
    
    return (
        <aside className="absolute w-64 transition duration-200 transform bg-white rounded-lg shadow-xl right-5 top-16">
            <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50">
                <div className="p-4 rounded-lg bg-blue-50">
                    <p className="flex flex-col justify-between gap-0 text-sm font-medium text-blue-700 items-left">
                        <span className="inline-flex flex-col gap-0">
                            <span className="text-center bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{user.university ? user.university : ''}</span>
                            <span className="inline-flex gap-0 pt-1">{user.username} {user.verified ? <CheckCircledIcon className="w-4 h-4 text-blue-900" /> :null}</span> 
                        </span>
                        <span className="truncate">{user.email}</span>
                    </p>
                </div>
                

                <ul className="space-y-2">
                    <li>
                        <Link href={`/profile/${user._id}`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                            <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            <span className="ml-3">Profile</span>
                        </Link>
                    </li>
                    <li>
                        <button className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100" onClick={logout}>
                            <svg className="flex-shrink-0 w-6 h-6 mr-3 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                            <span className="whitespace-nowrap">Log Out</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Dropdown;