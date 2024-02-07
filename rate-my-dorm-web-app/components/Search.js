import SearchBar from "@/components/SearchBar";
const Search = () => {

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-2 drop-shadow-sm">
            <h1 className="p-2 font-medium text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cadet to-charcoal">
                Rate My Dorm
            </h1>


            <SearchBar />
        </div>
    )
}

export default Search;