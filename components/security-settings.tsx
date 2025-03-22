"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { ConfigType } from "@/lib/types"

interface SecuritySettingsProps {
  config: ConfigType
  onConfigChange: (section: string, field: string, value: any) => void
  onDirectChange: (field: string, value: any) => void
}

export function SecuritySettings({ config, onConfigChange, onDirectChange }: SecuritySettingsProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Security Headers</CardTitle>
          <CardDescription>Configure HTTP security headers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="serverTokens">Server Tokens</Label>
            <Select value={config.serverTokens} onValueChange={(value) => onDirectChange("serverTokens", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select server tokens setting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="on">On (Show Nginx Version)</SelectItem>
                <SelectItem value="off">Off (Hide Nginx Version)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">Hiding the version improves security</p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="xFrameOptions">X-Frame-Options</Label>
            <Select value={config.xFrameOptions} onValueChange={(value) => onDirectChange("xFrameOptions", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select X-Frame-Options setting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="DENY">DENY</SelectItem>
                <SelectItem value="SAMEORIGIN">SAMEORIGIN</SelectItem>
                <SelectItem value="ALLOW-FROM">ALLOW-FROM</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">Protects against clickjacking attacks</p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="xContentTypeOptions">X-Content-Type-Options</Label>
            <Select
              value={config.xContentTypeOptions}
              onValueChange={(value) => onDirectChange("xContentTypeOptions", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select X-Content-Type-Options setting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nosniff">nosniff</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">Prevents MIME type sniffing</p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="xXSSProtection">X-XSS-Protection</Label>
            <Select value={config.xXSSProtection} onValueChange={(value) => onDirectChange("xXSSProtection", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select X-XSS-Protection setting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0 (Disabled)</SelectItem>
                <SelectItem value="1">1 (Enabled)</SelectItem>
                <SelectItem value="1; mode=block">1; mode=block</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">Enables XSS filtering in browsers</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rate Limiting</CardTitle>
          <CardDescription>Protect against brute force and DDoS attacks</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="rateLimitEnabled"
              checked={config.rateLimitEnabled}
              onCheckedChange={(checked) => onDirectChange("rateLimitEnabled", checked)}
            />
            <Label htmlFor="rateLimitEnabled">Enable Rate Limiting</Label>
          </div>

          {config.rateLimitEnabled && (
            <div className="space-y-4 pl-6 border-l-2 border-primary/20 mt-2">
              <div className="grid gap-2">
                <Label htmlFor="rateLimitZone">
                  Rate Limit Zone Name
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="ml-1 cursor-help text-muted-foreground">(?)</TooltipTrigger>
                      <TooltipContent>
                        <p className="w-80">A unique name for the rate limiting zone.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Input
                  id="rateLimitZone"
                  value={config.rateLimitZone}
                  onChange={(e) => onDirectChange("rateLimitZone", e.target.value)}
                  placeholder="limit_per_ip"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="rateLimitMemory">Zone Memory Size</Label>
                <Input
                  id="rateLimitMemory"
                  value={config.rateLimitMemory}
                  onChange={(e) => onDirectChange("rateLimitMemory", e.target.value)}
                  placeholder="10m"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="rateLimitRate">Rate Limit</Label>
                <Input
                  id="rateLimitRate"
                  value={config.rateLimitRate}
                  onChange={(e) => onDirectChange("rateLimitRate", e.target.value)}
                  placeholder="1r/s"
                />
                <p className="text-sm text-muted-foreground">
                  Examples: 1r/s (1 request per second), 60r/m (60 requests per minute)
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

