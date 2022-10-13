
import { useForm, SubmitHandler } from "react-hook-form";
import signIn from "../utils/signIn";
import { useNavigate } from 'react-router-dom'
import { useRecoilState} from 'recoil'
import { usernameState } from "../atoms/usernameAtom";


interface Inputs {
    email: string,
    password: string
}
function SignInForm() {
    const navigate = useNavigate()
    const [username, setUsername] = useRecoilState(usernameState)
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
        const accessToken = await signIn(email, password);
        console.log(accessToken);
        //User store token for authorizations
        if (accessToken !== null) {
            setUsername()
            navigate("/");
        }
    };

    return (
        <form className="flex flex-col space-y-3" method="submit" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-1">
                <label className="font-semibold flex">Email</label>
                <input type="email" className="registerInput" {...register("email", { required: true })} />
            </div>
            <div className="flex flex-col space-y-1">
                <label className="font-semibold flex">Password</label>
                <input type="password" className="registerInput" {...register("password", { required: true })} />
            </div>
            <button className=" bg-[blue]/70 hover:bg-[blue] text-lg text-white font-semibold py-3 rounded-md">Continue</button>
        </form>
    );
}

export default SignInForm