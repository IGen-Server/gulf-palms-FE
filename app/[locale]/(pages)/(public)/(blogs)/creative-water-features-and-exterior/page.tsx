import BlogStructure from "@/components/common/BlogStructure";
import BlogPostHeading from "../exploring-atlantas-modern-homes/BlogPostHeading";
import { decorationPosts } from "@/data/blogsData";

const page = () => {
  const breadcrumbLinks = [
    { name: "Home", arabicName: "Home", href: "/" },
    {
      name: "Decoration",
      arabicName: "Decoration",
      href: "",
    },
  ];

  return (
    <BlogStructure breadcrumbLinks={breadcrumbLinks}>
      <BlogPostHeading post={decorationPosts[1]} />
      <div className="flex flex-col gap-6">
        <p className="text-sm text-lightGray leading-[1.375rem]">
          Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis
          varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt
          per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc
          torquent euismod adipiscing adipiscing dui gravida justo. Ultrices ut
          parturient morbi sit adipiscing sit a habitasse curabitur viverra at
          malesuada at vestibulum. Leo duis lacinia placerat parturient montes
          vulputate cubilia posuere parturient inceptos massa euismod curabitur
          dis dignissim vestibulum quam a urna.
        </p>
        <p className="text-sm text-lightGray leading-[1.375rem]">
          Netus pretium tellus nulla commodo massa adipiscing in elementum magna
          congue condimentum placerat habitasse potenti ac orci a quisque
          tristique elementum et viverra at condimentum scelerisque eu mi. Elit
          praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus
          faucibus quam ac aliquet nibh a condimentum suspendisse hac integer
          leo erat aliquam ut himenaeos. Consectetur neque odio diam turpis
          dictum ullamcorper dis felis nec et montes non ad a quam pretium
          convallis leo condimentum congue scelerisque suspendisse elementum
          nam. Vestibulum tempor lobortis semper cras orci parturient a
          parturient tincidunt erat arcu sodales sed nascetur et mi bibendum
          condimentum suspendisse sodales nostra fermentum.
        </p>
      </div>
      <div className="">
        <div className="flex flex-col gap-2 w-full">
          {/* Heading */}
          <h2 className="font-semibold text-4xl text-[#242424] text-center uppercase mr-4 whitespace-nowrap">
            Accessories
          </h2>

          {/* Line */}
          <div className="flex flex-1 justify-center h-[2px] bg-gray-200 relative">
            <div className="h-full bg-orange-400 w-max">
              <p className="h-[2px] font-semibold text-4xl text-center uppercase opacity-0">
                Accessories
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlogStructure>
  );
};
export default page;
