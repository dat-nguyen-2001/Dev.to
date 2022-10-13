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

const discusses = [
    { title: 'Do DevOps suffer less ageism compared to software developers?', comment: 8, link: 'https://dev.to/sloan/do-devops-suffer-less-ageism-compared-to-software-developers-277a' },
    { title: 'Meme Monday', comment: 29, link: 'https://dev.to/ben/meme-monday-3jjm' },
    { title: 'Why I am not getting good at Programming', comment: 9, link: 'https://dev.to/ikray/why-i-am-not-getting-good-at-programming-4npo' },
    { title: 'What are your Favorite Authors, on Which Topics, and Why?', comment: 17, link: 'https://dev.to/jmfayard/what-are-your-favorite-authors-on-which-topics-and-why-12c7' },
]

const imfives = [
    { title: 'Unicorns on DEV', comment: 8, link: 'https://dev.to/sloan/do-devops-suffer-less-ageism-compared-to-software-developers-277a' },
    { title: "Explain Open Source like I'm five", comment: 29, link: 'https://dev.to/ben/meme-monday-3jjm' },
    { title: 'Why I am not getting good at Programming', comment: 9, link: 'https://dev.to/ikray/why-i-am-not-getting-good-at-programming-4npo' },
    { title: 'What are your Favorite Authors, on Which Topics, and Why?', comment: 17, link: 'https://dev.to/jmfayard/what-are-your-favorite-authors-on-which-topics-and-why-12c7' },
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
                    {helps.map(help => (
                        <li>
                            <a href={help.link}>
                                <h3>
                                    {help.title}
                                </h3>
                                <p>
                                    {help.comment} comments
                                </p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right_side_div">
                <h1>#discuss</h1>
                <ul className="right_side_ul">
                    {discusses.map(discuss => (
                        <li>
                            <a href={discuss.link}>
                                <h3>
                                    {discuss.title}
                                </h3>
                                <p>
                                    {discuss.comment} comments
                                </p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right_side_div">
                <h1>#explainlikeimfive</h1>
                <ul className="right_side_ul">
                    
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