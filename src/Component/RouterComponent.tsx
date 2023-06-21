import {useContext} from 'react'
import { Route, Routes } from "react-router-dom"
import { AuthContext } from "../Context"
import About from "../UI/Pages/About"
import Posts from "../UI/Pages/Posts"
import Login from "./Login"
import PageByID from "./PageByID"


const RouterComponent = () => {

    const {isLogin} : any = useContext(AuthContext);

    return isLogin ? (
        //Privat routes
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts/:id" element={<PageByID />} />
        </Routes>        
    ) : (
        //Common routes
        <Routes>
            <Route path='*' element={<Login/>} />
            <Route path="/about" element={<About />} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    )
}

export default RouterComponent