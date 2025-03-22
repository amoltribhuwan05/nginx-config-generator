import type { ConfigType } from "./types"

export const defaultConfig: ConfigType = {
  // Server basics
  serverName: "example.com www.example.com",
  port: "80",
  sslEnabled: false,
  sslPort: "443",
  sslCertificate: "/etc/nginx/ssl/example.com.crt",
  sslCertificateKey: "/etc/nginx/ssl/example.com.key",

  // Performance
  workerProcesses: "auto",
  workerConnections: "1024",
  keepaliveTimeout: "65",
  clientMaxBodySize: "1m",

  // Logging
  accessLog: "/var/log/nginx/access.log",
  errorLog: "/var/log/nginx/error.log",
  logFormat: "combined",

  // Gzip
  gzipEnabled: true,
  gzipCompLevel: 6,
  gzipTypes:
    "text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript",
  gzipMinLength: "1000",

  // Security
  serverTokens: "off",
  xFrameOptions: "SAMEORIGIN",
  xContentTypeOptions: "nosniff",
  xXSSProtection: "1; mode=block",

  // Proxy
  proxyEnabled: false,
  proxyPass: "http://localhost:3000",
  proxySetHeader: [
    "Host $host",
    "X-Real-IP $remote_addr",
    "X-Forwarded-For $proxy_add_x_forwarded_for",
    "X-Forwarded-Proto $scheme",
  ],

  // Caching
  cachingEnabled: false,
  cacheZoneName: "my_cache",
  cacheZoneSize: "10m",
  cacheValidTime: "60m",

  // Rate limiting
  rateLimitEnabled: false,
  rateLimitZone: "limit_per_ip",
  rateLimitMemory: "10m",
  rateLimitRate: "1r/s",

  // Locations
  locations: [
    {
      path: "/",
      root: "/var/www/html",
      index: "index.html index.htm",
      tryFiles: "$uri $uri/ =404",
    },
  ],

  // Custom directives
  httpDirectives: "",
  serverDirectives: "",
}

