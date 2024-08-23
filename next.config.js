const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })

const nextConfig = {
    output: "export",
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'mdx'],
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/hackathon',
                has: [
                    {
                        type: 'host',
                        value: 'hackathon.yoces.ca',
                    },
                ],
            },
        ];
    },
};

module.exports = withMDX(nextConfig)
