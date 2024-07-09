const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })

const nextConfig = {
    output: "export",
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'mdx']
};

module.exports = withMDX(nextConfig)
