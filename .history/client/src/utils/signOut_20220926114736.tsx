import { sign } from "crypto";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil'
import { usernameState } from "../atoms/usernameAtom";

const signOut = function () {
    const [username, setUserName] = useRecoilState(usernameState);
    const navigate = useNavigate();
    sessionStorage.clear();
    setUserName('');
    navigate('/enter');
}

export default sign