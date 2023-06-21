import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context';
import Button from '../UI/Button/Button';
import s from './NavBar.module.css';

const NavBar = () => {

    const { isLogin, setIsLogin }: any = useContext(AuthContext)

    const logout = () => {
        setIsLogin(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={s.navbarContainer}>
            {isLogin ?
                // For privat user
                <ul className={s.navbar} >
                    <li>
                        <Link to='/posts' className={s.text} ><Button><h2 >Posts</h2></Button></Link>
                    </li>
                    <li>
                        <Link to='/about' className={s.text}  ><Button><h2 >About</h2></Button></Link>
                    </li>
                    <li>
                        <Button onClick={() => logout()} ><h2 >Logout</h2></Button>
                    </li>
                </ul> :
                // For common user
                <ul className={s.navbar} >
                    <li>
                        <Link to='/about' className={s.text}  ><Button><h2 >About</h2></Button></Link>
                    </li>
                    <li>
                        <Link to='/login' className={s.text}  ><Button><h2 >Login</h2></Button></Link>
                    </li>
                </ul>}
        </div>
    )
}

export default NavBar;