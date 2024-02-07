import { useQuery } from 'react-query';

import DormCard from '@/components/Dorm/DormCard';
import Error from '@/components/Pending/Error';
import ImageCard from '@/components/ImageCard';
import Loading from '@/components/Pending/Loading';
import SchoolInfoCard from '@/components/School/SchoolInfoCard';

// TODO: WHEN YOU ADD A DORM MAKE SURE TO ADD IT TO THE SCHOOL'S DORMS ARRAY IN THE DATABASE
const School = ({ school }) => {
    school = school[0]

    const { isLoading, error, data } = useQuery('dorms', async () => {
        const res = await fetch(`http://localhost:4000/api/dorms`);
        return res.json();
    });
        

    if (isLoading) return (
        <Loading />
    )

    if (error) return (
        <Error />
    )

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-5 px-10 py-2">
            <ImageCard image={"https://placeimg.com/400/225/arch"} />
            <SchoolInfoCard school={school} />
            <div className="flex flex-row flex-wrap items-center justify-center h-full gap-10 sm:p-10 md:p-0">
                {data.map((dorm) => (
                    <DormCard dorm={dorm} key={dorm._id} />
                ))}
            </div>
            
        </div>
    )
};
    
const getStaticProps = async ({ params: { sid } } ) => {
    const res = await fetch(`http://localhost:4000/api/schools/id/${sid}`);
    const school = await res.json();

    return {
        props: {
            school,
        },
    };
};

const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:4000/api/schools`);
    const schools = await res.json();
    
    const paths = schools.map((school) => ({
        params: { sid: school._id },
    }));

    return {
        paths,
        fallback: false,
    };
};

export { getStaticPaths, getStaticProps };
export default School;
