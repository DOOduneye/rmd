import { useState, useEffect, createContext } from 'react';
import { useQuery } from 'react-query';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const { isLoading, error, data } = useQuery('user', () => {
        return fetch('http://localhost:4000/api/users').then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return null;
            }
        })
    });

    useEffect(() => {
        setUser(data);
    }, [data])

    return (
        <UserContext.Provider value={{ user, isLoading, error, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };