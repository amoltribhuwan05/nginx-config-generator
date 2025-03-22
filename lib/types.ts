export interface LocationBlock {
  path: string
  root: string
  index: string
  tryFiles: string
}

export interface ConfigType {
  // Server basics
  serverName: string
  port: string
  sslEnabled: boolean
  sslPort: string
  sslCertificate: string
  sslCertificateKey: string

  // Performance
  workerProcesses: string
  workerConnections: string
  keepaliveTimeout: string
  clientMaxBodySize: string

  // Logging
  accessLog: string
  errorLog: string
  logFormat: string

  // Gzip
  gzipEnabled: boolean
  gzipCompLevel: number
  gzipTypes: string
  gzipMinLength: string

  // Security
  serverTokens: string
  xFrameOptions: string
  xContentTypeOptions: string
  xXSSProtection: string

  // Proxy
  proxyEnabled: boolean
  proxyPass: string
  proxySetHeader: string[]

  // Caching
  cachingEnabled: boolean
  cacheZoneName: string
  cacheZoneSize: string
  cacheValidTime: string

  // Rate limiting
  rateLimitEnabled: boolean
  rateLimitZone: string
  rateLimitMemory: string
  rateLimitRate: string

  // Locations
  locations: LocationBlock[]

  // Custom directives
  httpDirectives: string
  serverDirectives: string
}

