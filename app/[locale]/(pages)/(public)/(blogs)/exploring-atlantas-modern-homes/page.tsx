"use client";

import BlogPostHeading from "./BlogPostHeading";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import Image from "next/image";
import BlogCommentForm from "./BlogCommentForm";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const recentPosts = [
  {
    title: "Exploring Atlanta’s modern homes",
    image:
      "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-9-75x65.jpg",
    date: "August 27, 2021",
  },
  {
    title: "Green interior design inspiration",
    image:
      "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-8-75x65.jpg",
    date: "August 27, 2021",
  },
  {
    title: "Collar brings back coffee brewing ritual",
    image:
      "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-7-75x65.jpg",
    date: "August 27, 2021",
  },
];

const products = [
  {
    title: "Parturient convallis",
    image:
      "https://gulfpalms.com/wp-content/uploads/2021/08/post-example-1-image-1.jpg",
    description:
      "A sit tellus a curabitur ornare consectetur laoreet eget nec amet lorem porta montes suspendisse integer a ut montes suspendisse posuere faucibus vehicula suspendisse laoreet id tortor suscipit. Lacus bibendum tortor natoque porttitor cursus non adipiscing facilisi ullamcorper parturient ultricies parturient non a.  Ac ullamcorper a ultrices a a urna ac commodo nam condimentum parturient. Libero suspendisse facilisis parturient elementum curabitur. Erat a per dis aliquet ultricies curabitur nostra suspendisse nec adipiscing donec vestibulum a parturient a ac ut non adipiscing penatibus nec erat.",
  },
  {
    title: "Scelerisque vulputate",
    image:
      "https://gulfpalms.com/wp-content/uploads/2021/08/post-example-1-image-2.jpg",
    description:
      "Urna suspendisse parturient suspendisse imperdiet egestas faucibus auctor nascetur volutpat torquent proin parturient ultricies senectus dolor suspendisse amet dis vel adipiscing a elit mus. Suspendisse commodo vivamus elementum tempor lobortis adipiscing amet condimentum dis felis consectetur at himenaeos ridiculus a nibh mattis in. Lacinia consequat congue parturient dapibus ad dignissim condimentum consequat rutrum parturient amet id euismod sem ad erat a lorem. Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum.",
  },
  {
    title: "Iaculis vestibulum",
    image:
      "https://gulfpalms.com/wp-content/uploads/2021/08/post-example-1-image-3.jpg",
    description:
      "Hendrerit volutpat eget curae leo a vel tristique rhoncus sit condimentum dictumst non mi quam a parturient suspendisse platea nascetur ipsum a. Id nibh lacinia praesent mus arcu vel magna a malesuada cursus aliquam accumsan duis vestibulum imperdiet nascetur varius habitant. Metus vestibulum egestas pharetra congue lacus dignissim adipiscing parturient laoreet turpis massa nascetur pharetra himenaeos justo ridiculus a scelerisque. Orci hendrerit scelerisque sit ullamcorper nam hac a at phasellus arcu consectetur dapibus libero consectetur aliquet aliquet arcu duis a et at. At vulputate at sapien maecenas mauris tellus cum orci consectetur nullam laoreet sit egestas at vestibulum iaculis sed morbi aenean a.",
  },
  {
    title: "Cursus aliquam",
    image:
      "https://gulfpalms.com/wp-content/uploads/2021/08/post-example-1-image-4.jpg",
    description:
      "Ultricies inceptos parturient purus tempor dapibus ac eu posuere adipiscing condimentum feugiat leo laoreet a a condimentum suscipit nec.Class massa adipiscing hendrerit eget blandit hac pulvinar cum suspendisse cursus euismod mauris consectetur iaculis purus ligula porta placerat vivamus etiam ante sociis per conubia sociosqu tellus risus. Convallis justo quam suspendisse facilisi parturient dis dolor per condimentum a adipiscing integer id conubia a molestie.Pulvinar consectetur blandit magnis hac dictumst arcu curae magnis eleifend bibendum condimentum sapien duis scelerisque adipiscing.",
  },
];

