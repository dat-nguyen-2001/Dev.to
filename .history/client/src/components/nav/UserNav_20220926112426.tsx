import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { usernameState } from '../../atoms/usernameAtom';
import { useRecoilValue } from 'recoil'

const UserNav = () => {
    const username = useRecoilValue(usernameState)
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
            <div className='relative'>
                <div className='w-10 h-10 rounded-lg cursor-pointer hover:text-[blue]/70 hover:bg-[#e2e3f3]'>
                    <PersonIcon fontSize='large' className='my-auto pt-1 pl-1' />
                </div>
                <div className='flex flex-col space-y-5 absolute top-10 right-0 w-[250px] z-10 bg-white rounded border-[.1em] pl-5 pt-1'>
                    <div>
                        <p>
                            @{username}
                        </p>
                        <hr></hr>
                    </div>
                    <div>
                        <a>Dash Board</a>
                        <a>Create Post</a>
                        <a>Reading List</a>
                        <a>Settings</a>
                    </div>
                    <div>
                        <p>
                            Sign Out
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserNav