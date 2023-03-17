const Projects = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
  },
  access: {
    // Only admins can create
    create: () => false,
    // Only admins or editors with site access can read
    read: () => true,
    // Only admins can update
    update: () => false,
    // Only admins can delete
    delete: () => false,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
  ],
};

export default Projects;