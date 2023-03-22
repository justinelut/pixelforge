import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const Projects = {
  slug: "projects",
  admin: {
    useAsTitle: "service",
  },
  access: {
    // Only admins can create
    create: isAdminOrSelf,
    // Only admins or editors with site access can read
    read: isAdminOrSelf,
    // Only admins can update
    update: isAdmin,
    // Only admins can delete
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

  ],
};



export default Projects;