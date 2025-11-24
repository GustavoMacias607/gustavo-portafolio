
/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const repoName = 'gustavo-portafolio'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  ...(isProduction && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  })
}

module.exports = nextConfig
