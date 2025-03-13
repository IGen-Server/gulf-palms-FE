import BlogStructure from "@/components/common/BlogStructure";
import BlogPostHeading from "../exploring-atlantas-modern-homes/BlogPostHeading";
import { designPosts } from "@/data/blogsData";
import CustomCarouselCopy from "@/components/common/CustomCarouselCopy";
import Image from "next/image";

const page = () => {
  const breadcrumbLinks = [
    { name: "Home", arabicName: "Home", href: "/" },
    {
      name: "Design trends",
      arabicName: "Design trends",
      href: "",
    },
  ];
  const tags = ["Guide", "Style", "Trends"];

  const images = [
    {
      imageSrc:
        "https://gulfpalms.com/wp-content/uploads/2021/08/post-3-gallery-1-min-450x700.jpg",
    },
    {
      imageSrc:
        "https://gulfpalms.com/wp-content/uploads/2021/08/post-3-gallery-2-min-450x700.jpg",
    },
    {
      imageSrc:
        "https://gulfpalms.com/wp-content/uploads/2021/08/post-3-gallery-3-min-450x700.jpg",
    },
    {
      imageSrc:
        "https://gulfpalms.com/wp-content/uploads/2021/08/post-3-gallery-4-min-450x700.jpg",
    },
  ];

  const testimonials = [
    {
      image:
        "https://gulfpalms.com/wp-content/uploads/2021/08/post-3-testimonials-1-min.jpg",
      name: "Risus Parturient",
      title: "Interior Stylist",
      content:
        '"Ante iaculis feugiat dui magna mi scelerisque euismod nascetur nullam hac consectetur class metus feugiat ullamcorper nisl eu justo in a scelerisque. Feugiat sociis platea felis sed lacus maecenas consectetur elementum vestibulum ad aenean nostra sapien dictumst condimentum lectus. A pretium orci vestibulum aenean semper et congue sapien erat a cum adipiscing sagittis."',
    },
    {
      image:
        "https://gulfpalms.com/wp-content/uploads/2021/08/post-3-testimonials-1-min.jpg",
      name: "Risus Parturient",
      title: "Interior Stylist",
      content:
        '"Ante iaculis feugiat dui magna mi scelerisque euismod nascetur nullam hac consectetur class metus feugiat ullamcorper nisl eu justo in a scelerisque. Feugiat sociis platea felis sed lacus maecenas consectetur elementum vestibulum ad aenean nostra sapien dictumst condimentum lectus. A pretium orci vestibulum aenean semper et congue sapien erat a cum adipiscing sagittis."',
    },
    {
      image:
        "https://gulfpalms.com/wp-content/uploads/2021/08/post-3-testimonials-1-min.jpg",
      name: "Risus Parturient",
      title: "Interior Stylist",
      content:
        '"Ante iaculis feugiat dui magna mi scelerisque euismod nascetur nullam hac consectetur class metus feugiat ullamcorper nisl eu justo in a scelerisque. Feugiat sociis platea felis sed lacus maecenas consectetur elementum vestibulum ad aenean nostra sapien dictumst condimentum lectus. A pretium orci vestibulum aenean semper et congue sapien erat a cum adipiscing sagittis."',
    },
  ];

  const TestimonialCard = ({
    testimonial,
  }: {
    testimonial: {
      image: string;
      name: string;
      title: string;
      content: string;
    };
  }) => {
    return (
      <div className="flex items-start gap-7 px-3 py-1">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={0}
          height={0}
          sizes="100vw"
          className="w-[6.25rem] h-[6.25rem] rounded-full"
        />
        <div className="flex flex-col items-start gap-7">
          <p className="text-sm text-lightGray italic leading-[1.375rem]">
            {testimonial.content}
          </p>
          <p className="font-semibold text-sm">
            {testimonial.name}{" "}
            <span className="font-normal"> - {testimonial.title}</span>
          </p>
        </div>
      </div>
    );
  };

  const slidesData = testimonials.map((testimonial) => ({
    component: <TestimonialCard testimonial={testimonial} />,
  }));

  return (
    <BlogStructure breadcrumbLinks={breadcrumbLinks} tags={tags}>
      <BlogPostHeading post={designPosts[1]} />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Parturient in potenti id rutrum duis torquent parturient sceler
            isque sit vestibulum a posuere scelerisque viverra urna. Egestas
            tristique vestibulum vestibulum ante vulputate penati bus a nibh dis
            parturient cum a adipiscing nam condimentum quisque enim fames risus
            eget. Consectetur duis tempus massa elit himenaeos duis iaculis
            parturient nam tempor neque nisl parturient vivamus primis sociosqu
            ac donec nisi a adipiscing senectus.
          </p>
          <p className="text-sm text-lightGray leading-[1.375rem] italic">
            Suspendisse urna congue blandit per condimentum viverra torquent
            sapien aliquet ultricies id interdum natoque ullamcorper parturient.
            Egestas sociosqu adipiscing dictumst viverra lectus cum primis
            maecenas a a dui justo ac dignissim ac. Taciti suspendisse mi quis
            parturient suscipit metus habitant et cum elementum montes
            vestibulum quam vivamus a habitant in hendrerit velit malesuada
            sagittis ridiculus.
          </p>
        </div>
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="font-semibold text-[1.375rem] text-[#242424] leading-[1.9375rem]">
            Nulla auctor faucibus
          </h2>
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Ante iaculis feugiat dui magna mi scelerisque euismod nascetur
            nullam hac consectetur class metus feugiat ullamcorper nisl eu justo
            in a scelerisque. Feugiat sociis platea felis sed lacus maecenas
            consectetur elementum vestibulum ad aenean nostra sapien dictumst
            condimentum lectus. A pretium orci vestibulum aenean semper et
            congue sapien erat a cum adipiscing sagittis in sodales. Fames at
            ullamcorper mus adipiscing consectetur fusce lectus vestibulum
            vivamus dictumst vivamus parturient nisl a aenean ornare consectetur
            dolor arcu a a scelerisque ad. In a dis vestibulum class a justo
            condimentum ad fermentum nostra lectus fames porta.
          </p>
        </div>
        <div className="w-full lg:h-[418px]">
          <CustomCarouselCopy
            dots={false}
            autoPlay={true}
            slidesToShow={3}
            slidesToScroll={3}
            withNavigation={true}
            data={images}
            MobileSlidesNumber={1}
          />
        </div>
        <p className="text-sm text-lightGray leading-[1.375rem] mt-24">
          Ante iaculis feugiat dui magna mi scelerisque euismod nascetur nullam
          hac consectetur class metus feugiat ullamcorper nisl eu justo in a
          scelerisque. Feugiat sociis platea felis sed lacus maecenas
          consectetur elementum vestibulum ad aenean nostra sapien dictumst
          condimentum lectus. A pretium orci vestibulum aenean semper et congue
          sapien erat a cum adipiscing sagittis in sodales. Fames at ullamcorper
          mus adipiscing consectetur fusce lectus vestibulum vivamus dictumst
          vivamus parturient nisl a aenean ornare consectetur dolor arcu a a
          scelerisque ad. In a dis vestibulum class a justo condimentum ad
          fermentum nostra lectus fames porta.
        </p>
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="font-semibold text-[1.375rem] text-[#242424] leading-[1.9375rem]">
            Parturient volutpat fames
          </h2>
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Ante iaculis feugiat dui magna mi scelerisque euismod nascetur
            nullam hac consectetur class metus feugiat ullamcorper nisl eu justo
            in a scelerisque. Feugiat sociis platea felis sed lacus maecenas
            consectetur elementum vestibulum ad aenean nostra sapien dictumst
            condimentum lectus. A pretium orci vestibulum aenean semper et
            congue sapien erat a cum adipiscing sagittis in sodales. Fames at
            ullamcorper mus adipiscing consectetur fusce lectus vestibulum
            vivamus dictumst vivamus parturient nisl a aenean ornare consectetur
            dolor arcu a a scelerisque ad. In a dis vestibulum class a justo
            condimentum ad fermentum nostra lectus fames porta.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-7">
          <div className="flex-1 flex flex-col gap-6">
            <Image
              src="https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-9-700x700.jpg"
              alt="Blog post image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[413px]"
            />
            <h2 className="font-semibold text-[1.375rem] text-[#242424] text-center leading-[1.9375rem]">
              Austen Marshall – Semper Suspen
            </h2>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Ante iaculis feugiat dui magna mi scelerisque euismod nascetur
              nullam hac consectetur class metus feugiat ullamcorper nisl eu
              justo in a scelerisque. Feugiat sociis platea felis sed lacus
              maecenas consectetur elementum vestibulum ad aenean nostra sapien
              dictumst condimentum lectus. A pretium orci vestibulum aenean
              semper et congue sapien erat a cum adipiscing sagittis.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <Image
              src="https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-8-700x700.jpg"
              alt="Blog post image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[413px]"
            />
            <h2 className="font-semibold text-[1.375rem] text-[#242424] text-center leading-[1.9375rem]">
              Jarred Monte – Aliquet Parturient
            </h2>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Ante iaculis feugiat dui magna mi scelerisque euismod nascetur
              nullam hac consectetur class metus feugiat ullamcorper nisl eu
              justo in a scelerisque. Feugiat sociis platea felis sed lacus
              maecenas consectetur elementum vestibulum ad aenean nostra sapien
              dictumst condimentum lectus. A pretium orci vestibulum aenean
              semper et congue sapien erat a cum adipiscing sagittis.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-7">
          <div className="flex-1 flex flex-col gap-6">
            <Image
              src="https://gulfpalms.com/wp-content/uploads/2021/07/wd-blog-4-700x700.jpg"
              alt="Blog post image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[413px]"
            />
            <h2 className="font-semibold text-[1.375rem] text-[#242424] text-center leading-[1.9375rem]">
              Austen Marshall – Semper Suspen
            </h2>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Ante iaculis feugiat dui magna mi scelerisque euismod nascetur
              nullam hac consectetur class metus feugiat ullamcorper nisl eu
              justo in a scelerisque. Feugiat sociis platea felis sed lacus
              maecenas consectetur elementum vestibulum ad aenean nostra sapien
              dictumst condimentum lectus. A pretium orci vestibulum aenean
              semper et congue sapien erat a cum adipiscing sagittis.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <Image
              src="https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-5-700x700.jpg"
              alt="Blog post image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[413px]"
            />
            <h2 className="font-semibold text-[1.375rem] text-[#242424] text-center leading-[1.9375rem]">
              Jarred Monte – Aliquet Parturient
            </h2>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Ante iaculis feugiat dui magna mi scelerisque euismod nascetur
              nullam hac consectetur class metus feugiat ullamcorper nisl eu
              justo in a scelerisque. Feugiat sociis platea felis sed lacus
              maecenas consectetur elementum vestibulum ad aenean nostra sapien
              dictumst condimentum lectus. A pretium orci vestibulum aenean
              semper et congue sapien erat a cum adipiscing sagittis.
            </p>
          </div>
        </div>
        <div className="">
          <CustomCarouselCopy
            dots={false}
            autoPlay={true}
            slidesToShow={1}
            slidesToScroll={1}
            withNavigation={true}
            data={slidesData}
            MobileSlidesNumber={1}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-[1.375rem] text-[#242424] leading-[1.9375rem]">
            Congue dis suspendisse
          </h2>
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Ante iaculis feugiat dui magna mi scelerisque euismod nascetur
            nullam hac consectetur class metus feugiat ullamcorper nisl eu justo
            in a scelerisque. Feugiat sociis platea felis sed lacus maecenas
            consectetur elementum vestibulum ad aenean nostra sapien dictumst
            condimentum lectus. A pretium orci vestibulum aenean semper et
            congue sapien erat a cum adipiscing sagittis in sodales. Fames at
            ullamcorper mus adipiscing consectetur fusce lectus vestibulum
            vivamus dictumst vivamus parturient nisl a aenean ornare consectetur
            dolor arcu a a scelerisque ad. In a dis vestibulum class a justo
            condimentum ad fermentum nostra lectus fames porta.
          </p>
          <Image
            src="https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-9.jpg"
            alt="Blog post image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Ante iaculis feugiat dui magna mi scelerisque euismod nascetur
            nullam hac consectetur class metus feugiat ullamcorper nisl eu justo
            in a scelerisque. Feugiat sociis platea felis sed lacus maecenas
            consectetur elementum vestibulum ad aenean nostra sapien dictumst
            condimentum lectus. A pretium orci vestibulum aenean semper et
            congue sapien erat a cum adipiscing sagittis in sodales. Fames at
            ullamcorper mus adipiscing consectetur fusce lectus vestibulum
            vivamus dictumst vivamus parturient nisl a aenean ornare consectetur
            dolor arcu a a scelerisque ad. In a dis vestibulum class a justo
            condimentum ad fermentum nostra lectus fames porta.
          </p>
        </div>
      </div>
    </BlogStructure>
  );
};
export default page;
