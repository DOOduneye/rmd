import { useQuery } from 'react-query';
import DormCard from "@/components/Dorm/DormCard";
import Loading from "@/components/Pending/Loading";

const ProfileFeatured = ({ dorms, currentUser }) => {
    const allDorms = dorms
    const getDormsFromSchool = async (school) => {
        const res = await fetch(`http://localhost:4000/api/dorms/school/${school}`);
        return res.json();
    }
    const { isLoading, error, data } = useQuery('dorms', () => getDormsFromSchool(currentUser.university));

    if (isLoading) return (
        <Loading />
    )

    if (error) return (
        <Error />
    )

    return (
        <div className="flex flex-row flex-wrap items-center justify-center h-full gap-10 p-10">
            {data.slice(0,6).map((dorm) => (
                <DormCard dorm={dorm} key={dorm._id} />
            ))}
        </div>
    );
}

export default ProfileFeatured;