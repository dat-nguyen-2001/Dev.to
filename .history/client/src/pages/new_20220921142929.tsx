import ClearIcon from '@mui/icons-material/Clear';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import ImageIcon from '@mui/icons-material/Image';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const New = () => (
    <div className='grid grid-cols-4 bg-[#f5f5f5]'>
        <div className='flex flex-col content-center h-screen col-span-3'>
            <div className='h-[8vh] flex items-center space-between px-3'>
                <div className='flex items-center space-x-3'>
                    <a href='/' className='hidden md:inline'>
                        <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" width={50} className="cursor-pointer" />
                    </a>
                    <p className='font-semibold'>Create Post</p>
                </div>
                <div className='icon'>
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
                    <input placeholder='New post title here...' className='text-3xl w-full h-[130%] outline-none placeholder:font-bold placeholder-black/70' />
                </div>
                <div>
                    <input placeholder='Add up to 4 tags...' className='w-full outline-none' />
                </div>
                <div className='flex space-between py-4 px-2 bg-[#f9f9f9]'>
                    <div className='flex space-x-5'>
                        <div className='icon'>
                            <FormatBoldIcon />
                        </div>
                        <div className='icon'>
                            <FormatItalicIcon />
                        </div>
                        <div className='icon'>
                            <AttachmentIcon />
                        </div>
                        <div className='icon'>
                            <FormatListNumberedIcon />
                        </div>
                        <div className='icon'>
                            <FormatListBulletedIcon />
                        </div>
                        <div className='icon'>
                            <ImageIcon />
                        </div>
                    </div>
                    <div className='icon'>
                        <MoreVertIcon />
                    </div>
                </div>
                <div>
                    <textarea placeholder='Write your post content here...' className='w-full h-full outline-none text-lg' />
                </div>
            </div>
            <div className='h-[10vh] flex items-center px-3 space-x-2'>
                <button className='px-4 py-2 rounded bg-[blue]/70 hover:bg-[blue] text-white font-bold text-base'>Publish</button>
                <button className='px-3 py-2 rounded hover:text-[blue]/70 hover:bg-[#e2e3f3]'>Save draft</button>
                <button className='px-3 py-2 rounded hover:text-[blue]/70 hover:bg-[#e2e3f3] text-md'>Revert new changes</button>
            </div>
        </div>
        <div className='col-span-1 h-[82vh] items-center'>Hello world</div>
    </div>
)

export default New

