import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Album from './homepage/Album'
import UserProfile from './profilepage/Profile'
import UserSettings from './settingspage/Settings'
import ResponsiveDrawer from "./admin/AdminPage";

const routes = [
    {
        path: "/login",
        exact: true,
        strict: true,
        component: SignIn
    },
    {
        path: "/registration",
        exact: true,
        strict: true,
        component: SignUp
    },
    {
        path: "/index",
        exact: true,
        strict: true,
        component: Album
    },
    {
        path: "/",
        exact: true,
        strict: true,
        component: UserSettings
    },
    {
        path: "/admin",
        exact: false,
        strict: false,
        component: ResponsiveDrawer
    },
    {
        path: "/profile",
        exact: true,
        strict: true,
        component: UserProfile
    }
]
export default routes;