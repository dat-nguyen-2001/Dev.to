import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil'

const signOut = function() {
    const navigate = useNavigate();
    sessionStorage.clear();
                            setUserName('');
                            navigate('/enter');
}