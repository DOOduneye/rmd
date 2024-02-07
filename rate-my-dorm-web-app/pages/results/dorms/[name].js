import DormCard from "@/components/Dorm/DormCard";
import { useRouter } from "next/router";
import { useQuery } from 'react-query';

import Error from '@/components/Pending/Error';
import Loading from '@/components/Pending/Loading';
import SearchBar from "@/components/SearchBar";
import SchoolInfoCard from "@/components/School/SchoolInfoCard";

const DormResults = () => {

  const router = useRouter()

  const { isLoading, error, data } = useQuery("results", async () => {
    const res = await fetch(`http:///localhost:4000/api/results/dorms/${router.query.name}`);
    return res.json();
  })

  if (isLoading) return (
    <Loading />
  )

  if (error) return (
    <Error />
  )

  return (
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center h-full gap-10">
        <SearchBar />
        {data.map((dorm) => (
            <DormCard dorm={dorm} key={dorm._id} />
        ))}
      </main>
  )
}

//const getStaticProps = async ({ params: { name } } ) => {
//    const res = await fetch(`http://localhost:4000/api/results/dorms/${name}`);
//    const dorms = await res.json();
//
//    return {
//        props: {
//            dorms,
//        },
//    };
//};

//export { getStaticProps };
export default DormResults;