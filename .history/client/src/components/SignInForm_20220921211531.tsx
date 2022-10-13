
const SignInForm = () => {
    return (
        <div>
            <form className="flex flex-col space-y- max-w-[400px] mx-auto" method="submit">
                <label>Email</label>
                <input type="text"/>
                <label>Password</label>
                <input type={"password"} />
                <button className="bg-[blue]/70 hover:bg-[blue] text-lg text-white font-semibold py-3 rounded-md">Continue</button>
            </form>
        </div>
    )
}

export default SignInForm