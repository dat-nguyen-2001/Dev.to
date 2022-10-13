
import { useForm, SubmitHandler } from "react-hook-form";


interface Input {
    email: string,
    password: string
}
const SignInForm = () => {
    const { register, handleSubmit } = useForm<Inputs>();

    const registerHandler = () => {
        
    }
    return (
        <form className="flex flex-col space-y-3" method="submit" onSubmit={registerHandler}>
            <div className="flex flex-col space-y-1">
                <label className="font-semibold flex">Email</label>
                <input type="text" className="registerInput" />
            </div>
            <div className="flex flex-col space-y-1">
                <label className="font-semibold flex">Password</label>
                <input type={"password"} className="registerInput"/>
            </div>
            <button className=" bg-[blue]/70 hover:bg-[blue] text-lg text-white font-semibold py-3 rounded-md">Continue</button>
        </form>
    )
}

export default SignInForm