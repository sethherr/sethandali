import type { TinaField } from "tinacms";
export function postFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
  ] as TinaField[];
}
