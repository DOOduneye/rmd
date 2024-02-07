import Loading from '@/components/Pending/Loading';
import Error from '@/components/Pending/Error';
import DormCard from '@/components/Dorm/DormCard';
import { useQuery } from 'react-query';
import { PersonIcon } from '@radix-ui/react-icons'

const SchoolInfoCard = ({ school }) => {

    const { isLoading, error, data } = useQuery('schools', async () => {
        const res = await fetch(`http://localhost:4000/api/schools/id/${school._id}`);
        return res.json();
    });

    if (isLoading) return (
        <Loading />
    )

    if (error) return (
        <Error />
    )

    return ( 

        <div className="flex flex-col w-full max-w-3xl p-5 bg-white border rounded-lg shadow-md border-errie-dark/20">
            <div className="flex flex-col justify-between gap-10 md:flex-row">
                <div className="flex flex-col">
                    <h1 className="pb-2 text-2xl font-medium text-left text-eerie-dark">
                        {school.name}
                    </h1>
            
                    <p className="flex flex-col text-left text-charcoal text-md">
                        <span>{`${school.location.street}, ${school.location.city}, ${school.location.state} ${school.location.zip}`}</span>
                    </p>
                </div>
                
                <div className="flex-col bg-gray-100 text-gray-800 text-sm font-sm inline-flex px-2.5 py-2 rounded mr-2">
                    <div className="py-2 md:w-auto md:flex-row-reverse">
                        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                            {new Intl.NumberFormat().format(school.stats?.size)}
                            <PersonIcon className="inline w-3 h-3 mb-1 ml-1" />
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(school.stats?.cost)}
                        </span>
                        <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                            {school.stats?.ownership}
                        </span>
                    </div>
                    <div>
                        {school.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolInfoCard;// flex flex-col-reverse pb-5 w-fit