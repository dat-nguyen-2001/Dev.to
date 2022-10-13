import ClearIcon from '@mui/icons-material/Clear';
const New = () => (
    <div className='flex flex-col content-center bg-[#f5f5f5] h-screen'>
        <div className='h-[5vh] flex items-center'>
            <p>Create Post</p>
            <ClearIcon />
        </div>
        <div className=' bg-white h-[90vh] rounded'>

        </div>
        <div className='h-[5vh] flex items-center'>
            <button>Publish</button>
            <button>Save</button>
        </div>
    </div>
)

export default New

