import { isAdmin } from "../access/isAdmin";

const Category = {
  slug: "category",
  admin: {
    useAsTitle: "name",
  },
  
  access: {
    // Only admins can create
    create: isAdmin,
    // Only admins or editors with site access can read
    read: isAdmin,
    // Only admins can update
    update: isAdmin,
    // Only admins can delete
    delete: isAdmin,
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