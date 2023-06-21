import {useContext} from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from "../Context";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const Login = () => {

    const { setIsLogin} : any = useContext(AuthContext)

    const login = () => {
        setIsLogin(true)
        localStorage.setItem('auth' , 'true')
    }

    return <div>
        <form>
            <Input type='text' placeholder="Login name" />
            <Input type="password" placeholder="Password" />
            <Link to='/posts' ><Button onClick={() => login()} >Login</Button></Link>
        </form>
    </div>
}

export default Login;