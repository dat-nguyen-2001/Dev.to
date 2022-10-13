import ClearIcon from '@mui/icons-material/Clear';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import ImageIcon from '@mui/icons-material/Image';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CodeIcon from '@mui/icons-material/Code';
import BoltIcon from '@mui/icons-material/Bolt';

const New = () => (
    <div className='md:grid grid-cols-4 bg-[#f5f5f5] lg:grid-cols-3'>
        <div className='flex flex-col content-center h-screen col-span-3 lg:col-span-2'>
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
            <div className=' bg-white h-[82vh] border-[2px] rounded-lg flex flex-col py-3 px-2 space-y-5 lg:ml-[100px]'>
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
                        <div className='icon hidden sm:inline'>
                            <AttachmentIcon />
                        </div>
                        <div className='icon'>
                            <FormatListNumberedIcon />
                        </div>
                        <div className='icon'>
                            <FormatListBulletedIcon />
                        </div>
                        <div className='icon hidden md:inline'>
                            <FormatQuoteIcon />
                        </div>
                        <div className='icon hidden md:inline'>
                            <CodeIcon />
                        </div>
                        <div className='icon hidden md:inline'>
                            <BoltIcon />
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
            <div className='h-[10vh] flex items-center px-3 space-x-2 lg:ml-[100px] lg:px-0'>
                <button className='px-4 py-2 rounded bg-[blue]/70 hover:bg-[blue] text-white font-bold text-base'>Publish</button>
                <button className='px-3 py-2 rounded hover:text-[blue]/70 hover:bg-[#e2e3f3]'>Save draft</button>
                <button className='hidden sm:inline px-3 py-2 rounded hover:text-[blue]/70 hover:bg-[#e2e3f3] text-md'>Revert new changes</button>
            </div>
        </div>
        <div className='hidden md:inline col-span-1 h-[82vh] my-auto px-2'>
            <h1 className='font-bold'>Tagging Guidelines</h1>
            <ul className='text-[14px] list-disc pl-5 lg'>
                <li>Tags help people find your post.</li>
                <li>Think of tags as the topics or categories that best describe your post.</li>
                <li>Add up to four comma-separated tags per post. Combine tags to reach the appropriate subcommunities.</li>
                <li>Use existing tags whenever possible.</li>
                <li>Some tags, such as "help" or "healthy debate" have special posting guidelines</li>
            </ul>
        </div>
    </div>
)

export default New

