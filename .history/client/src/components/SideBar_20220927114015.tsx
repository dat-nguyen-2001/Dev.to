import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
const SideBar = () => {
    return (
        <aside>
            <nav>
                <ul>
                    <li className="aside_icon">
                        <img src="/aside_icons/home.svg" width={20} />
                        <span>Home</span>
                    </li>
                    <li className="aside_icon">
                        <img src="/aside_icons/reading_list.svg" width={20} />
                        <span>Reading List</span>
                    </li>
                    <li className="aside_icon">
                        <img src="/aside_icons/listings.svg" width={20} />
                        <span>Listings</span>
                    </li>
                    <li className="aside_icon">
                        <img src="/aside_icons/podcast.svg" width={20} />
                        <span>Podcasts</span>
                    </li>
                    <li className="aside_icon">
                        <img src="/aside_icons/video.svg" width={20} />
                        <span>Videos</span>
                    </li>
                    <li className="aside_icon">
                        <img src="/aside_icons/tag.svg" width={20} />
                        <span>Tags</span>
                    </li>
                    <li className="aside_icon">
                        <img src="/aside_icons/FAQ.svg" width={20} />
                        <span>FAQ</span>
                    </li>
                    <li className="aside_icon">
                        <img src="/aside_icons/forem_shop.svg" width={20} />
                        <span>Forem Shop</span>
                    </li>
                    <li className="aside_icon">
                        <img src="/aside_icons/sponsors.svg" width={20} />
                        <span>Sponsors</span>
                    </li>
                    <li className="aside_icon">
                        <img src="/aside_icons/guide.svg" width={20} />
                        <span>Guide</span>
                    </li>
                </ul>
            </nav>
            <nav>
                <h1>Others</h1>
                <ul>
                    <li className="aside_icon">
                        <img src="/aside_icons/code_of_conducts.svg" width={20} />
                        <span>Code of Conducts</span>
                    </li>
                    <li className="aside_icon">
                        <img src="/aside_icons/privacy_policy.svg" width={20} />
                        <span>Privacy Policy</span>
                    </li>
                    <li className="aside_icon">
                        <img src="/aside_icons/terms_of_use.svg" width={20} />
                        <span>Terms of use</span>
                    </li>
                </ul>
            </nav>
            <div></div>
            <div></div>
            <div></div>
        </aside>
    )
}

export default SideBar