import CustomCarousel from "@/components/common/CustomCarousel";
import GetInTouch from "@/components/common/GetInTouch";
import ImageTextCard from "@/components/common/ImageTextCard";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="space-y-[50px]">
      <section className=" bg-gray-100">
        <div className="flex max-w-[1140px] mx-auto py-[50px] justify-between">
          <div className="p-[40px] space-y-[20px]">
            <p className="text-sm text-primary">SOME WORDS ABOUT US</p>
            <p className="text-black text-xl font-bold">
              Providing Outstanding Agricultural Products, Services and
              Solutions
            </p>
          </div>
          <div className="p-[40px] space-y-[20px]">
            <p className="text-black text-lg font-bold">We love what we do</p>
            <p className="text-gray-700 text-sm pb-4">
              Provide the best fruitful trees from palms, sidr and fruits with
              species guarantee
            </p>
            <Link
              href={"/shop"}
              className="uppercase text-sm text-gray-600 border-b-4 border-primary "
            >
              Shop Now
            </Link>
          </div>
          <div className="p-[40px] space-y-[20px]">
            <p className="text-black text-lg font-bold">Our working process</p>
            <p className="text-gray-700 text-sm pb-4">
              Our Team are constantly working to keep the lead in the Kuwaiti
              market through establishing our vision and missions
            </p>
            <Link
              href={"/shop"}
              className="uppercase text-sm text-gray-600 border-b-4 border-primary "
            >
              READ MORE
            </Link>
          </div>
        </div>
      </section>

      <ImageTextCard
        leftContent={{
          type: "image",
          src: "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01281-700x1051.jpg",
          bgColor: "bg-white",
        }}
        rightContent={{
          type: "text",
          heading: "ABOUT US",
          headingColor: "text-black",
          headingSize: "text-[30px]",
          headingWeight: "font-bold",
          subheading: "Our Story",
          subheadingSize: "text-[18px]",
          subheadingWeight: "font-semibold",
          bullets: [
            "For more than a hundred years, our ties with the agricultural sector in Kuwait has been solid ever since Mr.Ibraheem Almodaf planted wheat in Failaka and Adiliya. He also planted palm trees in his lands in Basra, Iraq with a noble goal of providing food security. After Mr.Ibraheem passed away his son Jasem took over the work of his father’s land in Basra and continued for a few decades. And after Mr.Jasem passed away his sons continues the path by establishing Gulf Palm Company as a family business in the year 1991. With the experience gained from more than 3 decades in the business, today Gulf Palms is considered one of the biggest names in Kuwait for producing and importing high quality plants.following the establishment in 1991 we started the production and sale of palm trees of multiple species. Some of them were rare such as Om Aldhen, Hasawi, Bream, Fahl Alghanami. Our guarantee for high quality palms every time we make a sale earned us the valuable trust of our clients and after a short time Gulf Palm became the exclusive representative in Kuwait and Saudi Arabia for the French company Marioneh for palm production and sale.Our company has extended the range of specialties to include production and sale of Sedir and fruit trees while keeping our trademark guarantee for the quality of our production. Through the years we kept expanding the range of production and imports of all agricultural needs as well as establishing a specialized department for designing and implementing Agricultural projects and garden maintenance.",
          ],
          textSize: "text-[16px]",
          textColor: "text-gray-800",
          fontWeight: "font-normal",
          bgColor: "bg-white",
        }}
      />

      <ImageTextCard
        leftContent={{
          type: "text",
          heading: "Who We Are",
          headingColor: "text-white",
          bullets: [
            "Our team consists of produce experts, agricultural engineers and administrative personnel who are constantly working to keep the lead in the Kuwaiti market through establishing our vision and missions and keeping our high-quality service to our clients.",
            "Gulf Palms works with (1M SQM) of farmlands plus 5 showrooms spread throughout Kuwait’s provenances, and one of them is holding the record for the biggest showroom in Kuwait located in Wafra.",
          ],
          textSize: "text-[15px]",
          textColor: "text-white",
          fontWeight: "font-[400]",
          bgColor: "bg-primary",
        }}
        rightContent={{
          type: "image",
          src: "https://gulfpalms.com/wp-content/uploads/2023/10/Screenshot_399.png",
          bgColor: "bg-white",
        }}
      />
      <ImageTextCard
        leftContent={{
          type: "text",
          heading: "Our Vision",
          bullets: [
            "To lead in the production and importing of all high-quality agricultural products in Kuwait and GCC countries.",
            "To be a trustworthy source for agricultural knowledge in the Arabian Peninsula.",
            "To have a significant role in forestation and agricultural support in Kuwait.",
            "To provide food security in Kuwait through the agriculture and production of palm trees, dates, and all farmer needs.",
          ],
          bgColor: "bg-white",
          textColor: "text-seconday",
          textSize: "text-[15px]",
          fontWeight: "font-[400]",
        }}
        rightContent={{
          type: "text",
          heading: "Our Mission",
          bullets: [
            "Providing outstanding agricultural products, services, and solutions for our clients.",
            "Improving local agricultural produce in cooperation with specialized research institutions.",
            "Spreading agricultural awareness and knowledge.",
            "Supporting local farmers.",
          ],
          bgColor: "bg-white",
          textColor: "text-seconday",
          textSize: "text-[15px]",
          fontWeight: "font-[400]",
        }}
      />
      <ImageTextCard
        leftContent={{
          type: "text",
          heading: "Our Services",
          headingColor: "text-white",
          bullets: [
            "Provide the best fruitful trees from palms, sidr and fruits with species guarantee.",
            "Provide a wide collection of ornamental indoor and outdoor plants.",
            "Provide all agricultural needs including fertilizers, plant nutrition, pesticides, tools, seeds, and soil.",
            "Provide agricultural services from garden and farm designs to establishing and maintenance.",
          ],
          textSize: "text-[15px]",
          textColor: "text-white",
          fontWeight: "font-[400]",
          bgColor: "bg-primary",
        }}
        rightContent={{
          type: "image",
          src: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men-1.jpg",
          bgColor: "bg-white",
        }}
      />

      <div className="w-[1140px]  mx-auto space-y-4">
        <div className="space-y-4 text-center">
          <p className="text-primary text-sm ">WORKING WITH THE BEST</p>
          <p className="text-balck font-bold text-[30px] ">Our Clients</p>
          <p className="text-gray-600 text-sm ">
            Gulf Palms caters to a wide scope of clients ranging from
            Governmental, Commercial, Industrial to Residential. Our experienced
            team provides customized solutions from design to execution based on
            our clients’ needs while keeping in mind the agricultural
            environment to ensure sustainable green spaces.
          </p>
        </div>
        <CustomCarousel
          withNavigation={true}
          imageDimensions={{
            width: "400px",
            height: "200px",
            padding: "16px",
          }}
          basisNumber={{
            default: 4,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 5,
            "2xl": 6,
          }}
          data={[
            {
              imageSrc:
                "https://gulfpalms.com/wp-content/uploads/2023/10/yiaco.jpg",
              content: "Yiaco",
            },
            {
              imageSrc:
                "https://gulfpalms.com/wp-content/uploads/2023/10/ambascia.jpg",
              content: "Ambascia",
            },
            {
              imageSrc:
                "https://gulfpalms.com/wp-content/uploads/2023/10/alarjan.jpg",
              content: "Alarjan",
            },
            {
              imageSrc:
                "https://gulfpalms.com/wp-content/uploads/2023/10/alarabiya.jpg",
              content: "Alarabiya",
            },
            {
              imageSrc:
                "https://gulfpalms.com/wp-content/uploads/2023/10/ajal-group.jpg",
              content: "Ajal Group",
            },
            {
              imageSrc:
                "https://gulfpalms.com/wp-content/uploads/2023/10/action-real-estate.jpg",
              content: "Action Real Estate",
            },
            {
              imageSrc:
                "https://gulfpalms.com/wp-content/uploads/2023/10/abdulaziz.jpg",
              content: "Abdulaziz",
            },
          ]}
        />
      </div>
      <GetInTouch />
    </div>
  );
}
