import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Media from './collections/Media';
import InitiatedPayments from './collections/InitiatePay'
import Projects from './collections/Projects'
import Services from './collections/Services'
import Category from './collections/Category'
import Plans from './collections/Plans'
import Account from './collections/Account'
import Home from './collections/Home'
import Blog from './collections/Blog'
import Contact from './collections/Contact'
import Navigation from './collections/Navigation'
import Page from './collections/Page'
import Payments from './collections/Payments'
import Subscriptions from './collections/Subscriptions'
import Messages from './collections/Admin/chat'
import path from 'path'
import { DashboardNav, 
  CustomMinimalRoute,
   MyProjects,
   AfterDashboard,
   ProjectDescription,
   RouteProvider
} from './components/Admin'

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,

  admin: {
    user: Account.slug,
    css: path.resolve(__dirname, './payload.css'),
    components:{
      providers: [RouteProvider],
      routes: [
        {
          path: '/billing',
          Component: CustomMinimalRoute,
          exact: true
        },
        {
          path: '/purchased',
          Component: MyProjects,
          exact: true
        },
        {
          path: '/purchased/:routeid',
          Component: ProjectDescription,
          exact: true
        },
      ],
      beforeDashboard: [
        AfterDashboard,
      ],
      afterNavLinks: [
        DashboardNav
      ]
    }
  },
  collections: [
    Home,
    Blog,
    Contact,
    Navigation,
    Page,
    Subscriptions,
    Media,
    Payments,
    Projects,
    Services,
    Category,
    Plans,
    Account,
    Messages,
    InitiatedPayments,
  ],
});
