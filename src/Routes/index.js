import Home from "src/pages/Home"
import Following from 'src/pages/Following';
import Contact from 'src/pages/Contact'

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/contact', component: Contact }
]
const privateRoutes = [

]

export {publicRoutes, privateRoutes}
