const Contact = {
    slug: "contact",
    admin: {
        useAsTitle: "firstname",
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
            name: "firstname",
            label: "First Name",
            type: "text",
            required: true,
        },
        {
            name: "lastname",
            label: "Last Name",
            type: "text",
            required: true,
        },
        {
            name: "email",
            label: "Email",
            type: "text",
            required: true,
        },
        {
            name: "message",
            label: "Message",
            type: "textarea",
            required: true,
        },
    ],
};

export default Contact;