import GuestNav from "./GuestNav";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SearchIcon from '@mui/icons-material/Search';
import UserNav from "./UserNav";
import { useRecoilValue } from 'recoil';
import { usernameState } from "../../atoms/usernameAtom";
import { useState } from 'react'

const NavBar = () => {
    const username = useRecoilValue(usernameState);
    // const [focused, setFocused] = useState<boolean> (false);
    return (
        <div className="flex nav-wrapper h-[60px] px-2 lg:px-36 bg-white sticky z-50 top-0 border-b-[.2px] border-b-[#e5e5e5]">
            <div className="flex items-center space-x-1 h-[70%] w-full my-auto md:space-x-reverse md:space-x-4">
                <div className="md:hidden my-auto cursor-pointer" >
                    <DensityMediumIcon />
                </div>
                <a href={'/'} >
                    <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" width={50} className="cursor-pointer" />
                </a>
                <div className="searchWrapper hidden w-[400px] md:flex items-center text-center h-[40px] border-[1.5px] border-black/50 rounded-md">
                    <input
                        type="text"

                        placeholder="Search..."
                        className={`w-[90%] h-[100%] outline-none ml-3`}
                    />
                    <SearchIcon fontSize='large' />
                </div>
            </div>
            <div className="flex items-center">
                {username ? <UserNav /> : <GuestNav />}
            </div>
        </div>
    )
}

export default NavBar