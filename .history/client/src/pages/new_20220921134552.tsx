import ClearIcon from '@mui/icons-material/Clear';
const New = () => (
    <div className='flex flex-col content-center bg-[#f5f5f5] h-screen'>
        <div className='h-[8vh] flex items-center space-between px-3'>
            <p className='font-semibold'>Create Post</p>
            <div className='cursor-pointer w-7 h-7 hover:text-[blue]/70 hover:bg-[#e2e3f3] text-center rounded'>
                <ClearIcon />
            </div>
        </div>
        <div className=' bg-white h-[82vh] border-[2px] rounded-lg'>

        </div>
        <div className='h-[10vh] flex items-center px-3'>
            <button className='px-3 py-2 rounded bg-[blue]/80 hover:bg-[blue] text-white font-bold text-base'>Publish</button>
            <button className='px-3 py-2 rounded hover:text'>Save</button>
        </div>
    </div>
)

export default New

