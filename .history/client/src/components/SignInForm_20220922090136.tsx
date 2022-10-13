
const SignInForm = () => {
    return (
        <form className="flex flex-col space-y-0" method="submit">
            <div className="flex flex-col space-y-1">
                <label className="font-semibold">Email</label>
                <input type="text" className="h-[40px] border-[1px] rounded" />
            </div>

            <br></br>
            <div className="flex flex-col space-y-1">
                <label className="font-semibold">Password</label>
                <input type={"password"} className="h-[40px] border-[1px] rounded"/>
            </div>
        </form>
    )
}

export default SignInForm