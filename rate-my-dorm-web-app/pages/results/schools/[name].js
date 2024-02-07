import SchoolInfoCard from "@/components/School/SchoolInfoCard";
import { useRouter } from "next/router";
import { useQuery } from 'react-query';

import Error from '@/components/Pending/Error';
import Loading from '@/components/Pending/Loading';
import SearchBar from "@/components/SearchBar";

const SchoolResults = () => {

    const router = useRouter()
    console.log(router.query.name)

    const { isLoading, error, data } = useQuery("results", async () => {
        const res = await fetch(`http://localhost:4000/api/results/schools/${router.query.name}`);
        return res.json();
    });

    if (isLoading) return (
        <Loading />
      )
    
      if (error) return (
        <Error />
      )

    return (
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center h-full gap-10">
          <SearchBar />
          {data.map((school) => (
              <SchoolInfoCard school={school} key={school._id} />
          ))}
      </main>
    )
  }

export default SchoolResults;