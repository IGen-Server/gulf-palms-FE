import GetInTouch from "@/components/common/GetInTouch";
import ImageTextCard from "@/components/common/ImageTextCard";

const services = [
  {
    id: "fe9a770",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    content: {
      title: "Palms Maintenance",
      details:
        "Gulf palms is the main grower and supplier of all the major varieties of date Palms in Kuwait. We have above 30 years of experience of growing and maintaining date palms and producing dates in all areas of Kuwait. It’s Gulf Palms who have the honour of winning “the Sheikh Khalifa Award” for adopting its best practices in growing and maintaining of date palms and producing of dates in Kuwait.",
      url: "http://localhost:3000/services/palms-maintenance/",
    },
  },
  {
    id: "fe9a771",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    content: {
      title: "Garden Maintenance",
      details:
        "Gulf palms provides a complete range of landscaping maintenance services to maintain the forever charm of your outdoor living spaces. We sign an annual contract for the overall maintenance of the aesthetics of your exterior spaces. Through regular maintenance and cleaning, our technicians strive to catch the problems before they go out of hand.",
      url: "http://localhost:3000/services/garden-maintenance/",
    },
  },
  {
    id: "fe9a772",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    content: {
      title: "Farm Development",
      details:
        "Our services provide numerous environmental social, emotional and physical benefits. We design, build and manage a diverse portfolio of landscapes, golf courses, resorts and gated communities. We grow and supply assets with a core service centered around water green and sustainability.",
      url: "http://localhost:3000/services/farm-development/",
    },
  },
  {
    id: "fe9a773",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    content: {
      title: "Designing & Landscaping",
      details:
        "Fall in love with the newfound functionality of your outdoors seamlessly with our bespoke hardscape additions in Kuwait. While working closely with you, our hardscape experts ensure to meet all your design expectations for an exquisite landscape design. We believe in creating durable structures that require minimal garden maintenance in our hardscape process.",
      url: "http://localhost:3000/services/designing-landscaping/",
    },
  },
  {
    id: "fe9a774",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    content: {
      title: "Project Execution",
      details:
        "Transform your dream designs for a cosy outdoors into reality with our customised design solutions. Whether you wish to install nature–inspired swimming pools, enchanting water features, picturesque plantings, or whatnot, our bespoke designs will sprinkle life in each of your outdoor elements. All our designs are sustainable, cost effective and resource efficient.",
      url: "http://localhost:3000/services/project-execution/",
    },
  },
  {
    id: "fe9a775",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    content: {
      title: "Irrigation System Installation",
      details:
        "We never stay out of the league, especially when it’s about following the latest technologies for incorporating state-of-the-art irrigation systems that can utilize water efficiently and effectively and that ensure the right amount of water at the right time. Being a pioneer landscaping company across the Kuwait, we use superior quality materials and technologies in our automated irrigation solutions.",
      url: "http://localhost:3000/services/irrigation-system-installation/",
    },
  },
  {
    id: "fe9a776",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    content: {
      title: "Indoor Plants Maintenance",
      details:
        "Our dedication to our clients is best illustrated in the skill-level, professionalism and zeal of our Plant Care Teams. With dedicated teams that specialize in interior and exterior plant maintenance for commercial offices, hotels and hospitality, retail, healthcare, education, government, private palaces and residential, we ensure that your space is cared for by people that know how. Each of our Plant Care Teams is supported by a supervisor, to ensure an open line of communication for all clients and make sure your expectations are exceeded.",
      url: "http://localhost:3000/services/indoor-plants-maintenance/",
    },
  },
  {
    id: "fe9a777",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    content: {
      title: "Consultation",
      details:
        "Our landscaping consulting service is excellent for the do-it-yourself homeowner that needs a little step in the right direction. The outcome of your consultation with Gulf palms Landscaping will be wonderful, rewarding, and affordable. We offer endless ideas of possibilities of redesigning, renovating and upgrading existing landscaped areas, solutions to Irrigation errors, plant selection, diseases, nutrient deficiencies, pruning, trimming and shaping of plants.",
      url: "http://localhost:3000/services/consultation/",
    },
  },
];

export default function AllServices() {
  return (
    <div className="pt-[98px] ">
      {services.map((service, index) => (
        <div key={service.id} className="">
          <ImageTextCard
            leftContent={
              index % 2 === 0
                ? {
                    type: "text",
                    subheading: "GULF PALMS",
                    headingColor: "text-black",
                    headingSize: "text-[30px]",
                    heading: service.content.title,
                    subheadingColor: "text-black",
                    subheadingSize: "text-[30px]",
                    subheadingWeight: "font-light",
                    bullets: [`${service.content.details}`],
                    textAlign: "center",
                    textSize: "text-[15px]",
                    textColor: "text-black/90",
                    fontWeight: "font-[400]",
                    bgColor: "bg-white",
                    buttons: {
                      items: [
                        {
                          text: "GET IN TOUCH",
                          bgColor: "bg-primary",
                          borderRadius: "rounded-none",
                          href: "/tel:%20+965%206066%200387",
                        },
                        {
                          text: "READ MORE",
                          bgColor: "bg-white",
                          textColor: "text-black",
                          href: service.content.url,
                          border: "1px solid lightgray",
                          borderRadius: "none",
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
                    subheading: "GULF PALMS",
                    headingColor: "text-black",
                    headingSize: "text-[30px]",
                    heading: service.content.title,
                    subheadingColor: "text-black",
                    subheadingSize: "text-[30px]",
                    subheadingWeight: "font-light",
                    bullets: [`${service.content.details}`],
                    textAlign: "center",
                    textSize: "text-[15px]",
                    textColor: "text-black/90",
                    fontWeight: "font-[400]",
                    bgColor: "bg-white",
                    buttons: {
                      items: [
                        {
                          text: "GET IN TOUCH",
                          bgColor: "bg-primary",
                          borderRadius: "rounded-none",
                          href: "/tel:%20+965%206066%200387",
                        },
                        {
                          text: "READ MORE",
                          bgColor: "bg-white",
                          textColor: "text-black",
                          href: service.content.url,
                          border: "1px solid lightgray",
                          borderRadius: "none",
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
