"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import type { ConfigType } from "@/lib/types"
import { useState } from "react"

interface AdvancedSettingsProps {
  config: ConfigType
  onConfigChange: (section: string, field: string, value: any) => void
  onDirectChange: (field: string, value: any) => void
}

export function AdvancedSettings({ config, onConfigChange, onDirectChange }: AdvancedSettingsProps) {
  const [customDirectivesOpen, setCustomDirectivesOpen] = useState(false)

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Proxy Settings</CardTitle>
          <CardDescription>Configure proxy settings for your server</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="proxyEnabled"
              checked={config.proxyEnabled}
              onCheckedChange={(checked) => onDirectChange("proxyEnabled", checked)}
            />
            <Label htmlFor="proxyEnabled">Enable Proxy</Label>
          </div>

          {config.proxyEnabled && (
            <div className="space-y-4 pl-6 border-l-2 border-primary/20 mt-2">
              <div className="grid gap-2">
                <Label htmlFor="proxyPass">Proxy Pass URL</Label>
                <Input
                  id="proxyPass"
                  value={config.proxyPass}
                  onChange={(e) => onDirectChange("proxyPass", e.target.value)}
                  placeholder="http://localhost:3000"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="proxySetHeader">Proxy Headers</Label>
                <Textarea
                  id="proxySetHeader"
                  value={config.proxySetHeader.join("\n")}
                  onChange={(e) => onDirectChange("proxySetHeader", e.target.value.split("\n"))}
                  placeholder="Host $host
X-Real-IP $remote_addr"
                  rows={4}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Caching Settings</CardTitle>
          <CardDescription>Configure caching for your server</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="cachingEnabled"
              checked={config.cachingEnabled}
              onCheckedChange={(checked) => onDirectChange("cachingEnabled", checked)}
            />
            <Label htmlFor="cachingEnabled">Enable Caching</Label>
          </div>

          {config.cachingEnabled && (
            <div className="space-y-4 pl-6 border-l-2 border-primary/20 mt-2">
              <div className="grid gap-2">
                <Label htmlFor="cacheZoneName">Cache Zone Name</Label>
                <Input
                  id="cacheZoneName"
                  value={config.cacheZoneName}
                  onChange={(e) => onDirectChange("cacheZoneName", e.target.value)}
                  placeholder="my_cache"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="cacheZoneSize">Cache Zone Size</Label>
                <Input
                  id="cacheZoneSize"
                  value={config.cacheZoneSize}
                  onChange={(e) => onDirectChange("cacheZoneSize", e.target.value)}
                  placeholder="10m"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="cacheValidTime">Cache Valid Time</Label>
                <Input
                  id="cacheValidTime"
                  value={config.cacheValidTime}
                  onChange={(e) => onDirectChange("cacheValidTime", e.target.value)}
                  placeholder="60m"
                />
                <p className="text-sm text-muted-foreground">Examples: 60m (60 minutes), 12h (12 hours), 1d (1 day)</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Logging Settings</CardTitle>
          <CardDescription>Configure logging for your server</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="accessLog">Access Log Path</Label>
            <Input
              id="accessLog"
              value={config.accessLog}
              onChange={(e) => onDirectChange("accessLog", e.target.value)}
              placeholder="/var/log/nginx/access.log"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="errorLog">Error Log Path</Label>
            <Input
              id="errorLog"
              value={config.errorLog}
              onChange={(e) => onDirectChange("errorLog", e.target.value)}
              placeholder="/var/log/nginx/error.log"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="logFormat">Log Format</Label>
            <Select value={config.logFormat} onValueChange={(value) => onDirectChange("logFormat", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select log format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="combined">Combined</SelectItem>
                <SelectItem value="main">Main</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Collapsible open={customDirectivesOpen} onOpenChange={setCustomDirectivesOpen} className="space-y-2">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Custom Directives</CardTitle>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  {customDirectivesOpen ? "Hide" : "Show"} Directives
                </Button>
              </CollapsibleTrigger>
            </div>
            <CardDescription>Add custom directives to your configuration</CardDescription>
          </CardHeader>

          <CollapsibleContent>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="httpDirectives">HTTP Block Directives</Label>
                <Textarea
                  id="httpDirectives"
                  value={config.httpDirectives}
                  onChange={(e) => onDirectChange("httpDirectives", e.target.value)}
                  placeholder="# Add custom HTTP directives here
resolver 8.8.8.8;
proxy_connect_timeout 60s;"
                  rows={5}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="serverDirectives">Server Block Directives</Label>
                <Textarea
                  id="serverDirectives"
                  value={config.serverDirectives}
                  onChange={(e) => onDirectChange("serverDirectives", e.target.value)}
                  placeholder="# Add custom server directives here
add_header Strict-Transport-Security 'max-age=31536000';
error_page 404 /404.html;"
                  rows={5}
                />
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  )
}

