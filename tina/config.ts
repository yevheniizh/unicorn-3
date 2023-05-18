import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "84efb77b-40fc-4f63-908a-2642293e07a5", // Get this from tina.io
  token: "9c893003ac24a50ecbfeff6df59e842ee888bd6f", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },

      {
        name: "home",
        label: "Global",
        path: "content",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            list: true,
            name: "accordions",
            label: "Accordion container",
            ui: {
              visualSelector: true,
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
              },
              {
                type: "rich-text",
                name: "description",
                label: "Description",
                required: true,
                description: 'Description',
                isBody: true,
              },
            ],
          },
          {
            type: "object",
            list: true,
            name: "cards",
            label: "Cards",
            ui: {
              visualSelector: true,
            },
            fields: [
              {
                type: "image",
                name: "image",
                label: "Image",
                required: true,
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
              },
              {
                type: "datetime",
                name: "date",
                label: "Date",
                required: true,
              },
              {
                type: "boolean",
                name: "minimized",
                label: "Minimized",
              },
              {
                type: "string",
                name: "font",
                label: "Font",
              },
              {
                type: "string",
                name: "href",
                label: "Href",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
