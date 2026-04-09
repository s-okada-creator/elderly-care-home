/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            // クリックジャッキング防止: 他サイトのiframeに埋め込まれるのを防ぐ
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            // MIMEタイプのスニッフィング防止
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            // リファラー情報の漏洩を制限
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            // XSSフィルター有効化（レガシーブラウザ向け）
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            // HTTPS強制（1年間）
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            // 権限ポリシー: 不要なブラウザ機能を無効化
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            // Content Security Policy
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self'",
              "frame-src https://www.google.com https://maps.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
