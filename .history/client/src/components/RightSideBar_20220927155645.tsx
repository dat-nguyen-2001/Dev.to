const listings = [
    { title: 'I develop free just to practice my React/Redux skills', genre: 'forhire', link: 'https://dev.to/listings/forhire/i-develop-for-free-just-to-practice-my-react-redux-skills-4935' },
    { title: 'I develop free just to practice my React/Redux skills', genre: 'forhire', link: 'https://dev.to/listings/forhire/i-develop-for-free-just-to-practice-my-react-redux-skills-4935' },
    { title: 'I develop free just to practice my React/Redux skills', genre: 'forhire', link: 'https://dev.to/listings/forhire/i-develop-for-free-just-to-practice-my-react-redux-skills-4935' },
    { title: 'I develop free just to practice my React/Redux skills', genre: 'forhire', link: 'https://dev.to/listings/forhire/i-develop-for-free-just-to-practice-my-react-redux-skills-4935' },
    { title: 'I develop free just to practice my React/Redux skills', genre: 'forhire', link: 'https://dev.to/listings/forhire/i-develop-for-free-just-to-practice-my-react-redux-skills-4935' },
]

const RightSideBar = () => {
    return (
        <aside>
            <div className="right_side_div">
                <h1>Listings</h1>
                <ul className="right_side_ul">
                    {listings.map(listing => (
                        <li>
                            <a href={}>
                                <h3>{listing.title}</h3>
                                <p>{listing.genre}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right_side_div">
                <h1></h1>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="right_side_div">
                <h1></h1>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="right_side_div">
                <h1></h1>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="right_side_div">
                <h1></h1>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="right_side_div">
                <h1></h1>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div className="right_side_div">
                <h1></h1>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </aside>
    )
}

export default RightSideBar