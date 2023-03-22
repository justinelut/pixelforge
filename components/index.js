import Navbar from "./Navbar";
import Herosection from './Herosection'
import Howitworks from './Howitworks'
import Features from './Features'
import Pricing from './Pricing'
import Faq from './Faq'
import Footer from './Footer'
import Content from './services/Content'
import Plans from './services/Plans'
import Checkout from './services/Checkout'
import Signup from './auth/Signup'
import Login from './auth/Login'
import Notfound from './404/404notfound'
import Featured from './Featured'
import { serverClient } from './graphql/serverProvider'
import Main from './Blog/Main'
import PostDetail from './Blog/Post'
import Contactus from './contact/Contact'
import Page from './Pages/Page'



export { 
    serverClient, 
    Navbar, 
    Herosection, 
    Howitworks, 
    Features, 
    Pricing, 
    Faq, 
    Footer, 
    Content, 
    Plans, 
    Checkout, 
    Signup, 
    Login, 
    Notfound, 
    Featured,
    Main,
    PostDetail,
    Contactus,
    Page
 }