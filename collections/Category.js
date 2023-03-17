const Category = {
  slug: "category",
  admin: {
    useAsTitle: "name",
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
      name: "name",
      label: "Service category",
      type: "text",
      required: true,
    },
  ],
};

export default Category;