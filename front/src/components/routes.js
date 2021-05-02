import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import Album from './HomePage/Album'
import UserProfile from './ProfilePage/Profile'

const routes = [
    {
        path: "/",
        component: SignIn
    },
    {
        path: "/up",
        component: SignUp
    },
    {
        path: "/index",
        component: Album
    },
    {
        path: "/profile",
        component: UserProfile
    }
]
export default routes;