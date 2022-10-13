import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

const UserNav = () => {
    return (
        <div className='flex space-x-2 mr-3'>
            <div className='w-10 h-10 rounded-lg cursor-pointer md:hidden hover:text-[blue]/70 hover:bg-[#e2e3f3]'>
                <SearchIcon fontSize='large' className='my-auto pt-2 pl-2' />
            </div>
            <div className='w-10 h-10 rounded-lg cursor-pointer hover:text-[blue]/70 hover:bg-[#e2e3f3]'>
                <NotificationsIcon fontSize='large' className='my-auto pt-2 pl-2' />
            </div>
            <div className='w-10 h-10 rounded-lg cursor-pointer hover:text-[blue]/70 hover:bg-[#e2e3f3]'>
                <PersonIcon fontSize='large' className='my-auto pt-2 pl-2' />
            </div>
        </div>
    )
}

export default UserNav