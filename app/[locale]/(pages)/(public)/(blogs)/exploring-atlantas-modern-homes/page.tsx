"use client";

import BlogPostHeading from "./BlogPostHeading";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { decorationPosts, inspirationData, products } from "@/data/blogsData";
import BlogStructure from "@/components/common/BlogStructure";

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
    <BlogStructure
      breadcrumbLinks={breadcrumbLinks}
      olderBlog={inspirationData[0]}
    >
      <BlogPostHeading post={decorationPosts[0]} />
      <div className="flex flex-col gap-6 font-sans pt-5">
        <p className="text-sm text-lightGray italic">
          Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras
          odio bibendum augue rhoncus laoreet dui praesent sodales sodales.
          Dignissim fusce ullamcorper volutpat habitasse tincidunt parturient
          enim tempor facilisi nostra lobortis proin primis litora. Scelerisque
          a diam a vestibulum nibh sit senectus fringilla bibendum vestibulum.
        </p>
        <p className="text-sm text-lightGray">
          Hendrerit{" "}
          <span className="font-semibold text-[#242424]">
            lacinia ullamcorper 2019 penatibus
          </span>{" "}
          convallis suspendisse aliquam sociis massa nam tempor nascetur nam a
          fusce ut. Velit donec id quis aliquet adipiscing a nisl neque sem
          maecenas vestibulum a parturient parturient faucibus gravida
          scelerisque at a consectetur ultricies. Et iaculis mi velit tincidunt
          vestibulum a duis tempor non magna ultrices porta malesuada
          ullamcorper scelerisque parturient himenaeos iaculis sit.
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
                <h2 className="font-serif font-semibold text-lg tracking-wide text-gray-800 mr-4 whitespace-nowrap">
                  {product.title}
                </h2>

                {/* Line */}
                <div className="flex-1 h-[2px] bg-gray-200 relative">
                  <div className="h-full bg-orange-400 w-max">
                    <p className="h-[2px] font-serif font-semibold text-lg tracking-wide opacity-0">
                      {product.title}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-lightGray">{product.description}</p>

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
        ullamcorper mus cubilia a mus donec adipiscing euismod ligula vehicula
        iaculis a a habitant. Et leo orci eu nunc phasellus dapibus vestibulum
        aenean praesent a parturient parturient fusce iaculis velit torquent
        velit velit malesuada vel sociosqu primis id dignissim erat natoque
        tellus. Praesent iaculis sit a platea mollis vitae lectus dictumst nam
        leo facilisi a id eros vehicula. Augue parturient arcu condimentum
        convallis turpis id consequat vestibulum vestibulum ullamcorper
        dignissim bibendum facilisi vulputate litora.
      </p>
    </BlogStructure>
  );
};
export default page;
