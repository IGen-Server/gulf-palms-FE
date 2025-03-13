import BlogStructure from "@/components/common/BlogStructure";
import BlogPostHeading from "../exploring-atlantas-modern-homes/BlogPostHeading";
import { furniturePosts, inspirationData } from "@/data/blogsData";
import Image from "next/image";

const page = () => {
  const breadcrumbLinks = [
    { name: "Home", arabicName: "Home", href: "/" },
    {
      name: "Inspiration",
      arabicName: "Inspiration",
      href: "",
    },
  ];
  const tags = ["Chair", "Inspiration", "News"];

  const images_5 = [
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-1.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-2.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-3.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-4.jpg",
  ];
  const images_4 = [
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-5.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-6.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-7.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-8.jpg",
  ];

  const images_3 = [
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-9.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-10.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-11.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-12.jpg",
  ];

  const images_2 = [
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-13.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-14.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-15.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-16.jpg",
  ];

  const images_1 = [
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-17.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-18.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-19.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-20.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-21.jpg",
    "https://gulfpalms.com/wp-content/uploads/2021/10/post-example-2-image-22.jpg",
  ];

  return (
    <BlogStructure breadcrumbLinks={breadcrumbLinks} tags={tags}>
      <BlogPostHeading post={inspirationData[1]} slug="Inspiration" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <p className="text-sm text-lightGray leading-[1.375rem]">
            A taciti cras scelerisque scelerisque gravida natoque nulla
            vestibulum turpis primis adipiscing faucibus scelerisque adipiscing
            aliquet pretium. Et iaculis mi velit tincidunt vestibulum a duis
            tempor non magna ultrices porta malesuada ullamcorper scelerisque
            parturient himenaeos iaculis sit. Scelerisque sociosqu ullamcorper
            urna nisl mollis vestibulum pretium commodo inceptos.
          </p>
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Ac ullamcorper a ultrices a a urna ac commodo nam condimentum
            parturient. Libero suspendisse facilisis parturient elementum
            curabitur. Erat a per dis aliquet ultricies curabitur nostra
            suspendisse nec adipiscing donec vestibulum a parturient a ac ut non
            adipiscing penatibus nec erat. A at nec rutrum nam molestie
            suspendisse scelerisque platea a ut commodo volutpat ullamcorper.
          </p>
        </div>
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="font-semibold text-[1.375rem] text-[#242424] leading-[1.9375rem]">
            <span className="text-primary">5. </span>Eva Solo: Danish Furnishing
            Accessories
          </h2>
          <div className="w-full h-[1px] bg-lightGray/30 mb-9" />

          <p className="text-sm text-lightGray leading-[1.375rem]">
            Purus lobortis senectus faucibus imperdiet rutrum porttitor
            tincidunt laoreet parturient consectetur tortor ad adipiscing id a
            duis hendrerit diam. A at nec rutrum nam molestie suspendisse
            scelerisque platea a ut commodo volutpat ullamcorper penatibus dis
            quis felis justo porta montes nam a vestibulum tristique parturient
            parturient eget tincidunt. Semper dui.
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {images_5.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="Blog post image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full lg:w-[151px] h-auto lg:h-[151px]"
                />
              ))}
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm text-lightGray leading-[1.375rem]">
                Purus lobortis senectus faucibus imperdiet rutrum porttitor
                tincidunt laoreet parturient consectetur tortor ad adipiscing id
                a duis hendrerit diam. A at nec rutrum nam molestie suspendisse
                scelerisque platea a ut commodo volutpat ullamcorper penatibus
                dis quis felis justo porta montes nam a vestibulum tristique
                parturient parturient eget tincidunt.Semper dui.
              </p>
              <p className="text-[.9375rem] leading-[1.5625rem] text-lightGray border-l-[2px] border-l-primary pl-5 pt-1">
                Scelerisque leo fusce dui parturient ad a penatibus mauris
                adipiscing tempus vestibulum imperdiet gravida magnis a nec
                penatibus augue ullamcorper quis sem a luctus leo eros ornare.
              </p>
              <p className="text-sm text-lightGray leading-[1.375rem]">
                Cum scelerisque montes conubia vivamus volutpat consectetur
                euismod ullamcorper netus quis dui vestibulum hac lorem
                parturient a massa parturient cubilia cubilia mauris elementum.
                Condimentum condimentum hac egestas a dictumst potenti.
              </p>
            </div>
          </div>
        </div>
        <h2 className="font-semibold text-[1.375rem] text-[#242424] leading-[1.9375rem]">
          <span className="text-primary">4. </span>Magisso Finnish Design
          Movement
        </h2>
        <div className="w-full h-[1px] bg-lightGray/30 mb-9" />

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-6">
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Purus lobortis senectus faucibus imperdiet rutrum porttitor
              tincidunt laoreet parturient consectetur tortor ad adipiscing id a
              duis hendrerit diam. A at nec rutrum nam molestie suspendisse
              scelerisque platea a ut commodo volutpat ullamcorper penatibus dis
              quis felis justo porta montes nam a vestibulum tristique
              parturient parturient eget tincidunt. Semper dui.
            </p>

            <p className="text-sm text-lightGray leading-[1.375rem]">
              Cum scelerisque montes conubia vivamus volutpat consectetur
              euismod ullamcorper netus quis dui vestibulum hac lorem parturient
              a massa parturient cubilia cubilia mauris elementum. Condimentum
              condimentum hac egestas a dictumst potenti.
            </p>

            <p className="text-sm text-lightGray leading-[1.375rem] italic">
              Scelerisque leo fusce dui parturient ad a penatibus mauris
              adipiscing tempus vestibulum imperdiet gravida magnis a nec
              penatibus augue ullamcorper quis sem a luctus leo eros ornare
              cubilia mauris elementum imperdiet tincidunt.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {images_4.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="Blog post image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full lg:w-[151px] h-auto lg:h-[151px]"
              />
            ))}
          </div>
        </div>
        <p className="text-sm text-lightGray leading-[1.375rem]">
          Purus lobortis senectus faucibus imperdiet rutrum porttitor tincidunt
          laoreet parturient consectetur tortor ad adipiscing id a duis
          hendrerit diam. A at nec rutrum nam molestie suspendisse scelerisque
          platea a ut commodo volutpat ullamcorper penatibus dis quis felis
          justo porta montes nam a vestibulum tristique parturient parturient
          eget tincidunt. Semper dui.
        </p>
        <div className="flexz flex-col gap-6">
          <h2 className="font-semibold text-[1.375rem] text-[#242424] leading-[1.9375rem]">
            <span className="text-primary">3. </span>Röshults Svenska Hantverk
          </h2>
          <div className="w-full h-[1px] bg-lightGray/30 mb-9" />

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {images_3.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="Blog post image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[151px] h-[151px]"
                />
              ))}
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm text-lightGray leading-[1.375rem]">
                urus lobortis senectus faucibus imperdiet rutrum porttitor
                tincidunt laoreet parturient consectetur tortor ad adipiscing id
                a duis hendrerit diam. A at nec rutrum nam molestie suspendisse
                scelerisque platea a ut commodo volutpat ullamcorper penatibus
                dis quis felis justo porta montes nam a vestibulum tristique
                parturient parturient eget tincidunt. Semper dui.
              </p>
              <div className="flex flex-col lg:flex-row gap-5">
                <Image
                  src="https://gulfpalms.com/test/wp-content/uploads/2021/10/brand-Rosenthal-blog.png"
                  alt="Blog post image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full lg:w-[136px] h-auto lg:h-[100px]"
                />
                <p className="text-sm text-lightGray leading-[1.375rem]">
                  Scelerisque leo fusce dui parturient ad a penatibus mauris
                  adipiscing tempus vestibulum imperdiet gravida magnis a nec
                  bulum penatibus augue dui.
                </p>
              </div>
              <p className="text-sm text-lightGray leading-[1.375rem]">
                Cum scelerisque montes conubia vivamus volutpat consectetur
                euismod ullamcorper netus quis dui vestibulum hac lorem
                parturient a massa parturient cubilia cubilia mauris elementum.
                Condimentum condimentum hac egestas a dictumst potenti. Rutrum
                nam molestie suspendisse scelerisque platea.
              </p>
            </div>
          </div>
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Purus lobortis senectus faucibus imperdiet rutrum porttitor
            tincidunt laoreet parturient consectetur tortor ad adipiscing id a
            duis hendrerit diam. A at nec rutrum nam molestie suspendisse
            scelerisque platea a ut commodo volutpat ullamcorper penatibus dis
            quis felis justo porta montes nam a vestibulum tristique parturient
            parturient eget tincidunt. Semper dui.
          </p>
        </div>
        <div className="flexz flex-col gap-6">
          <h2 className="font-semibold text-[1.375rem] text-[#242424] leading-[1.9375rem]">
            <span className="text-primary">2. </span>Alessi: the Italian Factory
            of Design
          </h2>
          <div className="w-full h-[1px] bg-lightGray/30 mb-9" />
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-6">
              <p className="text-sm text-lightGray leading-[1.375rem]">
                Purus lobortis senectus faucibus imperdiet rutrum porttitor
                tincidunt laoreet parturient consectetur tortor ad adipiscing id
                a duis hendrerit diam. A at nec rutrum nam molestie suspendisse
                scelerisque platea a ut commodo volutpat ullamcorper penatibus
                dis quis felis justo porta montes nam a vestibulum tristique
                parturient parturient eget tincidunt. Semper dui.
              </p>
              <p className="text-sm text-lightGray leading-[1.375rem] italic">
                Scelerisque leo fusce dui parturient ad a penatibus mauris
                adipiscing tempus vestibulum imperdiet gravida magnis a nec
                penatibus augue ullamcorper quis sem a luctus leo eros ornare
                cubilia mauris elementum imperdiet tincidunt.
              </p>
              <p className="text-sm text-lightGray leading-[1.375rem]">
                Cum scelerisque montes conubia vivamus volutpat consectetur
                euismod ullamcorper netus quis dui vestibulum hac lorem
                parturient a massa parturient cubilia cubilia mauris elementum.
                Condimentum condimentum hac egestas a dictumst potenti.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {images_2.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="Blog post image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full lg:w-[151px] h-auto lg:h-[151px]"
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Purus lobortis senectus faucibus imperdiet rutrum porttitor
            tincidunt laoreet parturient consectetur tortor ad adipiscing id a
            duis hendrerit diam. A at nec rutrum nam molestie suspendisse
            scelerisque platea a ut commodo volutpat ullamcorper penatibus dis
            quis felis justo porta montes nam a vestibulum tristique parturient
            parturient eget tincidunt. Semper dui.
          </p>
        </div>
        <div className="flexz flex-col gap-6">
          <h2 className="font-semibold text-[1.375rem] text-[#242424] leading-[1.9375rem]">
            <span className="text-primary">1. </span>Leolux Design Furniture
          </h2>
          <div className="w-full h-[1px] bg-lightGray/30 mb-9" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {images_1.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="Blog post image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Ullamcorper per dis adipiscing curae nisl nisl blandit nunc vel
              massa ad venenatis a cras donec adipiscing adipiscing at a
              suspendisse montes habitasse vestibulum et sagittis aptent ornare.
              Purus nostra orci nascetur ante aenean parturient nullam conubia
              parturient a porta felis dapibus potenti magna turpis a vestibulum
              nunc a vestibulum at parturient leo feugiat a.
            </p>
            <p className="text-[.9375rem] leading-[1.5625rem] text-lightGray border-l-[2px] border-l-primary pl-5 pt-1">
              Scelerisque a vulputate varius duis a purus nam integer lacus
              ridiculus ullamcorper nec ac convallis mus hac parturient
              hendrerit erat a aliquam amet. Cras duis aliquet a cras hendrerit
              adipiscing maecenas adipiscing scelerisque mi parturient nostra
              urna non.Iaculis ornare vitae convallis duis ut tempus odio
              suspendisse adipiscing potenti vivamus odio eget a adipiscing hac.
            </p>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              At habitant amet erat gravida lectus dapibus parturient per in
              praesent condimentum adipiscing gravida interdum rhoncus arcu
              condimentum dui scelerisque ipsum montes montes id a a.In tempor a
              a eu etiam per habitant dis condimentum vestibulum augue vivamus
              massa ullamcorper suspendisse tellus condimentum enim nunc varius
              sem dis.
            </p>
          </div>
        </div>
        {/* Add Brands Here  */}
        <button className="w-max flex self-center bg-white border border-lightGray/30 hover:bg-lightGray/30 duration-300 px-5 py-2 font-semibold text-xs text-[#333] uppercase">
          View all brands
        </button>
      </div>
    </BlogStructure>
  );
};
export default page;
