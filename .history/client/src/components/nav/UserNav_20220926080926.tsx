import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const UserNav = () => {
    return (
        <div className='flex space-x-2 mr-3'>
            <div className='w-10 h-10 bg-[#e5e5e5] rounded-lg cursor-pointer md:hidden'>
                <SearchIcon fontSize='large' className='my-auto pt-2 pl-2' />
                
            </div>
            <a href={"/new"} className="hidden md:inline">
                <button className='min-w-[150px] h-[40px] border-solid border-[#3e51e0] border-2 px-2 rounded-md text-[#3e51e0] font-semibold hover:bg-[#3e51e0] hover:text-white hover:underline'>
                    Create Post
                </button>
            </a>
        </div>
    )
}

export default UserNav