import Dropdown from "@/components/Navigation/Dropdown";

import { useState } from 'react';

const ProfileNavBar = ({ user }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const closeDropdown = () => setDropdownOpen(false);
    
    return (
        <div className="flex flex-row gap-10" onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
            <button className="relative flex items-center justify-center w-fit h-10 text-gray-500 rounded-full hover:text-gray-700 ">
                {user?.username}
            </button>
            
            {dropdownOpen && (
                <Dropdown user={user} onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown} />
            )}
        </div>
    )
}

export default ProfileNavBar;