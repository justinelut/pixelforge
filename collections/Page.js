import formatSlug from "../utilities/formatSlug";
const Page = {
    slug: 'page',
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
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'content', // required
            type: 'richText', // required
            defaultValue: [{
                children: [{ text: 'Here is some default content for this field' }],
            }],
            required: true,
            admin: {
                elements: [
                    'h2',
                    'h3',
                    'h4',
                    'link',
                ],
                leaves: [
                    'bold',
                    'italic',
                    {
                        name: 'highlight',
                    }
                ],
                link: {
                    // Inject your own fields into the Link element
                    fields: [
                        {
                            name: 'rel',
                            label: 'Rel Attribute',
                            type: 'select',
                            hasMany: true,
                            options: [
                                'noopener', 'noreferrer', 'nofollow',
                            ],
                        },
                    ],
                },
                upload: {
                    collections: {
                        media: {
                            fields: [
                                // any fields that you would like to save
                                // on an upload element in the `media` collection
                            ],
                        },
                    },
                },
            }
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
    ]
};

export default Page