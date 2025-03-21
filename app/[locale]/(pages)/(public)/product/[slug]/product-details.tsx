/* eslint-disable react/jsx-key */
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeftRight,
  Heart,
  Expand,
  Grid2x2,
  ChevronUp,
  ChevronDown,
  Plus,
  Minus,
  Check,
  Facebook,
  Mail,
  Linkedin,
  PhoneIcon as WhatsApp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCategoryModel } from "@/models/product/product";
import { getCategoryPathByIdFromRecord, getLargestCategoryPathByIdFromRecord } from "@/services/utility/utility.service";
import { useCart } from "@/providers/CartProvider";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import ProductSkeleton from "./ProductDetailsdSkeleton";
import { DirectionProvider } from "@radix-ui/react-direction";
import { Input } from "@/components/ui/input";
import { shareLinks } from "@/components/shop/ProductDrawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductDetailsProps {
  loading?: boolean;
  product: any;
  slugToCategoryRecord: Record<number, ProductCategoryModel>;
  relatedProducts: any[];
}

export default function ProductDetails({ loading, product, slugToCategoryRecord, relatedProducts }: ProductDetailsProps) {
  const { t, i18n: { language } } = useTranslation("common");
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  // Add this state for tracking visible images
  const [hoveredProduct, setHoveredProduct] = useState<any | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState({
    compare: false,
    wishlist: false,
  })

  // Add these functions to handle navigation
  const handlePrevClick = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
    setSelectedImage(product?.images[currentImageIndex - 1]?.src);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prev) =>
      (prev < (product?.images?.length || 0) - 1 ? prev + 1 : prev)
    );
    setSelectedImage(product?.images[currentImageIndex + 1]?.src);
  };

  useEffect(() => {
    setSelectedImage(product?.images?.[0]?.src || '');
  }, [product])

  const handleQuantityChange = (operation: string) => {
    if (operation === "increase") {
      setQuantity(prevQuantity => prevQuantity + 1);
    } else if (operation === "decrease" && quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      quantity: quantity,
      image: product?.images?.[0]?.src,
    });
  };

  const handleShare = (type: string, imageUrl: string) => {
    switch (type) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, '_blank');
        break;
      case 'pinterest':
        window.open(`https://pinterest.com/pin/create/button/?url=${window.location.href}&media=${imageUrl}`, '_blank');
        break;
      case 'download':
        fetch(imageUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.blob();
          })
          .then(blob => {
            // Create a temporary URL for the blob
            const url = window.URL.createObjectURL(blob);

            // Create and configure download link
            const link = document.createElement('a');
            link.href = url;
            // Clean filename and remove special characters
            const cleanName = (product?.name || 'product').replace(/[^a-zA-Z0-9]/g, '-');
            link.download = `${cleanName}-image.jpg`;

            // Trigger download
            document.body.appendChild(link);
            link.click();

            // Cleanup
            setTimeout(() => {
              document.body.removeChild(link);
              window.URL.revokeObjectURL(url);
            }, 100);
          })
          .catch(error => {
            console.error('Error downloading image:', error);
            // Optionally show error to user
            alert('Failed to download image. Please try again.');
          });
        break;
    }
  };

  if (loading) return <ProductSkeleton />;

  return (
    <div className="container max-w-[1200px] px-2 lg:px-0 lg:py-8 mx-auto">
      {/* Breadcrumb and Navigation */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          {/* Thumbnail Slider */}
          {product?.images.length > 1 && (
            <div className="hidden lg:flex flex-col gap-4 relative h-[450px] min-w-[122px]">
              <div className="flex flex-col gap-4 relative overflow-hidden h-full">
                <div
                  className="flex flex-col gap-4 absolute transition-transform duration-300 ease-in-out w-full"
                  style={{ transform: `translateY(-${currentImageIndex * 146}px)` }}
                >
                  {product?.images?.map((image: any, index: number) => (
                    <div
                      key={image.src}
                      className={`border rounded overflow-hidden cursor-pointer transition-all duration-300 shrink-0 w-[122px] h-[122px] ${selectedImage === image.src ? 'border-primary' : 'border-gray-200'
                        }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.name}
                        width={122}
                        height={122}
                        className="object-cover w-full h-full"
                        onClick={() => setSelectedImage(image.src)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevClick}
                  disabled={currentImageIndex === 0}
                  className={`flex-1 flex justify-center bg-lightGray/30 py-1 disabled:opacity-50`}
                >
                  <ChevronUp size={20} />
                </button>
                <button
                  onClick={handleNextClick}
                  disabled={currentImageIndex >= (product?.images?.length || 0) - 3}
                  className={`flex-1 flex justify-center bg-lightGray/30 py-1 disabled:opacity-50`}
                >
                  <ChevronDown size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Main Image */}
          <div className="flex-1 relative">
            <PhotoProvider

              speed={() => 800}
              easing={(type) =>
                type === 2
                  ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                  : "cubic-bezier(0.34, 1.56, 0.64, 1)"
              }
              toolbarRender={({ images, index }) => (
                <div className="flex items-center gap-3 relative z-50"> {/* Updated z-index and added relative */}
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="p-2 rounded-full transition-colors"
                      title="Share"
                    >
                      <i className="fa-solid fa-share text-lightGray"></i>
                    </button>

                    <div
                      className={`${language === "en" ? "text-left" : "text-right"}
      absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50
      transition-all duration-200 ease-in-out
      ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
    `}
                    >
                      <button
                        onClick={() => handleShare('facebook', selectedImage)}
                        className={`${language === "en" ? "text-left" : "text-right"}  w-full px-3 py-2 text-sm hover:bg-[#365493] text-[#333] hover:text-white transition-colors`}
                      >

                        {t("facebookShare")}
                      </button>

                      <button
                        onClick={() => handleShare('twitter', selectedImage)}
                        className={`${language === "en" ? "text-left" : "text-right"}  w-full px-3 py-2 text-sm hover:bg-[#000000] text-[#333] hover:text-white transition-colors`}
                      >

                        {t("twitterShare")}
                      </button>

                      <button
                        onClick={() => handleShare('pinterest', selectedImage)}
                        className={`${language === "en" ? "text-left" : "text-right"}  w-full px-3 py-2 text-sm hover:bg-[#CE272D] text-[#333] hover:text-white transition-colors`}
                      >

                        {t("pinterestShare")}
                      </button>

                      <button
                        onClick={() => handleShare('download', selectedImage)}
                        className={`${language === "en" ? "text-left" : "text-right"} w-full px-3 py-2 text-sm hover:bg-[#F89E6B] text-[#333] hover:text-white transition-colors`}
                      >

                        {t("downloadImage")}
                      </button>
                    </div>
                  </div>

                </div>
              )}
            >
              <div className="relative">
                <div className="relative overflow-hidden group">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    {product?.images?.map((image: any) => (
                      <div key={image.src} className="w-full flex-shrink-0">
                        <InnerImageZoom
                          src={image.src}
                          zoomSrc={image.src}
                          zoomType="hover"
                          hideHint
                          className="max-w-full h-[450px] object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={handlePrevClick}
                    disabled={currentImageIndex === 0}
                    className={`hidden group-hover:block absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md transition-opacity ${currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
                      }`}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextClick}
                    disabled={currentImageIndex >= (product?.images?.length || 0) - 1}
                    className={`hidden group-hover:block absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md transition-opacity ${currentImageIndex >= (product?.images?.length || 0) - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
                      }`}
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Expand Button */}
                  <PhotoView src={product?.images[currentImageIndex]?.src}>
                    <Button className="absolute bottom-5 left-5 p-3 rounded-full text-black bg-white justify-start hover:bg-white transition-all duration-300 group">
                      <Expand />
                      <p className="w-0 opacity-0 group-hover:w-max group-hover:opacity-100">{t("clickToEnlarge")}</p>
                    </Button>
                  </PhotoView>
                </div>
              </div>
            </PhotoProvider>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                {t("home.home")}
              </Link>
              <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>

              {getLargestCategoryPathByIdFromRecord(product?.categories || [], slugToCategoryRecord).map((category) => {
                return (<Link href={getCategoryPathByIdFromRecord(category.id, slugToCategoryRecord)} className="hover:text-primary">{category.name}&nbsp;&nbsp;/&nbsp;&nbsp;</Link>);
              })}

              <span className="font-semibold">{product?.name}</span>
            </div>
            {
              relatedProducts.length > 1 &&
              <div className="relative flex gap-2 group">
                <Link href={`/product/${relatedProducts[0].slug}`} className="p-2 hover:bg-muted rounded-sm" onMouseEnter={() => setHoveredProduct(relatedProducts[0])} onMouseLeave={() => setHoveredProduct(null)}>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
                <Link href='/shop' title="Back to product">
                  <button className="p-2 hover:bg-muted rounded-sm">
                    <Grid2x2 className="w-4 h-4" />
                  </button>
                </Link>
                <Link href={`/product/${relatedProducts[1].slug}`} className="p-2 hover:bg-muted rounded-sm" onMouseEnter={() => setHoveredProduct(relatedProducts[1])} onMouseLeave={() => setHoveredProduct(null)}>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                {hoveredProduct && (
                  <div className="min-w-max absolute top-7 right-0 hidden group-hover:flex items-center gap-3 mt-7 bg-white px-5 py-2 shadow-md">
                    <Image src={hoveredProduct.images[0].src} alt="Product image" width={65} height={65} />
                    <div className="flex flex-col gap-2">
                      <p className="font-medium text-sm text-[#333] whitespace-nowrap">{hoveredProduct.name}</p>
                      <p className="text-primary text-sm">{t("from")} {hoveredProduct.price} KD</p>
                    </div>
                  </div>
                )}
              </div>
            }
          </div>
          <h1 className="text-3xl font-arabic text-gray-800">{product?.name}</h1>
          <div
            className="text-primary text-2xl font-semibold"
            dangerouslySetInnerHTML={{ __html: product?.price_html ?? '' }}
          />

          {
            product && product.attributes[0] && product.attributes[0].visible && product.attributes[0].variation &&
            <div className="flex items-center gap-2">
              <label className="text-sm font-semibold text-gray-700">{product?.attributes[0]?.name}:</label>
              <DirectionProvider dir={language === "en" ? "ltr" : "rtl"}>
                <Select>
                  <SelectTrigger className="bg-white border-gray-300 w-[290px]">
                    <SelectValue placeholder={t("Choose_an_option")} />
                  </SelectTrigger>
                  <SelectContent>
                    {product?.attributes[0]?.options?.map((option: string) => (
                      <SelectItem key={option} value={option}>
                        {option}&nbsp;
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </DirectionProvider>
            </div>
          }

          {/* <p className="text-muted-foreground">
            High quality grafted sider tree. It is evergreen and suitable for
            Kuwait&apos;s weather. Fruits are large and taste great. Ripens at
            the start of the season.
          </p> */}

          <div
            className="text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: product?.short_description ?? '' }}
          />

          {/* Quantity Selector */}
          <div className="flex gap-2">
            {/* Quantity Selector */}
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-9 border rounded-md flex items-center justify-center hover:bg-gray-50"
              >
                <Minus className="h-4 w-4" />
              </button>

              <Input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Number.parseInt(e.target.value) || 1)
                }
                className="w-12 text-center p-0"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-9 border rounded-md flex items-center justify-center hover:bg-gray-50"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button
              className="bg-primary px-3 hover:bg-[#fda757] text-white font-semibold"
              onClick={() => {
                let cartProduct = { ...product, quantity: quantity || 1 };
                addToCart(cartProduct);
              }}
            >
              {t("AddToCart")}
            </Button>
            <Button
              className="bg-primary px-3 hover:bg-[#fda757] text-white font-semibold"
              onClick={() => console.log("Buy now")}
            >
              {t("BuyNow")}
            </Button>
          </div>

          {/* Compare and Wishlist */}
          <div className="flex gap-6 font-semibold text-sm text-[#333]">
            <button className="flex items-center gap-2 hover:text-[#777]" onClick={() => setCheckedOptions({ ...checkedOptions, compare: true })}>
              {checkedOptions.compare ? <Check size={16} strokeWidth={1.5} /> : <ArrowLeftRight className="w-4 h-4" />}
              {checkedOptions.compare ? t("compared") : t("compare")}
            </button>
            <button className="flex items-center gap-2 hover:text-[#777]" onClick={() => setCheckedOptions({ ...checkedOptions, wishlist: true })}>
              {checkedOptions.wishlist ? <Check size={16} strokeWidth={1.5} /> : <Heart className="w-4 h-4" />}
              {checkedOptions.wishlist ? t("addedWishlist") : t("addToWishList")}
            </button>
          </div>

          <div className="w-full h-[1px] bg-lightGray/20" />
          {/* Product Info */}
          <div className="space-y-4 pt-4">
            <span className="text-[#333]"><span className="font-semibold">{t("SKU")}: </span> {product?.sku || t("N/A")}</span>
            <div className="flex gap-2">
              <span className="text-lightBlack font-semibold">{t("Categories")}:</span>
              {
                product?.categories?.map((category: any, index: number) => (
                  <div className="flex items-center gap-1 text-lightBlack text-sm">
                    <Link
                      href={getCategoryPathByIdFromRecord(category.id, slugToCategoryRecord)}
                      key={category.id}
                      className="hover:text-primary"
                    >
                      {category.name}
                    </Link>
                    {index < product.categories.length - 1 && ","}
                  </div>
                ))
              }

            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#333]">{t("Share")}:</span>
              <div className="flex gap-2 text-black/80">
                <Link href={shareLinks.facebook} target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-[#fdb777]"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href={shareLinks.mail} target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-[#fdb777]"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href={shareLinks.linkedin} target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-[#fdb777]"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href={shareLinks.whatsapp} target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-[#fdb777]"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </Button>
                </Link>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className="mt-16">
        {product?.table_tabs_expanded && product.table_tabs_expanded.length > 0 && (
          <Tabs defaultValue={product.table_tabs_expanded[0].title} className="w-full">
            <TabsList className="w-full border-b rounded-none h-auto p-0 bg-transparent">
              <div className="flex gap-8">
                {product.table_tabs_expanded.map((item: any) => (
                  <TabsTrigger
                    key={item.title}
                    value={item.title}
                    className="border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary pb-4 px-0 rounded-none text-lg font-medium text-[#333]"
                  >
                    {item.title}
                  </TabsTrigger>
                ))}

              </div>
            </TabsList>

            {product.table_tabs_expanded.map((item: any) => (
              <TabsContent
                key={item.title}
                value={item.title}
                className="pt-8"
              >
                <div className="prose max-w-none">
                  <div className="expanded_table" dangerouslySetInnerHTML={{ __html: item?.expanded_content ?? '' }} />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>

      {/* Product Specifications */}
      {/* <div className="mt-16">
        <div className="flex justify-between py-4 border-b">
          <span>Pot Size</span>
          <span>40CM</span>
        </div>
      </div> */}
    </div>
  );
}
