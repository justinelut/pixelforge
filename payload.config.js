import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Media from './collections/Media';
import Payments from './collections/Payments'
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
import Subscriptions from './collections/Subscriptions'
import path from 'path'
import { DashboardNav, CustomMinimalRoute, CustomDefaultRoute,AfterDashboard } from './components/Admin'

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,

  admin: {
    user: Account.slug,
    css: path.resolve(__dirname, './payload.css'),
    components:{
      routes: [
        {
          path: '/purchased',
          Component: CustomMinimalRoute,
        },
        {
          path: '/billing',
          Component: CustomDefaultRoute,
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
  ],
});
