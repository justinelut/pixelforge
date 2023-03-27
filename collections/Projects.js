import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelfOthers } from "../access/isAdminOrSelf";

const Projects = {
  slug: "projects",
  admin: {
    useAsTitle: "service",
  },
  access: {
    read: isAdminOrSelfOthers,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "service",
      label: "Service",
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
      name: "amountpayed",
      label: "Amount Payed",
      type: "number",
      required: true,
    },
    {
      name: "plan",
      label: "Plan",
      type: "text",
      required: true,
    },
    {
      name: "paymentstatus",
      label: "Payment Status",
      type: "text",
      required: true,
    },
    {
      name: "status",
      label: "Status",
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
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'account',
      access: {
        update: () => false,
      },
      admin: {
        readOnly: true,
        position: 'sidebar',
        condition: data => Boolean(data?.createdBy)
      },

    }

  ],
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        if (operation === 'create') {
          if (req.user) {
            data.createdBy = req.user.id;
            return data;
          }
        }
      },
    ],
  },
};



export default Projects;