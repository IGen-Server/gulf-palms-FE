"use client";

import BlogStructure from "@/components/common/BlogStructure";
import BlogPostHeading from "../exploring-atlantas-modern-homes/BlogPostHeading";
import { decorationPosts, designPosts, furniturePosts } from "@/data/blogsData";
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
      name: "Design trends",
      arabicName: "Design trends",
      href: "",
    },
  ];
  const tags = ["Guide", "Inspiration", "Table", "Trends"];

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
        const response = await getRelatedProducts([25321, 25696, 25167, 25217]);
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
      newerBlog={furniturePosts[0]}
      olderBlog={decorationPosts[1]}
    >
      <BlogPostHeading post={designPosts[0]} slug="Design Trends" />
      <div className="flex flex-col gap-6 font-sans">
        <div className="flex flex-col gap-6">
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Aliquet parturient scele risque scele risque nibh pretium parturient
            suspendisse platea sapien torquent feugiat parturient hac amet.
            Volutpat nullam montes mollis ad mauris in orci eleifend per eu
            pulvinar sociosqu primis hendrerit parturient volutpat a volutpat a
            at felis ridiculus.Consequat netus tellus purus convallis sociis non
            nascetur vestibulum placerat a mi consectetur risus non a porttitor
            in magna vitae. Pharetra porttitor a ligula dui scelerisque
            convallis litora in in a elementum mi neque lectus facilisis
            phasellus arcu porta scelerisque dolor. Volutpat nullam montes
            mollis ad mauris in orci eleifend per eu pulvinar.
          </p>
          <p className="text-sm text-lightGray leading-[1.375rem]">
            Habitasse torquent eleifend auctor nec lobortis ullamcorper cubilia
            pretium vestibulum ullamcorper scelerisque gravida et elit
            ullamcorper lectus nisi natoque adipiscing dictumst gravida
            parturient eget ligula torquent commodo vestibulum sed. Nisi at
            quisque dui dapibus maecenas eleifend egestas nullam ullamcorper
            eros leo nibh parturient commodo id pretium vestibulum iaculis
            cursus rutrum vestibulum nec pulvinar adipiscing.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          <Image
            src="https://clone.gulfpalms.com/wp-content/uploads/2021/08/wd-blog-2-800x475.jpg"
            alt="Blog post image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full lg:flex-1 h-[251px]"
          />
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="font-serif font-semibold text-[1.375rem] text-[#242424] leading-[1.9375rem]">
              Tortor mi mus nascetur
            </h2>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Tincidunt ad sit purus orci leo placerat neque laoreet dis curae
              vulputate conubia sodales lacus habitant pretium sed. Sem
              elementum curae nibh nisl mi est dapibus cubilia suspendisse
              elementum suspendisse faucibus vestibulum curabitur suspendisse in
              dignissim adipiscing a adipiscing. A blandit quisque quisque ut ut
              viverra Fermentum libero a cum dictumst augue non torquent
              condimentum eget a consectetur eu est sem suscipit ut primis
              adipiscing taciti nec.
            </p>
          </div>
        </div>
        <p className="text-[.9375rem] leading-[1.5625rem] text-lightGray border-l-[2px] border-l-primary pl-5 pt-1">
          Massa class fringilla parturient felis quisque adipiscing praesent
          velit duis odio velit sit dignissim hac adipiscing facilisis id
          inceptos suspendisse aliquam a quam a mi litora. Condimentum cum
          semper conubia.
        </p>

        {/* Add Products Here  */}
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

        <button className="w-max flex self-center bg-white border border-lightGray/30 hover:bg-lightGray/30 duration-300 px-5 py-2 font-semibold text-xs text-[#333]">
          View all products
        </button>
        <p className="text-sm text-lightGray leading-[1.375rem]">
          Litora adipiscing aliquet urna parturient a purus velit per
          ullamcorper dui eu cum litora dignissim natoque porttitor convallis
          donec dictumst blandit natoque et blandit rhoncus vestibulum nam netus
          metus. Senectus aenean vestibulum bibendum ac ultrices eu scelerisque
          praesent egestas maecenas pharetra erat parturient fusce netus
          nascetur scelerisque in nec molestie malesuada a mi leo a. Purus
          potenti dignissim maecenas commodo pulvinar justo habitasse risus
          pharetra a magnis nibh aptent suspendisse.
        </p>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-7">
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="font-serif font-semibold text-[1.375rem] text-[#242424] leading-[1.9375rem]">
              A venenatis ad fermentum nascetur
            </h2>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Varius a ullamcorper duis elit conubia urna fermentum vel eros
              venenatis donec scelerisque nam leo sem condimentum eu sociis.
              Suspendisse egestas a vulputate ante scelerisque aliquam
              suspendisse metus a a condimentum eu vestibulum vestibulum.
            </p>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="font-serif font-semibold text-[1.375rem] text-[#242424] leading-[1.9375rem]">
              Mattis vestibulum nisl erat pretium morbi
            </h2>
            <p className="text-sm text-lightGray leading-[1.375rem]">
              Rhoncus nibh aliquam a netus commodo a venenatis id a ullamcorper
              odio molestie nunc gravida parturient ac purus id mauris
              condimentum inceptos nulla scelerisque a suspendisse a integer
              vestibulum scelerisque.Adipiscing dignissim urna.
            </p>
          </div>
        </div>
        <p className="text-sm text-lightGray leading-[1.375rem]">
          A mi sagittis a morbi fames ullamcorper nunc parturient congue
          suspendisse conubia et vestibulum phasellus consectetur risus nibh
          tincidunt urna nec a dignissim dui. Magna eu consectetur Lectus
          adipiscing litora eu id cum a elit ipsum ad quisque in vestibulum
          facilisis feugiat nisl donec a sodales euismod sed convallis
          adipiscing. Hac sed enim tristique nam tortor ut inceptos a ad nisl
          magna.
        </p>
      </div>
    </BlogStructure>
  );
};
export default BlogPage;
