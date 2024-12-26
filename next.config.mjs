/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['gulfpalms.com'], // Add your image domains
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.js$/,
            include: /node_modules[\\/]react-slick[\\/]/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
        });
        return config;
    },
};

export default nextConfig;
