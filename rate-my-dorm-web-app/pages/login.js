import { useState, useContext} from "react";
import { useRouter } from "next/router";

import Button from "@/components/Base/Button";

import { CurrentUserContext } from "@/providers/CurrentUserProvider";
import SideImage from "@/components/Account/SideImage";

const Login = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

    const login = () => {
        return fetch('http://localhost:4000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: email, password: password}),
            credentials: 'include'
        }).then((res) => {
            res.status === 200 ? router.reload() :
            res.status === 403 ? "Incorrect email or password" : null
        }).then((data) => setCurrentUser(data))
    }

    if (currentUser) router.push('/').then(r => r);

    return (
        <div className="relative h-screen bg-white">
            <SideImage />
            <div className="relative px-4 py-16 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
                <div className="lg:pr-8">
                    <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 underline underline-offset-8">Sign in to your account</h2>
                        <div className="grid grid-cols-1 mt-9 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="password" 
                                        name="password"
                                        id="password" 
                                        placeholder="Password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="text-right sm:col-span-2">
                                <button
                                    type="submit"
                                    onClick={login}
                                    className="px-4 py-2 font-semibold transition duration-200 ease-in-out rounded-md shadow-md to-charcoal from-cadet bg-gradient-to-r hover:shadow-lg"
                                >
                                Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;