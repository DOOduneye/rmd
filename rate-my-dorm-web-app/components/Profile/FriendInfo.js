import Link from "next/link";

const FriendInfo = ({friend}) => {
  return(
  <div className="grid grid-cols-3 gap-10 p-10">
    <div className="grid">
      <img className="rounded-t-lg" src="https://placeimg.com/100/100/arch" alt={friend.username} />
    </div>
    <div className="grid text-center">
      <Link href={`/profile/${friend._id}`}>
        {friend.username}
      </Link>
      <p>{friend.university}</p>
    </div>
  </div>
)
}

export default FriendInfo;