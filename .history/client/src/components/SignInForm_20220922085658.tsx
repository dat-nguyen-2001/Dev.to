
const SignInForm = () => {
    return (
            <form className="flex flex-col" method="submit">
                <div>
                <label>Email</label>
                <input type="text" className="h-[40px] border-[1px] rounded"/>
                </div>
                
                <br></br>
                <div>
                    
                </div>
                
                <button className="bg-[blue]/70 hover:bg-[blue] text-lg text-white font-semibold py-3 rounded-md mx-2">Continue</button>
            </form>
    )
}

export default SignInForm