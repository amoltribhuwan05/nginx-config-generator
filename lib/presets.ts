import type { ConfigType } from "./types"

interface Preset {
  name: string
  description: string
  config: Partial<ConfigType>
}

export const presets: Record<string, Preset> = {
  staticWebsite: {
    name: "Static Website",
    description: "Basic configuration for serving static files",
    config: {
      serverName: "example.com www.example.com",
      port: "80",
      sslEnabled: false,
      gzipEnabled: true,
      locations: [
        {
          path: "/",
          root: "/var/www/html",
          index: "index.html index.htm",
          tryFiles: "$uri $uri/ =404",
        },
      ],
    },
  },

  nodeJsApp: {
    name: "Node.js Application",
    description: "Proxy configuration for Node.js applications",
    config: {
      serverName: "example.com www.example.com",
      port: "80",
      proxyEnabled: true,
      proxyPass: "http://localhost:3000",
      locations: [
        {
          path: "/",
          root: "",
          index: "",
          tryFiles: "",
        },
      ],
    },
  },

  phpApp: {
    name: "PHP Application",
    description: "Configuration for PHP applications with PHP-FPM",
    config: {
      serverName: "example.com www.example.com",
      port: "80",
      locations: [
        {
          path: "/",
          root: "/var/www/html",
          index: "index.php index.html",
          tryFiles: "$uri $uri/ /index.php?$query_string",
        },
      ],
      serverDirectives:
        "location ~ \\.php$ {\n    include snippets/fastcgi-php.conf;\n    fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;\n}",
    },
  },

  secureServer: {
    name: "Secure Server",
    description: "HTTPS configuration with security headers",
    config: {
      serverName: "example.com www.example.com",
      port: "80",
      sslEnabled: true,
      sslPort: "443",
      sslCertificate: "/etc/nginx/ssl/example.com.crt",
      sslCertificateKey: "/etc/nginx/ssl/example.com.key",
      serverTokens: "off",
      xFrameOptions: "DENY",
      xContentTypeOptions: "nosniff",
      xXSSProtection: "1; mode=block",
      serverDirectives:
        'add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;\nadd_header Content-Security-Policy "default-src \'self\';" always;',
    },
  },

  loadBalancer: {
    name: "Load Balancer",
    description: "Load balancing configuration for multiple backends",
    config: {
      serverName: "example.com www.example.com",
      port: "80",
      httpDirectives:
        "upstream backend {\n    server backend1.example.com weight=5;\n    server backend2.example.com;\n    server backup1.example.com backup;\n}",
      proxyEnabled: true,
      proxyPass: "http://backend",
      locations: [
        {
          path: "/",
          root: "",
          index: "",
          tryFiles: "",
        },
      ],
    },
  },
}

