import formatSlug from "../utilities/formatSlug";
import { isAdmin } from "../access/isAdmin";

const Blog = {
    slug: 'blog',
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
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'image', // required
            type: 'upload', // required
            relationTo: 'media', // required
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
            label: "Slug",
            admin: {
                position: 'sidebar',
            },
            hooks: {
                beforeValidate: [
                    formatSlug("title")
                ]
            },
        },
        {
            name: 'featured',
            type: 'textarea',
            label: 'Featured Text',
            required: true,
            admin: {
                position: 'sidebar',
            }
        }
    ]
};

export default Blog;