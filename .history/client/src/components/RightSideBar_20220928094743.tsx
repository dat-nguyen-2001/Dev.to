const listings = [
    { title: 'I develop free just to practice my React/Redux skills', genre: 'forhire', link: 'https://dev.to/listings/forhire/i-develop-for-free-just-to-practice-my-react-redux-skills-4935' },
    { title: 'Observability for Github CI workflows', genre: 'events', link: 'https://dev.to/listings/events/observability-for-github-ci-workflows-3d2l' },
    { title: 'Flatlogic Generator 50% Discount - flatlogic.com', genre: 'products', link: 'https://dev.to/listings/products/flatlogic-generator-50-discount-nbe' },
    { title: 'Collaborations Wanted For Noteslify - Privacy Friendly, Open Source. Alternatie to EverNote', genre: 'collabs', link: 'https://dev.to/listings/collabs/collaborators-wanted-for-noteslify-38c' },
    { title: 'Find an Entry Level Job in Tech: Switch to Become a Government Worker', genre: 'events', link: 'https://dev.to/listings/events/find-an-entry-level-job-in-tech-switch-to-become-a-government-worker-3o13' },
]

const helps = [
    { title: 'Can anyone provide an animation on the Node.js Event Loop', comment: 1, link: 'https://dev.to/nxpy123/can-anyone-provide-an-animation-on-the-nodejs-event-loop-28kg' },
    { title: 'A Developcado Falling from Gravitee', comment: 1, link: 'https://dev.to/jennjunod/a-developcado-falling-from-gravitee-1pci' },
    { title: 'How tough is Freelancing', comment: 9, link: 'https://dev.to/aviavinav/how-tough-is-freelancing-1493' },

]

const RightSideBar = () => {
    return (
        <aside>
            <div className="right_side_div">
                <h1>Listings</h1>
                <ul className="right_side_ul">
                    {listings.map(listing => (
                        <li>
                            <a href={listing.link}>
                                <h3>{listing.title}</h3>
                                <p>{listing.genre}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right_side_div">
                <h1>#help</h1>
                <ul className="right_side_ul">
                    
                    {helps.map( help => (
                        <li>
                            <a href="h">

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