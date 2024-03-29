import { isAdmin } from "../access/isAdmin";

const Plans = {
  slug: "plans",
  admin: {
    useAsTitle: "title",
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
        name: "title",
        label: "Title",
        type: "text",
        required: true,
      },
    {
      name: "price",
      label: "Price",
      type: "number",
      required: true,
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "type",
      label: "Type",
      type: "text",
      required: true,
    },
    {
        name: 'details', // required
        type: 'array', // required
        label: 'Details',
        minRows: 2,
        maxRows: 20,
        labels: {
          singular: 'Detail',
          plural: 'Details',
        },
        fields: [ // required
        {
          name: 'Details',
          type: 'text',
        },
      ],
    },
  ],
};

export default Plans;