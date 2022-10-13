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
        <div className=' bg-white h-[82vh] border-[2px] rounded-lg flex flex-col py-3 px-2 space-y-5'>
            <div>
                <button className='font-semibold px-2 py-[6px] rounded-md border-[2px] border-black/30'>Add a cover image</button>
            </div>
            <div>
                <input placeholder='New post title here...' className='w-full h-[130%] content-center outline-none placeholder:text-3xl placeholder:font-bold' />
            </div>
            <div>
                <input placeholder='Add up to 4 tags...' className='w-full outline-none' />
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
            <div>
                <textarea placeholder='Write your post content here...' className='w-full h-full outline-none' />
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

