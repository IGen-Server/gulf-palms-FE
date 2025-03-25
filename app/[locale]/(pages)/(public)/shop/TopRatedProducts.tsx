"use client";

import Image from "next/image"
import { useTranslation } from "react-i18next";
import { arProducts, enProducts } from "./topRatedProductsData";
import Link from "next/link";

const TopRatedProducts = () => {
    const { t, i18n: { language } } = useTranslation("common");

    const topRatedProducts = language === "en" ? enProducts : arProducts;

    return (
        <div className="mt-7 mb-14">
            <p className="mt-7 mb-2 uppercase font-semibold text-[16px] text-[#333]">{t("shop.topRatedProducts")}</p>
            <div className="flex flex-col gap-3 divide-y-2">
                {topRatedProducts.map((product) => (
                    <div key={product.name} className="flex items-center gap-3 pt-3">
                        <Link href={product.link}>
                            <Image src={product.image} alt="Product image" width={65} height={65} />
                        </Link>
                        <div className="flex flex-col gap-2">
                            <Link href={product.link}>
                                <p className="font-semibold text-sm text-[#333] hover:opacity-70">{product.name}</p>
                            </Link>
                            <p className="text-primary text-sm">{language === "en" ? "From" : "من"} {product.price} KD</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default TopRatedProducts