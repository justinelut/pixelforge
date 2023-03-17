const Home = {
    slug: "home",
    admin: {
        useAsTitle: "headline",
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
            name: "headline",
            label: "Headline",
            type: "text",
            required: true,
        },
        {
            name: "subheadline",
            label: "Sub Headline",
            type: "text",
            required: true,
        },
        {
            name: 'image', // required
            type: 'upload', // required
            relationTo: 'media', // required
            required: true,
        },
    ],
};

export default Home;