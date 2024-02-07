import { createContext } from 'react';
import { useQuery } from 'react-query';
import Loading from "@/components/Pending/Loading";
import Error from "@/components/Pending/Error";

const DormContext = createContext();

const DormProvider = ({ children }) => {
    const { isLoading, error, data: dorm } = useQuery('dorms', () => {
        return fetch('http://localhost:4000/api/dorms').then((res) => res.json());
    });

    if (isLoading) return <Loading />
    if (error) return <Error />

    return (
        <DormContext.Provider value={{ dorm }}>
            {children}
        </DormContext.Provider>
    )
}

export { DormContext, DormProvider };