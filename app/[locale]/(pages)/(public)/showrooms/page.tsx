import GetInTouch from "@/components/common/GetInTouch";
import ImageTextCard from "@/components/common/ImageTextCard";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";

const breadcrumbLinks = [
  { name: "Home", href: "/" },
  { name: "Showrooms", href: "/showrooms" },
];

type ServiceProps = {
  id: string;
  img: string;
  content: {
    subheading: string;
    title: string;
    details: string;
    url: string;
  };
}[];

const services: ServiceProps = [
  {
    id: "fe9a770",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    content: {
      subheading: "RAI",
      title: "MAIN BRANCH",
      details: "48 & 49 nurseries, Fourth Ring Road, Al-Rai",
      url: "https://maps.google.com/maps/dir//Gulf+Palms+Center+Shuwaikh+Industrial+Kuwait/@29.3146052,47.9475056,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3fcf9aee8dd72f25:0x13c1872301ebdf24",
    },
  },
  {
    id: "fe9a770",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    content: {
      subheading: "WAFRAH",
      title: "WAFRAH FARM SHOWROOM",
      details: "Al-Wafra, Road 200, block 10, Al-Mazraa Showroom",
      url: "https://maps.google.com/maps/dir//%D8%A7%D9%84%D9%86%D8%AE%D9%8A%D9%84+%D8%A7%D9%84%D9%86%D8%B3%D9%8A%D8%AC%D9%8A+%D8%A7%D9%84%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF+H3RJ%2B3R9+Unnamed+Road,+%D8%A7%D9%84%D9%88%D9%81%D8%B1%D8%A9%D8%8C+Al+Wafrah,+Kuwait%E2%80%AD/@28.590168,48.0821,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3fce8b4f2ed231f3:0x7e0d90065c197360",
    },
  },
  {
    id: "fe9a770",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    content: {
      subheading: "ABDALI",
      title: "ABDALI FARM SHOWROOM",
      details: "Al-Wafra, Road 200, block 10, Al-Mazraa Showroom",
      url: "https://maps.google.com/maps/dir//Gulf+Palms+Center+Shuwaikh+Industrial+Kuwait/@29.3146052,47.9475056,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3fcf9aee8dd72f25:0x13c1872301ebdf24",
    },
  },
  {
    id: "fe9a770",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    content: {
      subheading: "RAI",
      title: "MAIN BRANCH",
      details: "48 & 49 nurseries, Fourth Ring Road, Al-Rai",
      url: "https://maps.google.com/maps/dir//Gulf+Palms+Center+Shuwaikh+Industrial+Kuwait/@29.3146052,47.9475056,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3fcf9aee8dd72f25:0x13c1872301ebdf24",
    },
  },
  {
    id: "fe9a770",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    content: {
      subheading: "WAFRAH",
      title: "WAFRAH FARM SHOWROOM",
      details: "Al-Wafra, Road 200, block 10, Al-Mazraa Showroom",
      url: "https://maps.google.com/maps/dir//%D8%A7%D9%84%D9%86%D8%AE%D9%8A%D9%84+%D8%A7%D9%84%D9%86%D8%B3%D9%8A%D8%AC%D9%8A+%D8%A7%D9%84%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF+H3RJ%2B3R9+Unnamed+Road,+%D8%A7%D9%84%D9%88%D9%81%D8%B1%D8%A9%D8%8C+Al+Wafrah,+Kuwait%E2%80%AD/@28.590168,48.0821,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3fce8b4f2ed231f3:0x7e0d90065c197360",
    },
  },
  {
    id: "fe9a770",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    content: {
      subheading: "ABDALI",
      title: "ABDALI FARM SHOWROOM",
      details: "Al-Wafra, Road 200, block 10, Al-Mazraa Showroom",
      url: "https://maps.google.com/maps/dir//Gulf+Palms+Center+Shuwaikh+Industrial+Kuwait/@29.3146052,47.9475056,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3fcf9aee8dd72f25:0x13c1872301ebdf24",
    },
  },
];

export default function AllShowrooms() {
  return (
    <div className="pt-[98px] ">
      <div className="flex flex-col items-center py-[50px]">
        <h1 className="text-[68px] font-bold text-black">Showrooms</h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      {services.map((service, index) => (
        <div key={index} className="">
          <ImageTextCard
            leftContent={
              index % 2 === 0
                ? {
                    type: "text",
                    subheading: service.content.subheading,
                    headingColor: "text-primary",
                    headingSize: "text-[30px]",
                    heading: service.content.title,
                    subheadingColor: "text-primary",
                    subheadingSize: "text-[30px]",
                    subheadingWeight: "font-light",
                    bullets: [`Address : ${service.content.details}`],
                    textAlign: "center",
                    textSize: "text-[15px]",
                    textColor: "text-primary",
                    fontWeight: "font-[400]",
                    bgColor: "bg-white",
                    buttons: {
                      items: [
                        {
                          text: "CONTACT US",
                          textColor: "text-primary",
                          bgColor: "bg-white",
                          borderRadius: "rounded-none",
                          border: "1px solid",
                          borderColor: "primary",
                          href: "/tel:%20+965%206066%200387",
                        },
                        {
                          text: "OUR LOCATION",
                          textColor: "text-primary",
                          bgColor: "bg-white",
                          borderRadius: "rounded-none",
                          border: "1px solid",
                          borderColor: "primary",
                          href: service.content.url,
                        },
                      ],
                      align: "center",
                    },
                  }
                : {
                    type: "image",
                    src: service.img,
                    bgColor: "bg-white",
                  }
            }
            rightContent={
              index % 2 === 0
                ? {
                    type: "image",
                    src: service.img,
                    bgColor: "bg-white",
                  }
                : {
                    type: "text",
                    subheading: service.content.subheading,
                    headingColor: "text-primary",
                    headingSize: "text-[30px]",
                    heading: service.content.title,
                    subheadingColor: "text-primary",
                    subheadingSize: "text-[30px]",
                    subheadingWeight: "font-light",
                    bullets: [`Address : ${service.content.details}`],
                    textAlign: "center",
                    textSize: "text-[15px]",
                    textColor: "text-primary",
                    fontWeight: "font-[400]",
                    bgColor: "bg-white",
                    buttons: {
                      items: [
                        {
                          text: "CONTACT US",
                          textColor: "text-primary",
                          bgColor: "bg-white",
                          borderRadius: "rounded-none",
                          border: "1px solid",
                          borderColor: "primary",
                          href: "/tel:%20+965%206066%200387",
                        },
                        {
                          text: "OUR LOCATION",
                          textColor: "text-primary",
                          bgColor: "bg-white",
                          borderRadius: "rounded-none",
                          border: "1px solid",
                          borderColor: "primary",
                          href: service.content.url,
                        },
                      ],
                      align: "center",
                    },
                  }
            }
          />
        </div>
      ))}
      <GetInTouch />
    </div>
  );
}
