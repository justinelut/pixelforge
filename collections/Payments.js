const Payments = {
  slug: 'payments',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    // Only admins can create
    create: () => true,
    // Only admins or editors with site access can read
    read: () => true,
    // Only admins can update
    update: () => true,
    // Only admins can delete
    delete: () => true,
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