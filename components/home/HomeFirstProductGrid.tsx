import React from "react";
import ProductsGrid from "../common/ProductsGrid";
import RenderImageAndProducts from "../common/RenderImageAndProducts";

export default function HomeFirstProductGrid() {
  const renderFunction = (url: any) => {
    return (
      <RenderImageAndProducts
        productId=""
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
      content: (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative"
        >
          <div className="absolute top-1 left-0 h-full w-full bg-black bg-opacity-30 p-5 text-white space-y-[10px]">
            <p className="text-xl">PLANTS DOCTORS</p>
            <p className="text-2xl font-bold">GULF PALM</p>
            <p className="">
              Gulf Palms caters to a wide scope of clients ranging from
              Governmental, Commercial, Industrial to Residential. Our
              experienced team provides customized solutions from design to
              execution based on our clients.
            </p>
          </div>
        </div>
      ),
      col: 1,
      rowSpan: "20%",
      height: "110%",
    },
    {
      id: 1,
      content: renderFunction(
        "https://gulfpalms.com/wp-content/uploads/2023/10/3123600by600-thumb-430x430.jpg"
      ),
      col: 2,
      rowSpan: "20%",
      height: "60%",
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
        "https://gulfpalms.com/wp-content/uploads/2023/10/3-mian-img.jpg"
      ),
      col: 3,
      rowSpan: "20%",
      height: "50%",
    },
    {
      id: 4,
      content: renderFunction(
        "https://gulfpalms.com/wp-content/uploads/2023/10/kjkjkj600by600-thumb.jpg"
      ),
      col: 3,
      rowSpan: "20%",
      height: "50%",
    },
  ];

  return (
    <div className="">
      <div className="h-[580px]">
        <ProductsGrid items={items} />
      </div>
    </div>
  );
}
