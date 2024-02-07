import DormCard from "../Dorm/DormCard";

const AnonymousFeatured = ({ dorms }) => {

    const featuredDorms = dorms.sort(() => Math.random() - 0.5).slice(0, 6);

    return (
        <div className="flex flex-row flex-wrap items-center justify-center h-full gap-10 p-10">
            {featuredDorms.slice(0, 6).map((dorm) => (
                <DormCard dorm={dorm} key={dorm._id} />
            ))}
        </div>
    );
}

export default AnonymousFeatured;