import {useEffect, useContext} from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from '../../components/Utility/axiosInstance';



export default function Signout() {
  
  const navigate = useNavigate();

  const {handleLogin} = useContext(AuthContext);

  useEffect(() => {
    async function _logout(){
      await axios.get('/api/users/signout');
      handleLogin(false, "");
      navigate("/");
    }

    setTimeout(() => {
      _logout();
    }, 500)
  }, [])

  return (
    <div>You are currently being logged out....</div>
  )
}
