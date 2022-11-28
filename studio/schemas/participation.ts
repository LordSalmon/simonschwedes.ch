export default {
    name: "participation",
    title: "Participation",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                }
            ]
        },
        {
            name: "url",
            title: "URL",
            type: "url",
        },
        {
            name: "subtitle",
            title: "Subtitle",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "logo",
            title: "Logo",
            type: "image",
        }
    ],
};