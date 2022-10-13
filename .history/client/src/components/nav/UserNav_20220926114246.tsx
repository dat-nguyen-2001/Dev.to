import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { usernameState } from '../../atoms/usernameAtom';
import { useRecoiState } from 'recoil'
import { useState } from 'react'
const UserNav = () => {
    const username = useRecoilState(usernameState);
    const [openDropMenu, setOpenDropMenu] = useState(false)
    return (
        <div className='flex space-x-2 mr-3'>
            <div className='w-10 h-10 rounded-lg cursor-pointer md:hidden hover:text-[blue]/70 hover:bg-[#e2e3f3]'>
                <SearchIcon fontSize='large' className='my-auto pt-2 pl-2' />
            </div>
            <a href={"/new"} className="hidden md:inline">
                <button className='min-w-[120px] h-[40px] border-solid border-[#3e51e0] border-2 rounded-md text-[#3e51e0] font-semibold hover:bg-[#3e51e0] hover:text-white hover:underline'>
                    Create Post
                </button>
            </a>
            <div className='w-10 h-10 rounded-lg cursor-pointer hover:text-[blue]/70 hover:bg-[#e2e3f3]'>
                <NotificationsIcon fontSize='large' className='my-auto pt-2 pl-2' />
            </div>
            <div className='relative' tabIndex={0} onBlur={() => setOpenDropMenu(false)}>
                <div className='w-10 h-10 rounded-lg cursor-pointer hover:text-[blue]/70 hover:bg-[#e2e3f3]'>
                    <PersonIcon fontSize='large' className='my-auto pt-1 pl-1' onClick={() => setOpenDropMenu(true)} />
                </div>
                {openDropMenu ? <div className='flex flex-col space-y-3 absolute top-10 right-0 w-[250px] z-[100] bg-white rounded border-[.1em] pt-2 px-2' >
                    <div className='space-y-1'>
                        <p className='dropMenu'>
                            @{username}
                        </p>
                        <hr></hr>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <a className='dropMenu'>Dash Board</a>
                        <a className='dropMenu'>Create Post</a>
                        <a className='dropMenu'>Reading List</a>
                        <a className='dropMenu'>Settings</a>
                    </div>
                    <div className='pb-2 space-y-1'>
                        <hr></hr>
                        <p className='dropMenu'>
                            Sign Out
                        </p>
                    </div>
                </div> : null}
            </div>
        </div>
    )
}

export default UserNav