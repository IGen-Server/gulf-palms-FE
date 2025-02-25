import React from "react";
import RenderImageAndProducts from "../common/RenderImageAndProducts";

export default function HomeFirstProductGrid() {
  return (
    <div className="flex items-center gap-[40px] min-h-fit h-[100vh] flex-col lg:flex-row  lg:h-[839px] w-max font-sans">
      <div
        style={{
          backgroundImage: `url(https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative h-full w-full lg:w-[576px]"
      >
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-30 p-[30px] text-white space-y-[10px]">
          <p className="md:text-[30px]">PLANTS DOCTORS</p>
          <p className="md:text-[36px] font-arabic font-bold">GULF PALM</p>
          <p className="md:text-[16px] max-w-sm">
            Gulf Palms caters to a wide scope of clients ranging from
            Governmental, Commercial, Industrial to Residential. Our experienced
            team provides customized solutions from design to execution based on
            our clients.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[17px] lg:gap-[40px] h-full">
        <div className="w-[calc(50vw-17px)] lg:w-[352px] flex flex-col h-full gap-[17px]">
          <div className="w-full h-[325px]">
            <RenderImageAndProducts
              productId="1"
              name="Flower"
              price={10}
              renderType="image"
              imageFileOrUrl={`"https://gulfpalms.com/wp-content/uploads/2023/10/3123600by600-thumb-430x430.jpg"`}
              hoverProducts={[
                {
                  position: { x: 10, y: 27 },
                  imgUrl: "https://gulfpalms.com/wp-content/uploads/2023/08/Cholorophytum-2-300x300.jpg",
                  productId: "1",
                  hoveredTitle: "Cholorophytum (S-16 cm H-30 cm)",
                  hoveredHref: "https://gulfpalms.com/en/product/cholorophytum/",
                  price: "2000",
                  description: "Called the lipstick plant and has about 150 species that live in tropical and semi-tropical areas. One of the best hanging plants and can flower all year long. The leaves are leathery, thick and oval shaped with dark green colours. The flowers can be either singular or complex and comes with red, orange and yellow colours.",
                },
                {
                  position: { x: 52, y: 62 },
                  imgUrl: "https://gulfpalms.com/wp-content/uploads/2023/08/Cholorophytum-2-300x300.jpg",
                  productId: "2",
                  hoveredTitle: "Cholorophytum (S-16 cm H-30 cm)",
                  hoveredHref: "https://gulfpalms.com/en/product/cholorophytum/",
                  price: "2000",
                  description: "Called the lipstick plant and has about 150 species that live in tropical and semi-tropical areas. One of the best hanging plants and can flower all year long. The leaves are leathery, thick and oval shaped with dark green colours. The flowers can be either singular or complex and comes with red, orange and yellow colours.",
                },
                {
                  position: { x: 75, y: 72 },
                  imgUrl: "https://gulfpalms.com/wp-content/uploads/2023/08/Cholorophytum-2-300x300.jpg",
                  productId: "3",
                  hoveredTitle: "Cholorophytum (S-16 cm H-30 cm)",
                  hoveredHref: "https://gulfpalms.com/en/product/cholorophytum/",
                  price: "2000",
                  description: "Called the lipstick plant and has about 150 species that live in tropical and semi-tropical areas. One of the best hanging plants and can flower all year long. The leaves are leathery, thick and oval shaped with dark green colours. The flowers can be either singular or complex and comes with red, orange and yellow colours.",
                },
              ]}
              slug={""}
              currency={""}
              currentCategories={[]}
              productAttribute={null}
            />
          </div>
          <div className="w-full flex-1 h-full">
            <RenderImageAndProducts
              productId="2"
              name= "Flower"
              price = {10}
              renderType="image"
              imageFileOrUrl={`https://gulfpalms.com/wp-content/uploads/2023/10/lkl600by800-thumb.jpg`}
              hoverProducts={[
                {
                  position: { x: 24, y: 44 },
                  imgUrl:
                    "https://gulfpalms.com/wp-content/uploads/2023/08/Cholorophytum-2-300x300.jpg",
                  productId: "1",
                  hoveredTitle: "Cholorophytum (S-16 cm H-30 cm)",
                  hoveredHref:
                    "https://gulfpalms.com/en/product/cholorophytum/",
                  price: "2000",
                  description:
                    "Called the lipstick plant and has about 150 species that live in tropical and semi-tropical areas. One of the best hanging plants and can flower all year long. The leaves are leathery, thick and oval shaped with dark green colours. The flowers can be either singular or complex and comes with red, orange and yellow colours.",
                },
                {
                  position: { x: 52, y: 52 },
                  imgUrl:
                    "https://gulfpalms.com/wp-content/uploads/2023/08/Cholorophytum-2-300x300.jpg",
                  productId: "2",
                  hoveredTitle: "Cholorophytum (S-16 cm H-30 cm)",
                  hoveredHref:
                    "https://gulfpalms.com/en/product/cholorophytum/",
                  price: "2000",
                  description:
                    "Called the lipstick plant and has about 150 species that live in tropical and semi-tropical areas. One of the best hanging plants and can flower all year long. The leaves are leathery, thick and oval shaped with dark green colours. The flowers can be either singular or complex and comes with red, orange and yellow colours.",
                },
                {
                  position: { x: 65, y: 78 },
                  imgUrl:
                    "https://gulfpalms.com/wp-content/uploads/2023/08/Cholorophytum-2-300x300.jpg",
                  productId: "3",
                  hoveredTitle: "Cholorophytum (S-16 cm H-30 cm)",
                  hoveredHref:
                    "https://gulfpalms.com/en/product/cholorophytum/",
                  price: "2000",
                  description:
                    "Called the lipstick plant and has about 150 species that live in tropical and semi-tropical areas. One of the best hanging plants and can flower all year long. The leaves are leathery, thick and oval shaped with dark green colours. The flowers can be either singular or complex and comes with red, orange and yellow colours.",
                },
                {
                  position: { x: 29, y: 73 },
                  imgUrl:
                    "https://gulfpalms.com/wp-content/uploads/2023/08/Cholorophytum-2-300x300.jpg",
                  productId: "4",
                  hoveredTitle: "Cholorophytum (S-16 cm H-30 cm)",
                  hoveredHref:
                    "https://gulfpalms.com/en/product/cholorophytum/",
                  price: "2000",
                  description:
                    "Called the lipstick plant and has about 150 species that live in tropical and semi-tropical areas. One of the best hanging plants and can flower all year long. The leaves are leathery, thick and oval shaped with dark green colours. The flowers can be either singular or complex and comes with red, orange and yellow colours.",
                },
                {
                  position: { x: 73, y: 52 },
                  imgUrl:
                    "https://gulfpalms.com/wp-content/uploads/2023/08/Cholorophytum-2-300x300.jpg",
                  productId: "5",
                  hoveredTitle: "Cholorophytum (S-16 cm H-30 cm)",
                  hoveredHref:
                    "https://gulfpalms.com/en/product/cholorophytum/",
                  price: "2000",
                  description:
                    "Called the lipstick plant and has about 150 species that live in tropical and semi-tropical areas. One of the best hanging plants and can flower all year long. The leaves are leathery, thick and oval shaped with dark green colours. The flowers can be either singular or complex and comes with red, orange and yellow colours.",
                },
              ]}
              slug={""}
              currency={""}
              currentCategories={[]}
              productAttribute={null}
            />
          </div>
        </div>
        <div className="w-[calc(50vw-17px)] lg:w-[352px] flex flex-col h-full gap-[17px]">
          <div className="w-full h-full flex-1">
            <RenderImageAndProducts
              productId="3"
              name= "Flower"
              price = {10}
              renderType="image"
              imageFileOrUrl={`https://gulfpalms.com/wp-content/uploads/2023/10/3-mian-img.jpg`}
              hoverProducts={[
                {
                  position: { x: 30, y: 70 },
                  imgUrl:
                    "https://gulfpalms.com/wp-content/uploads/2023/08/Cholorophytum-2-300x300.jpg",
                  productId: "1",
                  hoveredTitle: "Cholorophytum (S-16 cm H-30 cm)",
                  hoveredHref:
                    "https://gulfpalms.com/en/product/cholorophytum/",
                  price: "2000",
                  description:
                    "Called the lipstick plant and has about 150 species that live in tropical and semi-tropical areas. One of the best hanging plants and can flower all year long. The leaves are leathery, thick and oval shaped with dark green colours. The flowers can be either singular or complex and comes with red, orange and yellow colours.",
                },
              ]}
              slug={""}
              currency={""}
              currentCategories={[]}
              productAttribute={null}
            />
          </div>
          <div className="w-full h-[325px]">
            <RenderImageAndProducts
              productId="4"
              name= "Flower"
              price = {10}
              renderType="image"
              imageFileOrUrl={`https://gulfpalms.com/wp-content/uploads/2023/10/kjkjkj600by600-thumb.jpg`}
              hoverProducts={[
                {
                  position: { x: 50, y: 70 },
                  imgUrl:
                    "https://gulfpalms.com/wp-content/uploads/2023/08/Cholorophytum-2-300x300.jpg",
                  productId: "1",
                  hoveredTitle: "Cholorophytum (S-16 cm H-30 cm)",
                  hoveredHref:
                    "https://gulfpalms.com/en/product/cholorophytum/",
                  price: "2000",
                  description:
                    "Called the lipstick plant and has about 150 species that live in tropical and semi-tropical areas. One of the best hanging plants and can flower all year long. The leaves are leathery, thick and oval shaped with dark green colours. The flowers can be either singular or complex and comes with red, orange and yellow colours.",
                },
              ]}
              slug={""}
              currency={""}
              currentCategories={[]}
              productAttribute={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
