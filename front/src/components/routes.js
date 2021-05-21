import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Album from './homepage/Album'
import UserProfile from './profilepage/Profile'
import UserSettings from './settingspage/Settings'
import ResponsiveDrawer from "./admin/AdminPage";
import PlaceView from "./tours/PlaceView";
import PostList from "./posts/PostList";
import PostPage from "./posts/PostPage";
import PostRequest from "./posts/PostRequest";

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
        path: "/",
        exact: true,
        strict: true,
        component: Album
    },
    {
        path: "/settings",
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
    },
    {
        path: "/place/:id",
        exact: true,
        strict: true,
        component: PlaceView
    },
    {
        path: "/postsList/:placeId",
        exact: true,
        strict: true,
        component: PostList
    },
    {
        path: "/post/:postId",
        exact: true,
        strict: true,
        component: PostPage
    },
    {
        path: "/postRequest",
        exact: true,
        strict: true,
        component: PostRequest
    }
]
export default routes;