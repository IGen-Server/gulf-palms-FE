import React from "react";
import ProductsGrid from "../common/ProductsGrid";
import RenderImageAndProducts from "../common/RenderImageAndProducts";

export default function HomeSecondProductGrid() {
  const renderFunction = (url: any) => {
    return (
      <RenderImageAndProducts
        renderType="image"
        imageFileOrUrl={`${url}`}
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
    );
  };

  const items = [
    {
      id: 5,
      content: renderFunction(
        "https://gulfpalms.com/wp-content/uploads/2023/10/jjf600by800-thumb.jpg"
      ),
      col: 1,
      rowSpan: "20%",
      height: "60%",
    },
    {
      id: 1,
      content: renderFunction(
        "https://gulfpalms.com/wp-content/uploads/2023/09/600by600-thumb5.jpg"
      ),
      col: 1,
      rowSpan: "20%",
      height: "40%",
    },
    {
      id: 3,
      content: renderFunction(
        "https://gulfpalms.com/wp-content/uploads/2023/10/lkl600by800-thumb.jpg"
      ),
      col: 2,
      rowSpan: "20%",
      height: "40%",
    },
    {
      id: 2,
      content: renderFunction(
        "https://gulfpalms.com/wp-content/uploads/2023/10/e600by800-thumb.jpg"
      ),
      col: 2,
      rowSpan: "20%",
      height: "60%",
    },
    {
      id: 4,
      content: renderFunction(
        "https://gulfpalms.com/wp-content/uploads/2023/10/q600by800-thumb.jpg"
      ),
      col: 3,
      rowSpan: "20%",
      height: "60%",
    },
    {
      id: 6,
      content: renderFunction(
        "https://gulfpalms.com/wp-content/uploads/2023/10/w600by800-thumb.jpg"
      ),
      col: 3,
      rowSpan: "20%",
      height: "60%",
    },
  ];

  return (
    <div className="pb-[150px]">
      <div className="h-[600px]">
        <ProductsGrid items={items} />
      </div>
    </div>
  );
}
