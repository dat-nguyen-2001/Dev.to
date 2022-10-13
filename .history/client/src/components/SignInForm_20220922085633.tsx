
const SignInForm = () => {
    return (
            <form className="flex flex-col" method="submit">
                <div>
                    
                </div>
                <label>Email</label>
                <input type="text" className="h-[40px] border-[1px] rounded"/>
                <br></br>
                <label>Password</label>
                <input type={"password"} />
                <button className="bg-[blue]/70 hover:bg-[blue] text-lg text-white font-semibold py-3 rounded-md mx-2">Continue</button>
            </form>
    )
}

export default SignInForm