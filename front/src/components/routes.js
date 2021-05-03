import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Album from './homepage/Album'
import UserProfile from './profilepage/Profile'
import UserSettings from './profilepage/Settings'

const routes = [
    {
        path: "/login",
        component: SignIn
    },
    {
        path: "/registration",
        component: SignUp
    },
    {
        path: "/index",
        component: Album
    },
    {
        path: "/",
        component: UserSettings
    },
    {
        path: "/profile",
        component: UserProfile
    }
]
export default routes;