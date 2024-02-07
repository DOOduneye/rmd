import { useContext } from 'react';

import ProfileFeatured from '@/components/Featured/ProfileFeatured';
import AnonymousFeatured from '@/components/Featured/AnonymousFeatured';

import { CurrentUserContext } from "@/providers/CurrentUserProvider";
import { DormContext } from "@/providers/DormProvider";

const Featured = () => {

    const { currentUser } = useContext(CurrentUserContext);
    const { dorm } = useContext(DormContext);

    console.log(dorm)

    return (
        <div className="flex flex-row flex-wrap items-center justify-center h-full gap-10 p-10">
            {currentUser ? <ProfileFeatured dorms={dorm} currentUser={currentUser} /> : <AnonymousFeatured dorms={dorm} />}
        </div>
    );
};

export default Featured;