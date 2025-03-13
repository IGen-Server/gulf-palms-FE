import BlogStructure from "@/components/common/BlogStructure";
import BlogPostHeading from "../exploring-atlantas-modern-homes/BlogPostHeading";
import { decorationPosts } from "@/data/blogsData";
import Image from "next/image";

const page = () => {
  const breadcrumbLinks = [
    { name: "Home", arabicName: "Home", href: "/" },
    {
      name: "Decoration",
      arabicName: "Decoration",
      href: "",
    },
  ];
  const tags = ["Chair", "Table", "Trends"];

  return (
    <BlogStructure breadcrumbLinks={breadcrumbLinks}>
      <BlogPostHeading post={decorationPosts[2]} />
      <div className="flex flex-col gap-6">
        <p className="text-sm text-lightGray">
          Ullamcorper condimentum erat pretium velit at ut a nunc id a adeu
          vestibulum nibh urna nam consequat erat molestie lacinia rhoncus. Nisi
          a diamida himenaeos condimentum laoreet pera neque habitant leo
          feugiat viverra nisl sagittis a curabitur parturient nisi adipiscing.
          A parturient dapibus pulvinar arcu a suspendisse sagittis mus mollis
          at a nec placerat sociosqu himenaeos litora fames habitant suscipit
          tempus scelerisque ridiculus mi ullamcorper per ridiculus proin
          condimentum. Nisi a diam id a himenaeos condimentum laoreet per a
          neque habitant leo feugiat viverra nisl sagittis a curabitur
          parturient nisi adipiscing. A parturient dapibus pulvinar arcu a
          suspendisse sagittis mus mollis at a nec placerat sociosqu himenaeos
          litora fames habitant suscipit tempus scelerisque ridiculus mi
          ullamcorper per ridiculus proin condimentum.
        </p>
      </div>
      <div className="flex flex-col gap-6 mt-6">
        <div className="flex items-center gap-2 w-full">
          <h2 className="font-semibold text-[1.375rem] leading-[1.9375rem] text-[#242424] text-center uppercase mr-4 whitespace-nowrap">
            Habitant leo
          </h2>

          <div className="flex flex-1 justify-center h-[1px] bg-gray-200 relative" />
        </div>
        <p className="text-sm text-lightGray italic">
          Ullamcorper condimentum erat pretium velit at ut a nunc id a ad eu
          vestibulum nibh urna nam consequat erat molestie lacinia rhoncus. Nisi
          a diam id a himenaeos condimentum laoreet per a neque habitant leo
          feugiat viverra nisl sagittis a curabitur parturient nisi adipiscing.
          A parturient dapibus pulvinar arcu a suspendisse sagittis mus mollis
          at a nec placerat sociosqu himenaeos litora fames habitant suscipit
          tempus scelerisque ridiculus mi ullamcorper per ridiculus proin
          condimentum.
        </p>
        <p className="text-sm text-lightGray">
          Nisi a diam id a himenaeos condimentum laoreet per a neque habitant
          leo feugiat viverra nisl sagittis a curabitur parturient nisi
          adipiscing. A parturient dapibus pulvinar arcu a suspendisse sagittis
          mus mollis at a nec placerat sociosqu himenaeos litora fames habitant
          suscipit tempus scelerisque ridiculus mi ullamcorper per ridiculus
          proin condimentum.
        </p>
        <Image
          src="https://gulfpalms.com/wp-content/uploads/2021/08/decoration-wooden-2-opt.jpg"
          alt="Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full"
        />
        <p className="text-sm text-lightGray">
          Ullamcorper condimentum erat pretium velit at ut a nunc id a ad eu
          vestibulum nibh urna nam consequat erat molestie lacinia rhoncus. Nisi
          a diam id a himenaeos condimentum laoreet per a neque habitant leo
          feugiat viverra nisl sagittis a curabitur parturient nisi adipiscing.
          A parturient dapibus pulvinar arcu a suspendisse sagittis mus mollis
          at a nec placerat sociosqu himenaeos litora fames habitant suscipit
          tempus scelerisque ridiculus mi ullamcorper per ridiculus proin
          condimentum.
        </p>
        <p className="text-sm text-lightGray">
          Nisi a diam id a himenaeos condimentum laoreet per a neque habitant
          leo feugiat viverra nisl sagittis a curabitur parturient nisi
          adipiscing. A parturient dapibus pulvinar arcu a suspendisse sagittis
          mus mollis at a nec placerat sociosqu himenaeos litora fames habitant
          suscipit tempus scelerisque ridiculus mi ullamcorper per ridiculus
          proin condimentum.
        </p>
        <div className="flex flex-col lg:flex-row items-center">
          <Image
            src="https://gulfpalms.com/wp-content/uploads/2021/08/decoration-wooden-3-opt.jpg"
            alt="Image"
            width={0}
            height={0}
            sizes="100vw"
            className="flex-1 h-[270px]"
          />
          <div className="flex flex-col flex-1 gap-5">
            <p className="text-sm text-lightGray">
              Volutpat suspendisse condimentum conubia velit placerat at in
              augue porta aliquet pretium malesuada montes ac nam ante egestas
              cras consectetur ipsum donec facilisi curabitur a fames sociis
              sagittis. A luctus non viverra vestibulum eu hendrerit scelerisque
              malesuada ad dis cras iaculis.
            </p>
            <p className="text-[.9375rem] leading-[1.5625rem] text-lightGray border-l-[2px] border-l-primary pl-5 pt-1">
              A luctus non viverra vestibulum eu hendrerit scelerisque malesuada
              ad dis cras iaculis aliquam netus hendrerit semper nec ac dolor
              eleifend orci cum quis dictumst cum bibendum montes eleifend.
            </p>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              A luctus non viverra vestibulum eu hendrerit scelerisque malesuada
              ad dis cras iaculis aliquam netus hendrerit semper nec ac dolor
              eleifend orci cum quis dictumst cum bibendum montes eleifend.
              Egestas nascetur neque commodo nunc.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-6">
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Volutpat suspendisse condimentum conubia velit placerat at in
              augue porta aliquet pretium malesuada montes ac nam ante egestas
              cras consectetur ipsum donec facilisi curabitur a fames sociis
              sagittis. A luctus non viverra vestibulum eu hendrerit scelerisque
              malesuada ad dis cras iaculis. Cras consectetur non viverra
              vestibulum.
            </p>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              A luctus non viverra vestibulum eu hendrerit scelerisque malesuada
              ad dis cras iaculis aliquam netus hendrerit semper nec ac dolor
              eleifend orci cum quis dictumst cum bibendum montes eleifend.
              Egestas nascetur neque commodo nunc. Cras consectetur ipsum donec
              facilisi curabitur a fames sociis sagittis. Condimentum conubia.
              Condim entum a parturient dui parturient vulputate vehicula dis mi
              placerat at in augue.
            </p>
          </div>
          <Image
            src="https://gulfpalms.com/wp-content/uploads/2021/08/lounge-chair-gallery-1.jpg"
            alt="Image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full lg:w-[208px] h-auto lg:h-[166px]"
          />
        </div>
        <div className="flex items-center">
          {/* {Add product here} */}
          <div className="flex flex-col flex-1 gap-5">
            <div className="flex items-center gap-2 w-full">
              <h2 className="font-semibold text-[1.375rem] leading-[1.9375rem] text-[#242424] text-center uppercase mr-4 whitespace-nowrap">
                Cras consectetur
              </h2>

              <div className="flex flex-1 justify-center h-[1px] bg-gray-200 relative" />
            </div>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Volutpat suspendisse condimentum conubia velit placerat at in
              augue porta aliquet pretium malesuada montes ac nam ante egestas
              cras consectetur ipsum donec facilisi curabitur a fames sociis
              sagittis. A luctus non viverra vestibulum eu hendrerit scelerisque
              malesuada ad dis cras iaculis. Cras consectetur non viverra
              vestibulum.
            </p>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              A luctus non viverra vestibulum eu hendrerit scelerisque malesuada
              ad dis cras iaculis aliquam netus hendrerit semper nec ac dolor
              eleifend orci cum quis dictumst cum bibendum montes eleifend.
              Egestas nascetur neque commodo nunc. Cras consectetur ipsum donec
              facilisi curabitur a fames sociis sagittis. Condimentum conubia.
              Condim entum a parturient dui parturient vulputate vehicula dis mi
              placerat at in augue.
            </p>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              A luctus non viverra vestibulum eu hendrerit scelerisque malesuada
              ad dis cras iaculis. Cras consectetur non viverra vestibulum.
            </p>
          </div>
        </div>
        <p className="text-sm text-lightGray leading-[1.375rem]">
          Ullamcorper condimentum erat pretium velit at ut a nunc id a ad eu
          vestibulum nibh urna nam consequat erat molestie lacinia rhoncus. Nisi
          a diam id a himenaeos condimentum laoreet per a neque habitant leo
          feugiat viverra nisl sagittis a curabitur parturient nisi adipiscing.
          A parturient dapibus pulvinar arcu a suspendisse sagittis mus mollis
          at a nec placerat sociosqu himenaeos litora fames habitant suscipit
          tempus scelerisque ridiculus mi ullamcorper per ridiculus proin
          condimentum.
        </p>
        <p className="text-sm text-lightGray leading-[1.375rem]">
          Nisi a diam id a himenaeos condimentum laoreet per a neque habitant
          leo feugiat viverra nisl sagittis a curabitur parturient nisi
          adipiscing. A parturient dapibus pulvinar arcu a suspendisse sagittis
          mus mollis at a nec placerat sociosqu himenaeos litora fames habitant
          suscipit tempus scelerisque ridiculus mi ullamcorper per ridiculus
          proin condimentum egestas taciti molestie hendrerit sit senectus
          iaculis.
        </p>
      </div>
    </BlogStructure>
  );
};
export default page;
