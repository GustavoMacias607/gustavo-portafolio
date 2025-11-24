/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const repoName = 'gustavo-portafolio'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Solo en producción
  ...(isProduction && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  })
}

module.exports = nextConfig