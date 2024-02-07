import {useQuery} from "react-query";
import Bookmark from "@/components/Profile/Bookmark";
import {useContext} from "react";
import {CurrentUserContext} from "@/providers/CurrentUserProvider";
import Settings from "@/components/Profile/Settings";
import Friends from "@/components/Profile/Friends";
import ProfileInfo from "@/components/Profile/ProfileInfo";


const Profile = ({ profile }) => {

    const { currentUser } = useContext(CurrentUserContext);

    profile = profile[0];

    console.log(profile);
    console.log(profile.bookmarks)
    return (
        <div className="grid grid-cols-3 divide-x">
            <div className=" grid justify-center ">
                <div>
                    {(currentUser !== null && currentUser !== undefined && profile._id === currentUser._id) ? <Settings user={profile}/> : <ProfileInfo user={profile}/> }
                </div>
            </div>
            <div className=" grid justify-center">
                <div>
                    <h5 className="text-2xl text-center font-bold tracking-tight text-eerie-dark">Bookmarks</h5>
                    <Bookmark dorms={profile.bookmarks} />
                </div>
            </div>
            <div className="grid justify-center">
                <div>
                    <h5 className="text-2xl text-center font-bold tracking-tight text-eerie-dark">Friends</h5>
                    <Friends friendsList={profile.friends}/>
                </div>
            </div>
        </div>
    )
};

const getStaticProps = async ({ params: { pid } } ) => {
    const res = await fetch(`http://localhost:4000/api/users/id/${pid}`);
    const profile = await res.json();

    return {
        props: {
            profile,
        },
    };
};

const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:4000/api/users`);
    const users = await res.json();

    const paths = users.map((profile) => ({
        params: {
            pid: profile._id,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export { getStaticProps, getStaticPaths };
export default Profile;