import React from "react";

const SideImage = () => {
    return (
        <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img className="object-cover w-full h-56 lg:absolute lg:h-full" src="https://placeimg.com/1000/1000/arch" alt="" />
            </div>
        </div>
    )
}

export default SideImage;