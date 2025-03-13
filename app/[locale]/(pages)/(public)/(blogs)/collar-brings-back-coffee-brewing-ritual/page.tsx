import BlogStructure from "@/components/common/BlogStructure";
import BlogPostHeading from "../exploring-atlantas-modern-homes/BlogPostHeading";
import { furniturePosts } from "@/data/blogsData";
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
  const tags = ["Chair", "Furniture", "News"];

  return (
    <BlogStructure breadcrumbLinks={breadcrumbLinks} tags={tags}>
      <BlogPostHeading post={furniturePosts[0]} slug="Furniture" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Adipiscing hac imperdiet id blandit varius scelerisque at sagittis
            libero dui dis volutpat vehicula mus sed ut. Lacinia dui rutrum arcu
            cras a at conubia a condimentum curabitur dictumst cum consectetur
            ullamcorper nascetur duis dis nulla sit proin libero tellus. Purus a
            adipiscing volutpat lacus ullamcorper lacus ante tellus fusce libero
            et etiam a quam a dis montes mauris faucibus per vestibulum lacus
            dapibus nulla tortor. Habitasse nibh eget ullamcorper parturient a
            nec erat class sed a vitae parturient at varius urna.
          </p>
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Fringilla euismod ut duis est habitasse nostra scelerisque a tellus
            lorem vestibulum himenaeos at ullamcorper diam a cum pulvinar.
            Lectus est luctus cum dictumst duis consequat nam venenatis a mattis
            penatibus eget praesent vestibulum rhoncus a integer ut habitant
            adipiscing a fringilla sed. Scelerisque potenti sociis penatibus
            molestie a posuere inceptos laoreet condimentum parturient varius
            lacinia parturient leo a a elit condimentum a id dis. Cras a sed
            consectetur lacinia hac urna dapibus parturient vestibulum porta
            fermentum ad a justo purus leo maecenas habitasse nibh felis.
            Commodo ullamcorper diam quam et.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 w-full">
            {/* Heading */}
            <h2 className="font-semibold text-[1.375rem] leading-[1.9375rem] text-[#242424] text-center uppercase mr-4 whitespace-nowrap">
              Condimentum enim
            </h2>

            {/* Line */}
            <div className="flex flex-1 justify-center h-[1px] bg-gray-200 relative" />
          </div>
          <Image
            src="https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-1.jpg"
            alt="Image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[468px]"
          />
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Fringilla euismod ut duis est habitasse nostra scelerisque a tellus
            lorem vestibulum himenaeos at ullamcorper diam a cum pulvinar.
            Lectus est luctus cum dictumst duis consequat nam venenatis a mattis
            penatibus eget praesent vestibulum rhoncus a integer ut habitant
            adipiscing a fringilla sed. Scelerisque potenti sociis penatibus
            molestie a posuere inceptos laoreet condimentum parturient varius
            lacinia parturient leo a a elit condimentum a id dis. Cras a sed
            consectetur lacinia hac urna dapibus parturient vestibulum porta
            fermentum ad a justo purus leo maecenas habitasse nibh felis.
            Commodo ullamcorper diam quam et.
          </p>
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Justo senectus placerat suspendisse in vulputate montes a potenti a
            vestibulum ullamcorper justo a ut facilisi. Donec consequat
            suspendisse eu mi scelerisque tempus rhoncus in interdum tempus mi
            tincidunt varius erat parturient ac phasellus adipiscing. Vitae
            vestibulum id per habitasse viverra molestie quisque dignissim ante
            vestibulum praesent fermentum venenatis metus fusce lacus a libero
            duis parturient semper leo adipiscing. Convallis a elit sed mauris a
            platea hac ullamcorper vehicula vestibulum eu id dolor adipiscing
            leo quis consectetur egestas cum a euismod taciti molestie
            vestibulum odio ipsum lorem. Sed aenean.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 w-full">
            {/* Heading */}
            <h2 className="font-semibold text-[1.375rem] leading-[1.9375rem] text-[#242424] text-center uppercase mr-4 whitespace-nowrap">
              Condimentum enim
            </h2>

            {/* Line */}
            <div className="flex flex-1 justify-center h-[1px] bg-gray-200 relative" />
          </div>
          <Image
            src="https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-9.jpg"
            alt="Image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[468px]"
          />
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Venenatis turpis condimentum elementum convallis id bibendum congue
            et suspendisse cum lacus nibh a scelerisque adipiscing at
            scelerisque et nunc. Leo tempus proin eu gravida porttitor a orci
            ante ligula rutrum a auctor quis ullamcorper risus. Convallis class
            adipiscing est taciti adipiscing parturient mi a dapibus et
            vestibulum scelerisque primis hac a hendrerit duis aliquam per nam
            condimentum porta dolor. Ridiculus odio a a a nec habitant
            parturient vivamus dictum consectetur parturient dis a feugiat sed
            duis conubia penatibus a. Commodo ullamcorper diam quam et.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <p className="w-full text-sm text-lightGray leading-[1.375rem]">
              Consectetur imperdiet adipiscing ultricies quam dolor nec mus
              adipi scing habi tasse et aliq uam nec mi vesti bulum a suscipit a
              scele risque suspe ndisse conubia ad ac elemen tum molestie vitae
              euis mod urna quisque facilisis. Mus sociis parturient a hac curab
              itur massa a a ipsum viva mus etiam vel pretium nibh et inceptos
              leo parturient a semper in condimentum vitae cum cras. Orci proin
              tellus ullamcorper vesti bulum vestibulum ullamc orper felis
              vivamus vulputate cubilia quis a porttitor placerat eros nostra
              itur massa adipiscing.
            </p>
            <div className="w-full lg:w-[146px] h-[163px] bg-[url('https://gulfpalms.com/wp-content/uploads/2021/08/page-title-blog.jpg')] object-left flex flex-col justify-between items-center py-3">
              <i className="fa-solid fa-location-dot text-white text-4xl"></i>
              <p className="text-sm text-white/80 leading-[1.375rem] text-center">
                71 Pilgrim Avenue Chevy Chase, <br /> MD 20815
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlogStructure>
  );
};
export default page;
