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
import Notfound from './404/notfound'
import Featured from './Featured'
import { serverClient } from './graphql/serverProvider'
import Main from './Blog/Main'
import PostDetail from './Blog/Post'
import Contactus from './contact/Contact'
import Page from './Pages/Page'
import PageAnimations from './animations/PageAnimations'
import ComponentsAnimations, {featuredAnimations} from './animations/ComponentsAnimations'
import { BeatLoading, HashLoading } from './Loader'
import AboutMe from './profiles/Components/AboutMe'
import FeaturedMe from './profiles/Components/Home'
import SkillsMe from './profiles/Components/Skills'
import PortfolioMe from './profiles/Components/Portfolio'
import EducationMe from './profiles/Components/Education'
import WorkExperienceMe from './profiles/Components/Workexperience'
import ProfileMe from './profiles/Profilecard'


import Skills from './profiles/Skills'
import NoSearchResults from './404/noresults'


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
    Page,
    PageAnimations,
    featuredAnimations,
    ComponentsAnimations,
    BeatLoading,
    HashLoading,
    AboutMe,
    FeaturedMe,
    SkillsMe,
    PortfolioMe,
    EducationMe,
    ProfileMe,
    WorkExperienceMe,
    Skills,
    NoSearchResults
 }