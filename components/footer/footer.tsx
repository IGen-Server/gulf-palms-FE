import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="sticky bottom-0 bg-primary !min-w-[100vw] h-[507px] -z-10">
      <div className="relative h-full max-w-[1370px] mx-auto">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
              <Image
                src="https://gulfpalms.com/wp-content/uploads/2023/06/GP_Logo-02.png"
                alt="Gulf Palms Logo"
                className="mb-4 "
                height={71}
                width={179}
              />
              <p className="text-sm text-gray-600">
                A concept focused on customer delight, Gulf Palms has been
                striving to bring you closer to nature.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://twitter.com/gulfpalms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/gulfpalms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/gulfpalms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            {/* Our Showrooms */}
            <div>
              <h5 className="font-bold text-gray-800 mb-4">Our Showrooms</h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://gulfpalms.com/en/showrooms/rai-nursery/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Rai Nursery
                  </a>
                </li>
                <li>
                  <a
                    href="https://gulfpalms.com/en/showrooms/wafrah-corporate-showroom/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Wafrah Corporate Showroom
                  </a>
                </li>
                <li>
                  <a
                    href="https://gulfpalms.com/en/showrooms/wafrah-farm-showroom/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Wafrah Farm Showroom
                  </a>
                </li>
                <li>
                  <a
                    href="https://gulfpalms.com/en/showrooms/abdali-ittihad-showroom/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Abdali Ittihad Showroom
                  </a>
                </li>
                <li>
                  <a
                    href="https://gulfpalms.com/en/showrooms/abdali-farm-showroom/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Abdali Farm Showroom
                  </a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h5 className="font-bold text-gray-800 mb-4">Useful Links</h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://gulfpalms.com/en/privacy-policy/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://gulfpalms.com/en/refund_returns/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Refund and Returns Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://gulfpalms.com/en/terms-conditions/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://gulfpalms.com/en/contact-us/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h5 className="font-bold text-gray-800 mb-4">
                Product Categories
              </h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://gulfpalms.com/en/product-category/tissue-culture-palms/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Tissue Culture Palms
                  </a>
                </li>
                <li>
                  <a
                    href="https://gulfpalms.com/en/product-category/ornamental-plants/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Ornamental Plants
                  </a>
                </li>
                <li>
                  <a
                    href="https://gulfpalms.com/en/product-category/citruses-trees/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Citrus Trees
                  </a>
                </li>
                <li>
                  <a
                    href="https://gulfpalms.com/en/product-category/fertilizers/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Fertilizers
                  </a>
                </li>
                <li>
                  <a
                    href="https://gulfpalms.com/en/product-category/fruits-trees/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Fruit Trees
                  </a>
                </li>
                <li>
                  <a
                    href="https://gulfpalms.com/en/product-category/indoor-plants/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Indoor Plants
                  </a>
                </li>
                <li>
                  <a
                    href="https://gulfpalms.com/en/product-category/pots/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Pots & Bags
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t pt-4 absolute bottom-0 w-full">
          <div className="container mx-auto flex justify-between items-center">
            <small className="text-gray-600">
              Copyright &copy; 2024 <strong>Gulf Palms</strong> | All Rights
              Reserved | Designed by{" "}
              <a
                href="https://gogoogle.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 font-bold"
              >
                Go Google
              </a>
            </small>
            <Image
              src="https://gulfpalms.com/wp-content/uploads/2023/09/payyments-methood.png"
              alt="Payment Methods"
              width={262}
              height={33}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
