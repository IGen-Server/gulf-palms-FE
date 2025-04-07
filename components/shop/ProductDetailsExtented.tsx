"use client"

import { useState, useEffect, useMemo } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import RenderImageAndProducts from "../common/RenderImageAndProducts"
import { extractCurrency } from "@/services/utility/utility.service"
import { useCart } from "@/providers/CartProvider"
import { ProductCategoryModel } from "@/models/product/product"
import { DirectionProvider } from "@radix-ui/react-direction"
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service"
import { ProductService } from "@/services/api/product.service"
import { useTranslation } from "react-i18next";
import { Loader2 } from "lucide-react";

interface ProductDetailsProps {
  currentProduct: any;
  recommendedProducts: any[],
  slugToCategoryRecord: Record<number, ProductCategoryModel>;
}

interface DotProps {
  active: boolean;
  onClick: () => void;
}

interface VariationData {
  productId: number;
  variations: any[];
}

export function ProductDetailsExtended({
  currentProduct,
  recommendedProducts,
  slugToCategoryRecord
}: ProductDetailsProps) {
  // Replace the selectedProducts state initialization with this
  const [selectedProducts, setSelectedProducts] = useState<any[]>(() => {
    const allProducts = [currentProduct, ...recommendedProducts.filter(product => product !== null)];
    return allProducts.map(product => ({
      ...product,
      price: Number(product?.price || 0),
      image: product?.images[0]?.src || 'https://gulfpalms.com/wp-content/uploads/2023/08/Hibiscus-300x300.jpg'
    }));
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, i18n: { language } } = useTranslation("common");

  console.log(selectedProducts);


  const { addToCart } = useCart();

  // Add this new state for tracking variants per product
  const [selectedVariants, setSelectedVariants] = useState<Record<number, string>>({});
  const [variationsData, setVariationsData] = useState<any[]>([]);
  // const selectedVariationDetails = options.find((variation: any) => variation.id === selectedVariant);
  const axiosInstanceWithoutLoader = CreateAxiosInstanceWithLoader(false, false);
  const [variationsDataMap, setVariationsDataMap] = useState<Record<number, any[]>>({});
  const [variantsLoading, setVariantsLoading] = useState(false);

  useEffect(() => {
    const getVariationsForProducts = async () => {
      setVariantsLoading(true);
      try {
        const variationPromises = [currentProduct, ...recommendedProducts]
          .filter(product => product !== null && product.variations?.length > 0)
          .map(async (product) => {
            const response = await ProductService.GetVariants(
              product.id,
              product.variations,
              axiosInstanceWithoutLoader
            );
            return {
              productId: product.id,
              variations: response
            } as VariationData;
          });

        const variations = await Promise.all(variationPromises);

        // Convert array to map for easier access
        const variationsMap = variations.reduce((acc, curr) => {
          acc[curr.productId] = curr.variations;
          return acc;
        }, {} as Record<number, any[]>);

        setVariationsDataMap(variationsMap);
      } catch (error) {
        console.error('Error fetching variations:', error);
      } finally {
        setVariantsLoading(false);
      }
    };

    getVariationsForProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recommendedProducts]);

  // Update the totalPrice calculation
  const totalPrice = useMemo(() => {
    return selectedProducts.reduce((sum, product) => {
      // Get variation price if available
      const variationId = selectedVariants[product.id];
      if (variationId) {
        const variation = variationsDataMap[product.id]?.find(v => v.id === variationId);
        return sum + Number(variation?.price || product.price || 0);
      }
      return sum + Number(product.price || 0);
    }, 0);
  }, [selectedProducts, selectedVariants, variationsDataMap]);

  const chunkArray = (array: any[], size: number = 3) => {
    return array.length > 0
      ? Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
        array.slice(i * size, i * size + size)
      )
      : []
  }

  const productChunks = chunkArray(
    [currentProduct, ...recommendedProducts.filter(product => product !== null)],
    3
  );

  const findSlideIndexForProduct = (productId: number) => {
    return productChunks.findIndex(chunk =>
      chunk.some(product => product?.id === productId)
    );
  };

  const handleAddToCart = () => {
    // Check for products with variants but no selection
    const productsWithUnselectedVariants = selectedProducts.filter(product =>
      product.variations?.length > 0 && !selectedVariants[product.id]
    );

    if (productsWithUnselectedVariants.length > 0) {
      // Show alert for unselected variants
      alert("Please select some product options before adding this product to your cart.");
      return;
    }

    // Add all selected products at once
    const productsToAdd = selectedProducts.map(product => ({
      ...product,
      bundleId: currentProduct.id, // Add a common bundleId to group the items
      quantity: 1
    }));

    console.log("Adding products to cart:", productsToAdd);

    productsToAdd.forEach(product => {
      addToCart(product);
    });

    // You might want to add a toast/notification here to confirm multiple items were added
  }

  const nextSlide = (): void => {
    if (language === "ar") {
      setCurrentSlide((prev: number) => Math.max(prev - 1, 0));
    } else {
      setCurrentSlide((prev: number) => Math.min(prev + 1, productChunks.length - 1));
    }
  }

  const prevSlide = (): void => {
    if (language === "ar") {
      setCurrentSlide((prev: number) => Math.min(prev + 1, productChunks.length - 1));
    } else {
      setCurrentSlide((prev: number) => Math.max(prev - 1, 0));
    }
  }

  const Dot: React.FC<DotProps> = ({ active, onClick }) => (
    <button
      className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${active ? 'bg-primary w-4' : 'bg-gray-300'
        }`}
      onClick={onClick}
    />
  );

  return (
    <div className="w-full max-w-6xl mx-auto mb-16 border-t">
      {/* Tabs section remains unchanged */}

      {/* Frequently Bought Together Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Frequently bought together</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Slider */}
          <div className="w-full lg:w-2/3 relative flex flex-col items-center">
            <div className="relative flex items-center w-full">
              <button
                onClick={prevSlide}
                className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="h-6 w-6 text-gray-500" />
              </button>

              <div className="overflow-hidden mx-8">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {productChunks.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="flex flex-shrink-0 w-full justify-center gap-4">
                      {chunk.filter((product) => product !== null).map((product, index) => (
                        // In the slider section, update the RenderImageAndProducts wrapper:
                        <div
                          key={product.id}
                          className={`w-[200px] flex-shrink-0 relative transition-opacity duration-300 ${selectedProducts.some((p) => p.id === product.id)
                            ? 'opacity-100'
                            : 'opacity-50'
                            }`}
                        >
                          <RenderImageAndProducts
                            renderType="product"
                            imageFileOrUrl={""}
                            images={product?.images}
                            name={product?.name}
                            description={product?.short_description}
                            slug={product?.slug}
                            price={product.price}
                            currency={extractCurrency(product.price_html)}
                            productId={product.id}
                            currentCategories={product.categories}
                            productAttribute={product.attributes ? product.attributes[0] : {}}
                            variations={product.variationsData}
                            slugToCategoryRecord={slugToCategoryRecord}
                          />
                          {index > 0 && (
                            <Plus className="absolute top-1/2 -left-5 h-6 w-6 text-gray-400 z-[200]" />
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide >= productChunks.length - 1}
              >
                <ChevronRight className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <div className="flex justify-center mt-4">
              {productChunks.map((_, index) => (
                <Dot
                  key={index}
                  active={currentSlide === index}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Selection Panel */}
          <div className="w-full lg:w-1/3 p-4 sm:p-6 border rounded-lg bg-gray-50 relative">
            {variantsLoading && (
              <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-50">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            )}
            {[currentProduct, ...recommendedProducts]?.filter((product) => product !== null).map((product) => {

              return (
                <div key={product.id} className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 mb-2">
                      <Checkbox
                        checked={selectedProducts.some((p) => p.id === product.id)}
                        onCheckedChange={(checked) => {
                          // Prevent unchecking if it's the current product
                          if (product.id === currentProduct.id) return;

                          if (checked) {
                            setSelectedProducts([...selectedProducts, {
                              ...product,
                              price: Number(product?.price || 0),
                              image: product?.images[0]?.src || 'https://gulfpalms.com/wp-content/uploads/2023/08/Hibiscus-300x300.jpg'
                            }]);
                          } else {
                            setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
                          }
                          // Navigate to the slide containing this product
                          const slideIndex = findSlideIndexForProduct(product.id);
                          if (slideIndex !== -1) {
                            setCurrentSlide(slideIndex);
                          }
                        }}
                        disabled={product.id === currentProduct.id} // Disable checkbox for current product
                      />
                      <div className="flex justify-between items-start gap-2 flex-1">
                        <span className="text-xs sm:text-sm font-medium">{product.name}</span>
                        <span className="text-orange-400 font-semibold text-xs sm:text-sm whitespace-nowrap">
                          {(() => {
                            const variationId = selectedVariants[product.id];
                            if (variationId) {
                              const variation = variationsDataMap[product.id]?.find(v => v.id === variationId);
                              return `${variation?.price || product.price}`;
                            }
                            return product.price;
                          })()} {extractCurrency(product.price_html)}
                        </span>
                      </div>
                    </div>
                    {/* // In the product selection panel, update the variations check: */}
                    {product && product.variations?.length > 0 && (
                      <DirectionProvider dir={language === "en" ? "ltr" : "rtl"}>
                        <Select
                          value={selectedVariants[product.id] || ""}
                          onValueChange={(value) => {
                            setSelectedVariants(prev => ({
                              ...prev,
                              [product.id]: value
                            }));
                            // Update selected products with variation data
                            setSelectedProducts(prev => prev.map(p => {
                              if (p.id === product.id) {
                                const variation = variationsDataMap[product.id]?.find(v => v.id === value);
                                return {
                                  ...p,
                                  price: Number(variation?.price || p.price || 0),
                                  variation_id: value,
                                  attributes: variation?.attributes || []
                                };
                              }
                              return p;
                            }));
                          }}
                          disabled={variantsLoading || !selectedProducts.some(p => p.id === product.id)}
                        >
                          <SelectTrigger className="w-full bg-white border-gray-300">
                            <SelectValue placeholder={t("Choose_an_option")} />
                          </SelectTrigger>
                          <SelectContent>
                            {variationsDataMap[product.id]?.map((option) => (
                              <SelectItem key={option.id} value={option.id}>
                                {option.name} {option.price && `- ${option.price} KD`}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </DirectionProvider>
                    )}
                  </div>
                </div>
              )
            })}

            <div className="mt-4 sm:mt-6 pt-4 border-t">
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                For {selectedProducts.length} item{selectedProducts.length !== 1 ? "s" : ""}
              </p>
              <p className="text-xl sm:text-2xl font-bold text-orange-400 mb-4">
                {typeof totalPrice === "number" ? totalPrice.toFixed(3) : ""} KD
              </p>
              <Button
                className="w-full bg-[#fdb777] hover:bg-[#fda757] text-white h-8 sm:h-10 text-xs sm:text-sm"
                disabled={selectedProducts.length === 0}
                onClick={handleAddToCart}
              >
                {t("shop.addToCart")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

