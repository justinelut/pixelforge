import formatSlug from "../utilities/formatSlug";
import { isAdmin } from "../access/isAdmin";

const Services = {
  slug: "services",
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
      label: "Service Name",
      type: "text",
      required: true,
    },
    {
      name: 'categories', // required
      type: 'relationship', // required
      relationTo: 'category', // required
      hasMany: false,
    },
    {
      name: "description",
      label: 'Description', 
      type: "textarea",
      required: true, 
    },
    {
      name: "plans",
      label: 'Plans', 
      type: "relationship",
      relationTo: 'plans',
      hasMany: true,
      required: true, 
    },
    {
      name: 'image', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
          beforeValidate: [
            formatSlug("title")
          ]
      },
    }
  ],
};

export default Services;