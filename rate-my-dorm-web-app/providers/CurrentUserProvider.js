import { createContext } from 'react';
import { useQuery} from 'react-query';
import Loading from "@/components/Pending/Loading";
import Error from "@/components/Pending/Error";

const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {
    let { isLoading, error, data: currentUser } = useQuery('currentUser', () => {
        return fetch('http://localhost:4000/api/auth/profile', { credentials: 'include' })
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    return null;
                }
            })
    });

    currentUser = Array.isArray(currentUser) ? currentUser[0] : currentUser

    const setCurrentUser = (user) => {
        currentUser = [user];
    }

    if (isLoading) return <Loading />
    if (error) return <Error />

    console.log(currentUser);

    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export { CurrentUserContext, CurrentUserProvider };