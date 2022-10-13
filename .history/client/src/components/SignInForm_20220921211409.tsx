
const SignInForm = () => {
    return (
        <div>
            <form className="flex flex-col max-w-[400px] mx-auto" method="submit">
                <label>Email</label>
                <input type="text"/>
                <label>Password</label>
                <input type={"password"} />
                <button className="bg-[blue]/70">Continue</button>
            </form>
        </div>
    )
}

export default SignInForm