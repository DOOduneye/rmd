import DormCard from "@/components/Dorm/DormCard";
import {useQuery} from "react-query";
import LoadingCard from "@/components/Pending/Loading";
import Error from "@/components/Pending/Error";
import {useContext, useEffect} from "react";
import {DormContext} from "@/providers/DormProvider";

const Bookmark = ({ dorms }) => {
    //const bookmarkedDorms = dorms;

    //const { dorm } = useContext(DormContext);
    // dorm.forEach((d) => {
    //     console.log(d)
    //     console.log(bookmarkedDorms)
    // });

    //bookmarkedDorms.forEach((d) => {
    //    if (dorm.includes(d._id)) {
    //        console.log(d);
    //    }
    //})

    const {isLoading, error, data } = useQuery('dorm', async () => {
        const res = await fetch(`http://localhost:4000/api/dorms`);
        return res.json();
    })

    if (isLoading) return (
        <LoadingCard />
    )

    if (error) return (
        <Error />
    )

    const bookmarkedDorms = data.filter((dorm) => (
        dorms.includes(dorm._id)
    ))    

    return (
        bookmarkedDorms.map((dorm) =>  <DormCard dorm={dorm} key={dorm._id} />)
    )
}

export default Bookmark;