
const SignInForm = () => {
    return (
        <div>
            <form className="flex flex-col items-center">
                <label>Email</label>
                <input type="text"/>
                <label>Password</label>
                <input type={"password"} />
                <button>Continue</button>
            </form>
        </div>
    )
}

export default SignInForm