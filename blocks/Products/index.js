// eslint-disable-next-line quotes
import React from "react";

/* eslint-disable quotes */
export const Products = {
  slug: "products",
  label: {
    singular: "Product",
    plural: "Products",
  },
  type: "array",
  minRows: 1,
  maxRows: 10,

  fields: [
    {
      name: "title",
      label: "Title",
      component: "text",
    },
    {
      name: "description",
      label: "Description",
      component: "textarea",
    },
    {
      name: "price",
      label: "Price",
      component: "number",
    },
  ],
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Component = (props) => {
  const { title, description, price } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};