const images = [
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-9.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-8.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-5.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-6-700x700.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-1-700x700.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-8-700x700.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-1-700x492.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-9-700x700.jpg",
];

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
    <div className="max-w-[1222px] mx-auto pt-[98px]">
      <div className="flex flex-col items-center">
        <h1
          className={`mb-3 text-4xl lg:text-[4.25rem] lg:leading-[5.125rem] font-bold text-black`}
        >
          Blog
        </h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <div className="grid grid-cols-4 pt-16">
        <div className="col-span-3 px-3">
          <BlogPostHeading />
          <div className="flex flex-col gap-6">
            <p className="text-sm text-lightGray italic">
              Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse
              cras odio bibendum augue rhoncus laoreet dui praesent sodales
              sodales. Dignissim fusce ullamcorper volutpat habitasse tincidunt
              parturient enim tempor facilisi nostra lobortis proin primis
              litora. Scelerisque a diam a vestibulum nibh sit senectus
              fringilla bibendum vestibulum.
            </p>
            <p className="text-sm text-lightGray">
              Hendrerit{" "}
              <span className="font-semibold text-[#242424]">
                lacinia ullamcorper 2019 penatibus
              </span>{" "}
              convallis suspendisse aliquam sociis massa nam tempor nascetur nam
              a fusce ut. Velit donec id quis aliquet adipiscing a nisl neque
              sem maecenas vestibulum a parturient parturient faucibus gravida
              scelerisque at a consectetur ultricies. Et iaculis mi velit
              tincidunt vestibulum a duis tempor non magna ultrices porta
              malesuada ullamcorper scelerisque parturient himenaeos iaculis
              sit.
            </p>
          </div>
          <PhotoProvider
            speed={() => 800}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
            toolbarRender={({ onScale, scale }) => {
              return (
                <>
                  <svg
                    className="PhotoView-Slider__toolbarIcon"
                    onClick={() => onScale(scale + 1)}
                  />
                  <svg
                    className="PhotoView-Slider__toolbarIcon"
                    onClick={() => onScale(scale - 1)}
                  />
                </>
              );
            }}
          >
            <div className="flex flex-col gap-12 mt-12">
              {products.map((product, index) => (
                <div key={index} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2 w-full">
                    {/* Heading */}
                    <h2 className="font-semibold text-gray-800 mr-4 whitespace-nowrap">
                      {product.title}
                    </h2>

                    {/* Line */}
                    <div className="flex-1 h-[2px] bg-gray-200 relative">
                      <div className="h-full bg-orange-400 w-max">
                        <p className="h-[2px] opacity-0">{product.title}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-lightGray">
                    {product.description}
                  </p>

                  <PhotoView key={index} src={product.image}>
                    <Image
                      src={product.image}
                      alt="Product image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full"
                    />
                  </PhotoView>
                </div>
              ))}
            </div>
          </PhotoProvider>

          <p className="mt-12 text-sm text-lightGray">
            Parturient consequat pulvinar ante dui aenean vestibulum vestibulum
            massa eget a luctus montes ut vulputate nullam. Ligula condimentum a
            lacus habitant etiam sem adipiscing nulla a a laoreet quisque
            ullamcorper mus cubilia a mus donec adipiscing euismod ligula
            vehicula iaculis a a habitant. Et leo orci eu nunc phasellus dapibus
            vestibulum aenean praesent a parturient parturient fusce iaculis
            velit torquent velit velit malesuada vel sociosqu primis id
            dignissim erat natoque tellus. Praesent iaculis sit a platea mollis
            vitae lectus dictumst nam leo facilisi a id eros vehicula. Augue
            parturient arcu condimentum convallis turpis id consequat vestibulum
            vestibulum ullamcorper dignissim bibendum facilisi vulputate litora.
          </p>
          <BlogCommentForm />
        </div>
        <div className="col-span-1 flex flex-col gap-5 px-3">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base text-[#333] uppercase">
              Categories
            </h3>
            <div className="flex flex-col gap-3">
              {["Decoration", "Design trends", "Furniture", "Inspiration"].map(
                (category) => (
                  <p key={category} className="font-normal text-sm text-[#777]">
                    {category}
                  </p>
                )
              )}
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#777]/30" />
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base text-[#333] tracking-wide uppercase">
              Recent Posts
            </h3>
            <div className="flex flex-col gap-3">
              {recentPosts.map((post, index) => (
                <div key={index} className="flex gap-2">
                  <Image
                    src={post.image}
                    alt="Post image"
                    width={75}
                    height={65}
                  />
                  <div className="flex flex-col justify-between">
                    <p className="font-medium text-sm text-[#333] opacity-65">
                      {post.title}
                    </p>
                    <div className="flex gap-2">
                      <p className="text-[#bbb] text-[.8125rem]">{post.date}</p>
                      <p className="text-[#bbb] text-[.8125rem]">No Comments</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#777]/30" />

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base text-[#333] tracking-wide uppercase">
              Our Instagram
            </h3>
            <div className="grid grid-cols-3 gap-1">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="Post image"
                  width={87}
                  height={87}
                />
              ))}
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#777]/30" />

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base text-[#333] tracking-wide uppercase">
              Recent Comments
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-sm">
                <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
                <span className="text-[#777] px-1">Mr. Mackay on</span>
                <span className="font-semibold text-[#333]">
                  {" "}
                  Sweet seat: functional seat for IT folks
                </span>
              </p>
              <p className="text-sm">
                <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
                <span className="text-[#777] px-1">Mr. Mackay on</span>
                <span className="font-semibold text-[#333]">
                  {" "}
                  The big design: Wall likes pictures
                </span>
              </p>
              <p className="text-sm">
                <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
                <span className="text-[#777] px-1">Mr. Mackay on</span>
                <span className="font-semibold text-[#333]">
                  {" "}
                  Minimalist Japanese-inspired furniture
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
