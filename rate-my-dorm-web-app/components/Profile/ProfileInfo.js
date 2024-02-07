const ProfileInfo = ({user}) => {
    return (
        <div>
            <h5 className="text-2xl text-center font-bold tracking-tight text-eerie-dark">{user.username}</h5>
            <br/>
            <br/>
            <h2 className="text-2xl font-bold tracking-tight text-eerie-dark">Bio</h2>
            <p>{user.bio}</p>
            <br/>
            <br/>
            <h2 className="text-2xl font-bold tracking-tight text-eerie-dark">University</h2>
            <p>{user.university}</p>
            <br/>
            <br/>
            <h2 className="text-2xl font-bold tracking-tight text-eerie-dark">Major</h2>
            <p>{user.major}</p>
            <br/>
            <br/>
        </div>
    )
}
export default ProfileInfo