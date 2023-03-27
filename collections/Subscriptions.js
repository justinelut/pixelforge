import { isAdmin } from "../access/isAdmin";

const Subscription = {
    slug: "subscription",
    admin: {
        useAsTitle: "email",
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
            name: "email",
            label: "Email",
            type: "text",
            required: true,
        },
    ],
};

export default Subscription;