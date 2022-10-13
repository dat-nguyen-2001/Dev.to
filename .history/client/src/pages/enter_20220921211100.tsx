import Layout from "../components/Layout";
import Platform from "../components/SignInPlatform";

const Register = () => {
    return (
        <Layout title="Welcome-DEV Community 👩‍💻👨‍💻">
            <div className="text-center mx-auto w-[85vw] max-w-[800px] bg-white rounded pt-10 pb-20">
                <h1 className="font-bold mb-2 text-xl sm:text-2xl md:text-3xl">Welcome to DEV Community 👩‍💻👨‍💻</h1>
                <p className="mb-10">
                    <span className="text-[#3e51e0] hover:underline text-sm md:text-base">
                        <a href={'/'}>
                            DEV Community 👩‍💻👨‍💻
                        </a>
                    </span> is a community of 912,692 amazing developers
                </p>
                <div className="flex flex-col space-y-2 mt-[20px] w-[80vw] max-w-[400px] mx-auto">
                    <div className="bg-[#d4ded3] rounded cursor-pointer hover:border-[#d4d4d4] hover:border-solid hover:border-[2px]">
                        <Platform platform="Apple" logo="apple-logo.jpg" />
                    </div>
                    <div className="bg-[#022830] rounded cursor-pointer hover:border-[#022800] hover:border-solid hover:border-[2px]">
                        <Platform platform="Forem" logo="forem_logo.png" />
                    </div>
                    <div className="bg-[#000000] rounded cursor-pointer hover:border-[#030303] hover:border-solid hover:border-[2px]">
                        <Platform platform="Github" logo="github_logo.png" />
                    </div>
                    <div className="bg-[#1da1f2] rounded cursor-pointer hover:border-[#1da2f2] hover:border-solid hover:border-[2px]">
                        <Platform platform="Twitter" logo="twitter_logo.png" />
                    </div>
                </div>
                <br></br>
                <h1 className="flex linedWord max-w-[400px] mx-auto text-[15px]">Or continue with your email address</h1>
                <Sign
            </div>
        </Layout>
    )
}

export default Register