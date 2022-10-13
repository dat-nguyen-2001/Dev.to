
const SignInForm = () => {
    return (
        <div className="text-base">
            <form className="flex flex-col space-y-2 max-w-[400px] mx-auto" method="submit">
                <label>Email</label>
                <input type="text"/>
                <br></br>
                <label>Password</label>
                <input type={"password"} />
                <button className="bg-[blue]/70 hover:bg-[blue] text-lg text-white font-semibold py-3 rounded-md mx-3">Continue</button>
            </form>
        </div>
    )
}

export default SignInForm