/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["gulfpalms.com", "portal.myfatoorah.com", "gulfpalmswp.igenserver.agency", "gulfpalmswp.igenserver.agency", "clone.gulfpalms.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules[\\/]react-slick[\\/]/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    });
    return config;
  },
};

export default nextConfig;
