import ClearIcon from '@mui/icons-material/Clear';
const New = () => (
    <div className='flex flex-col content-center'>
        <div className='basis-1'>
            <ClearIcon />
        </div>
        <div className='basis-8'></div>
        <div className='basis-1'>
            <button>Publish</button>
            <button>Save</button>
        </div>
    </div>
)

export default New

