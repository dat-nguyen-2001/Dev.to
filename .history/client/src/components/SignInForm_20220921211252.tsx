
const SignInForm = () => {
    return (
        <div>
            <form className="flex flex-col" type="s">
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