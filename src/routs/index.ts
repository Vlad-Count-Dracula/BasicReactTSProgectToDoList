import Login from "../Component/Login";
import PageByID from "../Component/PageByID";
import About from "../UI/Pages/About";
import Posts from "../UI/Pages/Posts";

interface route {
    path: string
    component: any
}

export const privateRoutes: Array<route> = [
    { path: '/', component: Posts, },
    { path: '/posts', component: Posts, },
    { path: '/about', component: About, },
    { path: '/posts/:id', component: PageByID, },
]

export const commonRoutes: Array<route> = [
    { path: '/login', component: Login, },
    { path: '/about', component: About, },
]