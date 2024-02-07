import { createContext } from 'react';
import { useQuery } from 'react-query';
import Loading from "@/components/Pending/Loading";
import Error from "@/components/Pending/Error";

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
    const { isLoading, error, data: comment } = useQuery('comment', () => {
        return fetch('http://localhost:4000/api/comments').then((res) => res.json());
    });

    if (isLoading) return <Loading />
    if (error) return <Error />

    return (
        <CommentContext.Provider value={{ comment }}>
            {children}
        </CommentContext.Provider>
    )
}

export { CommentContext, CommentProvider };