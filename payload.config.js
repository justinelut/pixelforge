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


dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,

  admin: {
    user: Account.slug,
  },
  collections: [
    Home,
    Media,
    Payments,
    Projects,
    Services,
    Category,
    Plans,
    Account
  ],
});
