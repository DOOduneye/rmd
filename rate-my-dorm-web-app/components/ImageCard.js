const ImageCard = ({ image }) => {

    return (
        <div className="w-full max-w-3xl border border-white border-opacity-75 rounded-lg shadow-xl">
            <figure className="flex flex-col items-center justify-center">
                <img src={image} className="w-full rounded-lg" />
            </figure>
        </div>
    )
}

export default ImageCard;