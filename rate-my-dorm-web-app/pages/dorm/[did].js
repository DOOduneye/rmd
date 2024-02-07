import { useQuery } from 'react-query';
import { PlusIcon, CheckIcon } from '@radix-ui/react-icons'
import CommentSection from '@/components/Comments/CommentSection';
import InfoCard from '@/components/Dorm/DormInfoCard';
import Error from '@/components/Pending/Error';
import ImageCard from '@/components/ImageCard';
import Loading from '@/components/Pending/Loading';
import {CurrentUserContext} from "@/providers/CurrentUserProvider";
import {useContext, useState, useEffect } from "react";
import mongoose from "mongoose";

const Dorm = ({ dorm }) => {
    dorm = dorm[0];

    const [bookmarked, setBookmarked] = useState(false);

    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    const { isLoading, error, data } = useQuery("comments", async () => {
        const res = await fetch(`http://localhost:4000/api/comments/dorm/${dorm._id}`);
        return res.json();
    })

    useEffect(() => {
        setBookmarked(currentUser?.bookmarks?.includes(dorm._id));
    }, [currentUser]);

    const addBookmark = async () => {
        console.log(dorm._id);
        await fetch(`http://localhost:4000/api/users/bookmarks/${currentUser._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "bookmark": mongoose.Types.ObjectId(dorm._id),
            }),
        });
        setBookmarked(true);
        setCurrentUser({
            ...currentUser,
            bookmarks: [...currentUser.bookmarks, dorm._id],
        });
    }

    const removeBookmark = async () => {
        console.log(dorm._id);
        await fetch(`http://localhost:4000/api/users/bookmarks/${currentUser._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "bookmark": mongoose.Types.ObjectId(dorm._id),
            }),
        });
        setBookmarked(false);
    }

    if (isLoading) return (
        <Loading />
    )

    if (error) return (
        <Error />
    )

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-5 px-10 py-2">
            <div className="flex flex-row items-center justify-center w-full h-full gap-5">
                <ImageCard image={"https://placeimg.com/400/225/arch"} />
                {currentUser ? (
                    bookmarked ? (
                        <button className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full" onClick={removeBookmark}>
                            <CheckIcon className="w-5 h-5 text-green-500" />
                        </button>
                    ) : (
                        <button className="flex items-center justify-center w-8 h-8 bg-white rounded-full border border-eerie-dark/20" onClick={addBookmark}>
                            <PlusIcon className="w-5 h-5 text-eerie-dark" />
                        </button>
                    )) : null}

            </div>
            <InfoCard dorm={dorm} />
            <CommentSection props={data} dorm={dorm} />
        </div>
    )
};

const getStaticProps = async ({ params: { did } } ) => {
    const res = await fetch(`http://localhost:4000/api/dorms/id/${did}`);
    const dorm = await res.json();

    return {
        props: {
            dorm,
        },
    };
};

const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:4000/api/dorms`);
    const dorms = await res.json();
    
    const paths = dorms.map((dorm) => ({
        params: { did: dorm._id },
    }));

    return {
        paths,
        fallback: false,
    };
};

export { getStaticPaths, getStaticProps };
export default Dorm;
