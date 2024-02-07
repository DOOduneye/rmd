import React, { useState, useContext } from 'react';
import { useMutation } from 'react-query';

import { useRouter } from 'next/router';
import Link from "next/link";

import Input from "@/components/Base/Input";
import Button from "@/components/Base/Button";
import SideImage from "@/components/Account/SideImage";

import { SchoolContext } from '@/providers/SchoolProvider';
import { CurrentUserContext } from '@/providers/CurrentUserProvider';

import majors from "@/utils/majors";

import bcrypt from 'bcryptjs';

const SignUpForm = () => {

    const router = useRouter();
    const { school, setSchool } = useContext(SchoolContext);
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext)
    const schools = school

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [university, setUniversity] = useState('')
    const [major, setMajor] = useState('')

    const signup = async (data) => {
        return fetch('http://localhost:4000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                    bio: '',
                    comments: [],
                    bookmarks: [],
                    friends: [],
                    loggedIn: true,
                    university: university,
                    major: major,
                    admin: false,
                    verified: !!university,
                })
            })
            .then((res) => {
                if (res.status === 200) {
                    router.reload()
                    return res.json();
                } else if (res.status === 403) {
                    return "Invalid Inputs"
                }
            })
            .then((data) => {
                setCurrentUser(data)
            })
    };

    if (currentUser) router.push('/').then(r => r)

    return (
        <div className="relative bg-white">
           <SideImage />
            <div className="relative px-4 py-16 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
                <div className="lg:pr-8">
                    <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 underline underline-offset-8">Create an account</h2>
                        <div className="grid grid-cols-1 mt-9 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                                    Username
                                </label>
                                <div className="mt-1">
                                <input
                                    id="text"
                                    name="text"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                        Email
                        </label>
                        <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                        Password
                        </label>
                        <div className="mt-1">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Major
                        </label>
                        <div className="mt-1">
                        <select
                            type="text"
                            name="major"
                            id="major"
                            onChange={(e) => setMajor(e.target.value)}
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                            <option value={"Select a major"}>Select a major</option>
                            {majors.map((major) => (
                                <option key={major.FOD1P} value={major.Major}>
                                    {major.Major}
                                </option>
                            ))}
                            

                        </select>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                            University
                        </label>
                        <div className="mt-1">
                        <select
                            type="text"
                            name="university"
                            id="university"
                            onChange={(e) => setUniversity(e.target.value)}
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" >
                            <option value={"Select a major"}>Select a University</option>
                            {schools?.map((school) => (
                                <option key={school._id} value={school.name}>
                                    {school.name}
                                </option>
                            ))}
                            

                        </select>
                        </div>
                    </div>
                    <div className="text-right sm:col-span-2">
                        <button
                        type="submit"
                        onClick={signup}
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                        Submit
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;