import React from "react";
import ProductsGrid from "../common/ProductsGrid";
import RenderImageAndProducts from "../common/RenderImageAndProducts";

export default function HomeFirstProductGrid() {
  const items = [
    {
      id: 3,
      content: (
        <RenderImageAndProducts
          renderType="image"
          imageFileOrUrl="https://gulfpalms.com/wp-content/uploads/2023/10/3123600by600-thumb-430x430.jpg"
          hoverProducts={[
            {
              position: { x: 10, y: 15 },
              imgUrl:
                "https://gulfpalms.com/wp-content/uploads/2023/08/Cholorophytum-2-300x300.jpg",
              productId: "1",
              price: "25.99",
              description: "Product 1",
            },
            {
              position: { x: 50, y: 50 },
              imgUrl:
                "https://gulfpalms.com/wp-content/uploads/2023/08/Cholorophytum-2-300x300.jpg",
              productId: "2",
              price: "39.99",
              description: "Product 2",
            },
          ]}
        />
      ),
      columnSpan: 1,
      rowSpan: 22,
    },
    { id: 1, content: "Product 1", columnSpan: 2, rowSpan: 1 },
    { id: 2, content: "Product 2", columnSpan: 1, rowSpan: 1 },
    { id: 4, content: "Product 4", columnSpan: 1, rowSpan: 1 },
    { id: 5, content: "Product 5", columnSpan: 2, rowSpan: 1 },
  ];

  return (
    <div>
      <div className="p-6">
        <ProductsGrid items={items} maxColumns={5} />
      </div>
    </div>
  );
}
