import Link from "next/link";
import {useState} from "react";

const SearchBar = () => {

    const [search, setSearchOption] = useState("dorms");
    const [targetVal, setTarget] = useState();

    const changeHandler = event => setTarget(event.target.value)

    return (
        <>
            <h1 className="p-2 pb-2 text-xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-r from-cadet to-charcoal">
                Enter a <span className={`text-cadet cursor-pointer ${search === "dorms" ? "underline"
                                                                                           + " underline-offset-4" : ""}`} onClick={() => setSearchOption("dorms")}>Dorm</span> or <span className={`text-cadet cursor-pointer ${search === "schools" ? "underline underline-offset-4" : ""}`} onClick={() => setSearchOption("schools")} >School</span> name to search.
            </h1>

            <div className="flex flex-row justify-center w-full gap-3">
                <input type='text' placeholder={`Find ${search}...`} onChange={changeHandler} className="px-4 py-2 font-normal transition duration-200 ease-in-out rounded bg-cultured" />
                <Link href={`/results/${search}/${targetVal}`}>
                    <button className="flex flex-row items-center justify-center px-4 py-2 font-medium transition duration-200 ease-in-out rounded bg-cadet hover:bg-charcoal">
                        <span className="text-white">Search</span>
                    </button>
                </Link>
            </div>
        </>
    )
}

export default SearchBar;