import { useState, useEffect, createContext } from 'react';
import { useQuery } from 'react-query';
const SchoolContext = createContext();
const SchoolProvider = ({ children }) => {
    const [school, setSchool] = useState(null);

    const { isLoading, error, data } = useQuery('school', () => {
        return fetch('http://localhost:4000/api/schools').then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return null;
            }
        })
    });

    useEffect(() => {
        setSchool(data);
    }, [data])

    return (
        <SchoolContext.Provider value={{ school, isLoading, error, setSchool }}>
            {children}
        </SchoolContext.Provider>
    )
}

export { SchoolContext, SchoolProvider };