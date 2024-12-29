/* eslint-disable @next/next/no-img-element */
import WhoWeAre from "@/components/home/WhoWeAre";
import Services from "@/components/home/Services";
import GetInTouch from "@/components/common/GetInTouch";
import Link from "next/link";
import ImageTextCard from "@/components/common/ImageTextCard";
import ProductsGrid from "@/components/common/ProductsGrid";

export default async function ServiceDetails({
  params,
}: {
  params: Promise<{
    id: any;
    slug: string;
  }>;
}) {
  const sentence = "Garden Maintenance";
  return (
    <div className="pt-[98px] w-screen mx-auto flex flex-col items-center">
      <div className="max-w-content max-auto pt-[40px]">
        <div className="">
          <div className="flex gap-3">
            {/* <div
              className="w-[490px] h-[575px]"
              style={{
                backgroundImage:
                  "url(https://gulfpalms.com/wp-content/uploads/2023/06/books-quotes-dahttps://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_106616339.jpg)",
                backgroundSize: "",
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
              }}
            ></div> */}
            <img
              className="max-w-[575px] h-[588px]"
              src="https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_106616339.jpg"
              alt=""
            />
            <div
              className="w-[490px] h-[588px] bg-black opacity-95 text-gray-300 grid place-content-center space-y-[20px] px-[30px]"
              style={{
                backgroundImage:
                  "url(https://gulfpalms.com/wp-content/uploads/2023/06/books-quotes-dark.svg)",
                backgroundSize: "",
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p>OUR PROFESSIONAL SERVICES</p>
              <p className="text-[38px] font-bold text-white">
                {sentence.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-primary">
                  {sentence.split(" ").slice(-1)}
                </span>
              </p>
              <p>
                Gulf palms provides a complete range of landscaping maintenance
                services to maintain the forever charm of your outdoor living
                spaces.
              </p>
              <Link
                href="tel:%20+965%206901%208041"
                className="underline text-white"
              >
                GET IN TOUCH
              </Link>
            </div>
            <div className="w-[322px] flex flex-col justify-between">
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/compressed-Untitled_1.2.1-430x764.jpg"
                alt="img2"
                className="w-full h-[280px]"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_667654081-768x512.jpg"
                alt="img3"
                className="w-full h-[280px]"
              />
            </div>
          </div>
          <div className="flex flex-col text-center py-[80px]">
            <div className="space-y-5">
              <p className="text-gray-600">OUR PROFESSIONAL SERVICES</p>
              <p className="text-[30px] font-bold">
                Creating A Project Plan For Your Garden
              </p>
            </div>
            <div className="max-h-[220px] flex items-center justify-center max-w-content overflow-hidden mt-10">
              <p className="p-10">
                Transform your dream designs for a cosy outdoors into reality
                with our customised design solutions. Whether you wish to
                install nature–inspired swimming pools, enchanting water
                features, picturesque plantings, or whatnot, our bespoke designs
                will sprinkle life in each of your outdoor elements. All our
                designs are sustainable, cost effective and resource efficient.
                They preserve nature, water, energy, environment and reduce the
                cost of maintenance significantly. They create value through
                significant economic, social and environmental benefits.
              </p>
              <img
                className="!w-1/2"
                src="https://gulfpalms.com/wp-content/uploads/2023/10/IMG_EE4609C5A18F-1.jpeg"
                alt="img"
              />
            </div>
          </div>
          <div className="py-[80px]">
            <ProductsGrid
              items={[
                {
                  id: 1,
                  col: 1,
                  content: (
                    <img
                      src="https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_626590571-1200x800.jpg"
                      alt="image"
                    />
                  ),
                  height: "100%",
                },
                {
                  id: 2,
                  col: 2,
                  content: (
                    <img
                      src="https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_590308763-1067x800.jpg"
                      alt="image"
                    />
                  ),
                  height: "110%",
                },
                {
                  id: 3,
                  col: 3,
                  content: (
                    <img
                      src="https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_567716494-1199x800.jpg"
                      alt="image"
                    />
                  ),
                  height: "100%",
                },
              ]}
            />
          </div>
        </div>
        <Services />
        <WhoWeAre />
      </div>
      <GetInTouch />
    </div>
  );
}
