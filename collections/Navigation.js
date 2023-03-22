import formatSlug from "../utilities/formatSlug";

const Navigation = {
    slug: "navigation",
    admin: {
        useAsTitle: "title",
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
            name: "title",
            label: "Title",
            type: "text",
            required: true,
        },
       
        {
            name: 'navigation', // required
            type: 'array', // required
            label: 'Navigation',
            minRows: 1,
            maxRows: 20,
            labels: {
                singular: 'Navigation',
                plural: 'Navigations',
            },
            fields: [ // required
                {
                    name: 'name',
                    type: 'text',
                },
                {
                    name: 'slug',
                    type: 'text',
                    hooks: {
                        beforeValidate: [
                            formatSlug("name")
                        ]
                    },
                }
            ],
        },
    ],
};

export default Navigation;