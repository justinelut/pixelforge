import { isAdmin } from "../../access/isAdmin";

const Messages = {
    slug: "messages",
    admin: {
        useAsTitle: "message",
    },
    access: {
        read: isAdmin,
        update: () => false,
        delete: isAdmin,
    },
    fields: [
        {
            name: "message",
            label: "Message",
            type: "textarea",
            required: true,
        },
        {
            name: "projectid",
            label: "Project Id",
            type: "text",
            required: true,
        },
        {
            name: "userid",
            label: "User Id",
            type: "text",
            required: true,
        },
        {
            name: "usertype",
            label: "User Type",
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



export default Messages;