import { isAdmin } from "../access/isAdmin";

const Payments = {
  slug: 'payments',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    // Only admins can create
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
  ],
};

export default Payments;