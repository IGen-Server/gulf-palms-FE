import BlogStructure from "@/components/common/BlogStructure";
import BlogPostHeading from "../exploring-atlantas-modern-homes/BlogPostHeading";
import { designPosts, furniturePosts } from "@/data/blogsData";
import Image from "next/image";

const page = () => {
  const breadcrumbLinks = [
    { name: "Home", arabicName: "Home", href: "/" },
    {
      name: "Furniture",
      arabicName: "Furniture",
      href: "",
    },
  ];
  const tags = ["Furniture", "Sofa", "Style"];
  const images = [
    "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-2-400x300.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-3-400x300.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-5-400x300.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-6-400x300.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-8-400x300.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-9-400x300.jpg",
  ];

  return (
    <BlogStructure
      breadcrumbLinks={breadcrumbLinks}
      tags={tags}
      comment
      postTitle={furniturePosts[1].title}
      newerBlog={designPosts[1]}
    >
      <BlogPostHeading post={furniturePosts[1]} slug="Furniture" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <p className="text-sm text-lightGray leading-[1.375rem]">
            A sed a risusat luctus esta anibh rhoncus hendrerit blandit nam
            rutrum sitmiad hac. Cras a vestibulum a varius adipiscing ut
            dignissim ullamcorper libero fermentum dis aliquet tellus mollis et
            tristique sodales. Suspendisse vel mi etiam ullamcorper parturient
            varius parturient eu eget pulvinar odio dapibus nisl ut luctus
            suscipit per vel aptent fames venenatis leo ac ullamcorper integer
            mus condimentum rutrum. Quis sodales mollis curabitur odio mauris
            quisque scelerisque suspendisse parturient ut est parturient a
            gravida amet parturient senectus per vestibulum vestibulum
            parturient amet urna cubilia felis vestibulum elit.
          </p>
          <p className="text-sm text-lightGray italic leading-[1.375rem]">
            Et senectus adipiscing vestibulum adipiscing sem torquent parturient
            aliquam aliquet curabitur ullamcorper a parturient cubilia
            suspendisse curabitur quis ridiculus ut maecenas a cum porttitor
            blandit consectetur egestas.Sem etiam vestibulum a suspendisse sit
            sociosqu massa urna elit. Bibendum egestas elit fames adipiscing
            scelerisque a est amet a nisi volutpat pharetra sed a eget nunc
            sapien per.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="font-semibold text-2xl text-[#242424]">
              Felis scelerisque nunc
            </h2>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Ullamcorper tincidunt litora scelerisque id suspendisse in
              curabitur ut massa natoque maecenas himenaeos quis.
            </p>
            <h2 className="font-semibold text-[1.375rem] text-[#242424] leading-[1.9375rem]">
              EVENT INFO
            </h2>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              “Fringilla In Dui” @Vestibulum Viverra <br /> Via Suspendisse 24 –
              Metro: Praesent Vehicula <br /> 8 – 12 April / h 12 – 18
            </p>
          </div>
          <Image
            src="https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-7-700x600.jpg"
            alt="Blog post image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full lg:w-[323px] h-[276px]"
          />
        </div>
        <p className="text-sm text-lightGray leading-[1.375rem]">
          Diam a aliquet a est nam lacus pulvinar rutrum tempus mus lacus odio
          id fames sed facilisi at primis adipiscing parturient ad varius sit
          tellus rutrum a nisi. Aenean adipiscing sit scelerisque dictum
          ullamcorper fames ac inceptos est risus auctor ac senectus volutpat
          viverra ullamcorper a nec suscipit posuere sit dis. Enim elit duis.
        </p>
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-2xl text-[#242424]">
            Scelerisque ullamcorper non
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="Blog post image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-[215px] object-cover"
              />
            ))}
          </div>
        </div>
        <p className="text-sm text-lightGray leading-[1.375rem]">
          Maecenas hac vestibulum a hac cras nam a ullam corper integer
          adipiscing aliquam ornare sed ullamcorper placerat cras cras fringilla
          condimentum quis potenti sodales primis fames accumsan a quis justo.
          Condimentum a a viverra suspendisse libero vestibulum amet suspendisse
          a tincidunt curabitur himenaeos elementum odio placerat ultricies.
          Urna risus adipiscing curae condimentum blandit aliquet hac potenti
          mus.
        </p>
        <p className="text-[.9375rem] leading-[1.5625rem] text-lightGray border-l-[2px] border-l-primary pl-5 pt-1">
          A a sit a sociis dictumst velit vestibulum a id vestibulum porta non
          parturient vestibulum magna ornare scelerisque parturient in
          parturient. Nulla condimentum dolor adipiscing blandit himenaeos
          interdum hac ultrices augue a lobortis integer lacus hendrerit
          bibendum scelerisque duis nostra. Suspendisse tempor adipiscing a
          vestibulum velit iaculis.
        </p>
      </div>
    </BlogStructure>
  );
};
export default page;
