import ClearIcon from '@mui/icons-material/Clear';
const New = () => (
    <div className='flex flex-col content-center bg-[#f5f5f5] h-screen'>
        <div className='h-[8vh] flex items-center space-between px-3'>
            <p className='font-semibold'>Create Post</p>
            <div className='cursor-pointer w-7 h-7 hover:text-[blue]/70 hover:bg-[#e2e3f3] text-center rounded'>
                <a href='/'>
                    <ClearIcon />
                </a>
            </div>
        </div>
        <div className=' bg-white h-[82vh] border-[2px] rounded-lg flex flex-col'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className='w-'>
                <textarea placeholder='Write your post content here...' />
            </div>
        </div>
        <div className='h-[10vh] flex items-center px-3 space-x-2'>
            <button className='px-4 py-2 rounded bg-[blue]/70 hover:bg-[blue] text-white font-bold text-base'>Publish</button>
            <button className='px-3 py-2 rounded hover:text-[blue]/70 hover:bg-[#e2e3f3]'>Save draft</button>
            <button className='px-3 py-2 rounded hover:text-[blue]/70 hover:bg-[#e2e3f3] text-md'>Revert new changes</button>
        </div>
    </div>
)

export default New

