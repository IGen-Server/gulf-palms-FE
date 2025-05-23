"use client";

import BlogStructure from "@/components/common/BlogStructure";
import BlogPostHeading from "../exploring-atlantas-modern-homes/BlogPostHeading";
import {
  accessoriesContents,
  decorationPosts,
  designPosts,
  inspirationData,
  lightingsContents,
} from "@/data/blogsData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";
import { ProductCategoryModel } from "@/models/product/product";
import RenderImageAndProductsCopy from "@/components/common/RenderImageAndProductsCopy";
import CustomCarouselCopy from "@/components/common/CustomCarouselCopy";

const BlogPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { t, i18n } = useTranslation();
  const axiosInstanceWithOutLoader = CreateAxiosInstanceWithLoader(
    false,
    false
  );
  const [slugToCategoryRecord, setSlugToCategoryRecord] = useState<
    Record<number, ProductCategoryModel>
  >({});

  const breadcrumbLinks = [
    { name: "Home", arabicName: "Home", href: "/" },
    {
      name: "Decoration",
      arabicName: "Decoration",
      href: "",
    },
  ];

  const tags = ["Furniture", "News", "Sofa"];

  const getRelatedProducts = async (hoveresProductIds: number[]) => {
    try {
      const response = await ProductService.Get(
        {
          lang: i18n.language,
          include: `[0,${hoveresProductIds.join(",")}]`,
        },
        axiosInstanceWithOutLoader
      );

      return response;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await getRelatedProducts([
          25321, 25696, 25167, 25217, 25731, 25604, 26087, 25655, 26203, 26209,
          25679, 26198,
        ]);
        console.log({ response });
        setProducts([...response.flat()]);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };

    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BlogStructure
      breadcrumbLinks={breadcrumbLinks}
      tags={tags}
      newerBlog={designPosts[0]}
      olderBlog={inspirationData[1]}
    >
      <BlogPostHeading post={decorationPosts[1]} />
      <div className="flex flex-col gap-6 font-sans">
        <div className="flex flex-col gap-6">
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis
            varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt
            per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc
            torquent euismod adipiscing adipiscing dui gravida justo. Ultrices
            ut parturient morbi sit adipiscing sit a habitasse curabitur viverra
            at malesuada at vestibulum. Leo duis lacinia placerat parturient
            montes vulputate cubilia posuere parturient inceptos massa euismod
            curabitur dis dignissim vestibulum quam a urna.
          </p>
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Netus pretium tellus nulla commodo massa adipiscing in elementum
            magna congue condimentum placerat habitasse potenti ac orci a
            quisque tristique elementum et viverra at condimentum scelerisque eu
            mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque
            aliquet tempus faucibus quam ac aliquet nibh a condimentum
            suspendisse hac integer leo erat aliquam ut himenaeos. Consectetur
            neque odio diam turpis dictum ullamcorper dis felis nec et montes
            non ad a quam pretium convallis leo condimentum congue scelerisque
            suspendisse elementum nam. Vestibulum tempor lobortis semper cras
            orci parturient a parturient tincidunt erat arcu sodales sed
            nascetur et mi bibendum condimentum suspendisse sodales nostra
            fermentum.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 w-full">
            {/* Heading */}
            <h2 className="font-serif font-semibold text-4xl text-[#242424] text-center uppercase mr-4 whitespace-nowrap">
              Accessories
            </h2>

            {/* Line */}
            <div className="flex flex-1 justify-center h-[2px] bg-gray-200 relative">
              <div className="h-full bg-orange-400 w-max">
                <p className="h-[2px] font-serif font-semibold text-4xl text-center uppercase opacity-0">
                  Accessories
                </p>
              </div>
            </div>
          </div>
          <Image
            src="https://clone.gulfpalms.com/wp-content/uploads/2021/08/post-1-image-1.jpg"
            alt="Accessories image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
          {/* Add Products here  */}
          <CustomCarouselCopy
            slidesToShow={4}
            slidesToScroll={4}
            MobileSlidesNumber={2}
            // compactArrow={true}
            dots={false}
            arrow={false}
            data={products?.slice(4)?.map((product) => ({
              component: (
                <RenderImageAndProductsCopy
                  key={product.productId}
                  renderType="product"
                  imageFileOrUrl={product.imageFileOrUrl}
                  images={product.images}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  productId={product.productId}
                  slug={product.slug}
                  currency={""}
                  currentCategories={product.categories}
                  productAttribute={null}
                  slugToCategoryRecord={slugToCategoryRecord}
                />
              ),
              width: " w-full lg:max-w-[218px]  ",
            }))}
          />
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Mauris torquent mi eget et amet phasellus eget ad ullamcorper mi a
            fermentum vel a a nunc consectetur enim rutrum. Aliquam vestibulum
            nulla condimentum platea accumsan sed mi montes adipiscing eu
            bibendum ante adipiscing gravida per consequat gravida tristique
            litora nisi condimentum lobortis elementum. Ullamcorper ante
            fermentum massa a dolor gravida parturient id a adipiscing neque
            rhoncus quisque a ullamcorper tempor.Consectetur scelerisque
            ullamcorper arcu est suspendisse eu rhoncus nibh.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {accessoriesContents.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex ${index % 2 !== 0
                    ? "flex-col lg:flex-col-reverse"
                    : "flex-col"
                    } items-center gap-6`}
                >
                  <Image
                    src={item.image}
                    alt="Acc image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full rounded-lg shadow-md"
                  />
                  <div className="flex flex-col gap-6">
                    <p className="text-sm text-lightGray leading-[1.375rem]">
                      {item.description}
                    </p>
                    <p className="font-semibold text-lightGray cursor-pointer">
                      {item.name} -{" "}
                      <span className="text-[#242424]">{item.title}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-7">
          <div className="flex flex-col gap-2 w-full">
            {/* Heading */}
            <h2 className="font-serif font-semibold text-4xl text-[#242424] text-center uppercase mr-4 whitespace-nowrap">
              Lighting
            </h2>

            {/* Line */}
            <div className="flex flex-1 justify-center h-[2px] bg-gray-200 relative">
              <div className="h-full bg-orange-400 w-max">
                <p className="h-[2px] font-serif font-semibold text-4xl text-center uppercase opacity-0">
                  Lighting
                </p>
              </div>
            </div>
          </div>
          <Image
            src="https://clone.gulfpalms.com/wp-content/uploads/2021/08/post-1-image-2.jpg"
            alt="Accessories image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
          {/* Add products heree  */}
          <CustomCarouselCopy
            slidesToShow={4}
            slidesToScroll={4}
            MobileSlidesNumber={2}
            // compactArrow={true}
            dots={false}
            arrow={false}
            data={products?.slice(4)?.map((product) => ({
              component: (
                <RenderImageAndProductsCopy
                  key={product.productId}
                  renderType="product"
                  imageFileOrUrl={product.imageFileOrUrl}
                  images={product.images}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  productId={product.productId}
                  slug={product.slug}
                  currency={""}
                  currentCategories={product.categories}
                  productAttribute={null}
                  slugToCategoryRecord={slugToCategoryRecord}
                />
              ),
              width: " w-full lg:max-w-[218px]  ",
            }))}
          />
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Mauris torquent mi eget et amet phasellus eget ad ullamcorper mi a
            fermentum vel a a nunc consectetur enim rutrum. Aliquam vestibulum
            nulla condimentum platea accumsan sed mi montes adipiscing eu
            bibendum ante adipiscing gravida per consequat gravida tristique
            litora nisi condimentum lobortis elementum. Ullamcorper ante
            fermentum massa a dolor gravida parturient id a adipiscing neque
            rhoncus quisque a ullamcorper tempor.Consectetur scelerisque
            ullamcorper arcu est suspendisse eu rhoncus nibh.
          </p>
          <div className="w-full flex flex-col gap-3">
            {lightingsContents.map((item, index) => (
              <div key={index} className="w-full flex gap-6">
                {/* Left Image */}
                <Image
                  src={item.imgLeft}
                  alt="Lighting"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="hidden lg:block w-[201PX] h-[313px] rounded-lg shadow-md"
                />

                {/* Text Section */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2 w-full">
                    {/* Heading */}
                    <h2 className="font-serif font-semibold text-[1.375rem] text-[#242424] text-center mr-4 whitespace-nowrap">
                      {item.title}
                    </h2>

                    {/* Line */}
                    <div className="flex flex-1 justify-center h-[2px] bg-gray-200 relative">
                      <div className="h-full bg-lightGray/30 w-max">
                        <p className="h-[2px] font-serif font-semibold text-[1.375rem] text-center opacity-0">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-lightGray leading-[1.375rem]">
                    {item.text}
                  </p>
                </div>

                {/* Right Image */}
                <Image
                  src={item.imgRight}
                  alt="Lighting"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="hidden lg:block w-[201PX] h-[313px] rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Mauris torquent mi eget et amet phasellus eget ad ullamcorper mi a
            fermentum vel a a nunc consectetur enim rutrum. Aliquam vestibulum
            nulla condimentum platea accumsan sed mi montes adipiscing eu
            bibendum ante adipiscing gravida per consequat gravida tristique
            litora nisi condimentum lobortis elementum. Ullamcorper ante
            fermentum massa a dolor gravida parturient id a adipiscing neque
            rhoncus quisque a ullamcorper tempor.Consectetur scelerisque
            ullamcorper arcu est suspendisse eu rhoncus nibh.
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-7">
          <div className="flex flex-col gap-2 w-full">
            {/* Heading */}
            <h2 className="font-serif font-semibold text-4xl text-[#242424] text-center uppercase mr-4 whitespace-nowrap">
              Furniture
            </h2>

            {/* Line */}
            <div className="flex flex-1 justify-center h-[2px] bg-gray-200 relative">
              <div className="h-full bg-orange-400 w-max">
                <p className="h-[2px] font-serif font-semibold text-4xl text-center uppercase opacity-0">
                  Furniture
                </p>
              </div>
            </div>
          </div>
          <Image
            src="https://clone.gulfpalms.com/wp-content/uploads/2021/08/post-1-image-3.jpg"
            alt="Furniture image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
          <CustomCarouselCopy
            slidesToShow={4}
            slidesToScroll={4}
            MobileSlidesNumber={2}
            // compactArrow={true}
            dots={false}
            arrow={false}
            data={products?.slice(4)?.map((product) => ({
              component: (
                <RenderImageAndProductsCopy
                  key={product.productId}
                  renderType="product"
                  imageFileOrUrl={product.imageFileOrUrl}
                  images={product.images}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  productId={product.productId}
                  slug={product.slug}
                  currency={""}
                  currentCategories={product.categories}
                  productAttribute={null}
                  slugToCategoryRecord={slugToCategoryRecord}
                />
              ),
              width: " w-full lg:max-w-[218px]  ",
            }))}
          />
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Mauris torquent mi eget et amet phasellus eget ad ullamcorper mi a
            fermentum vel a a nunc consectetur enim rutrum. Aliquam vestibulum
            nulla condimentum platea accumsan sed mi montes adipiscing eu
            bibendum ante adipiscing gravida per consequat gravida tristique
            litora nisi condimentum lobortis elementum. Ullamcorper ante
            fermentum massa a dolor gravida parturient id a adipiscing neque
            rhoncus quisque a ullamcorper tempor. Consectetur scelerisque
            ullamcorper arcu est suspendisse eu rhoncus nibh.
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Mauris torquent mi eget et amet phas ellus eget ad ullam corper mi
              a ferm entum vel a a nunc conse ctetur enim rutrum. Aliquam
              vestibulum nulla condi mentum platea accumsan sed mi montes
              adipiscing eu bibendum ante adipiscing gravida per consequat
              gravida tristique litora nisi condimentum lobortis elem entum.
              Ullamcorper ante ferm entum massa a dolor gravida parturient id a
              adipiscing neque rhoncus quisque a et ullam corper tempor. Conse
              ctetur ellus scelerisque ullamcorper montes gravida.
            </p>
            <Image
              src="https://clone.gulfpalms.com/wp-content/uploads/2021/08/post-1-image-4.jpg"
              alt="Furniture image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[570px] h-auto"
            />
          </div>
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Mauris torquent mi eget et amet phasellus eget ad ullamcorper mi a
            fermentum vel a a nunc consectetur enim rutrum. Aliquam vestibulum
            nulla condimentum platea accumsan sed mi montes adipiscing eu
            bibendum ante adipiscing gravida per consequat gravida tristique
            litora nisi condimentum lobortis elementum. Ullamcorper ante
            fermentum massa a dolor gravida parturient id a adipiscing neque
            rhoncus quisque a ullamcorper tempor. Consectetur scelerisque
            ullamcorper arcu est suspendisse eu rhoncus nibh.
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
            <Image
              src="https://clone.gulfpalms.com/wp-content/uploads/2021/08/post-1-image-5.jpg"
              alt="Furniture image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[570px] h-auto"
            />
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Mauris torquent mi eget et amet phas ellus eget ad ullam corper mi
              a ferm entum vel a a nunc conse ctetur enim rutrum. Aliquam
              vestibulum nulla condi mentum platea accumsan sed mi montes
              adipiscing eu bibendum ante adipiscing gravida per consequat
              gravida tristique litora nisi condimentum lobortis elem entum.
              Ullamcorper ante ferm entum massa a dolor gravida parturient id a
              adipiscing neque rhoncus quisque a et ullam corper tempor. Conse
              ctetur ellus scelerisque ullamcorper montes gravida.
            </p>
          </div>
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Mauris torquent mi eget et amet phasellus eget ad ullamcorper mi a
            fermentum vel a a nunc consectetur enim rutrum. Aliquam vestibulum
            nulla condimentum platea accumsan sed mi montes adipiscing eu
            bibendum ante adipiscing gravida per consequat gravida tristique
            litora nisi condimentum lobortis elementum. Ullamcorper ante
            fermentum massa a dolor gravida parturient id a adipiscing neque
            rhoncus quisque a ullamcorper tempor. Consectetur scelerisque
            ullamcorper arcu est suspendisse eu rhoncus nibh.
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Mauris torquent mi eget et amet phas ellus eget ad ullam corper mi
              a ferm entum vel a a nunc conse ctetur enim rutrum. Aliquam
              vestibulum nulla condi mentum platea accumsan sed mi montes
              adipiscing eu bibendum ante adipiscing gravida per consequat
              gravida tristique litora nisi condimentum lobortis elem entum.
              Ullamcorper ante ferm entum massa a dolor gravida parturient id a
              adipiscing neque rhoncus quisque a et ullam corper tempor. Conse
              ctetur ellus scelerisque ullamcorper montes gravida.
            </p>
            <Image
              src="https://clone.gulfpalms.com/wp-content/uploads/2021/08/post-1-image-6.jpg"
              alt="Furniture image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[570px] h-auto"
            />
          </div>
        </div>
      </div>
    </BlogStructure>
  );
};
export default BlogPage;
