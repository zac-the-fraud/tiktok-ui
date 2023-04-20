import {HeaderOnly} from '~/components/Layout'
import Home from "src/pages/Home"
import Following from 'src/pages/Following';
import Contact from 'src/pages/Contact'
import Profile from '~/pages/profile'
import Upload from '~/pages/Upload'
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/contact', component: Contact },
    {path: '/profile', component: Profile },
    {path: '/Upload', component: Upload, layout: HeaderOnly }

    
]
const privateRoutes = [

]

export {publicRoutes, privateRoutes}
