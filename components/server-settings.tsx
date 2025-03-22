"use client"

import { PlusCircle, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { ConfigType } from "@/lib/types"
import { useState } from "react"

interface ServerSettingsProps {
  config: ConfigType
  onConfigChange: (section: string, field: string, value: any) => void
  onDirectChange: (field: string, value: any) => void
}

export function ServerSettings({ config, onConfigChange, onDirectChange }: ServerSettingsProps) {
  const [locationsOpen, setLocationsOpen] = useState(false)

  const handleLocationChange = (index: number, field: string, value: string) => {
    const newLocations = [...config.locations]
    newLocations[index] = {
      ...newLocations[index],
      [field]: value,
    }
    onDirectChange("locations", newLocations)
  }

  const addLocation = () => {
    onDirectChange("locations", [
      ...config.locations,
      {
        path: "/new-location",
        root: "/var/www/html",
        index: "index.html index.htm",
        tryFiles: "$uri $uri/ =404",
      },
    ])
  }

  const removeLocation = (index: number) => {
    const newLocations = [...config.locations]
    newLocations.splice(index, 1)
    onDirectChange("locations", newLocations)
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Server Settings</CardTitle>
          <CardDescription>Configure basic server settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="serverName">
              Server Name
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="ml-1 cursor-help text-muted-foreground">(?)</TooltipTrigger>
                  <TooltipContent>
                    <p className="w-80">
                      The domain names that this server block should respond to. Separate multiple domains with spaces.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              id="serverName"
              value={config.serverName}
              onChange={(e) => onDirectChange("serverName", e.target.value)}
              placeholder="example.com www.example.com"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="port">HTTP Port</Label>
            <Input
              id="port"
              value={config.port}
              onChange={(e) => onDirectChange("port", e.target.value)}
              placeholder="80"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="sslEnabled"
              checked={config.sslEnabled}
              onCheckedChange={(checked) => onDirectChange("sslEnabled", checked)}
            />
            <Label htmlFor="sslEnabled">Enable SSL/TLS</Label>
          </div>

          {config.sslEnabled && (
            <div className="space-y-4 pl-6 border-l-2 border-primary/20 mt-2">
              <div className="grid gap-2">
                <Label htmlFor="sslPort">SSL Port</Label>
                <Input
                  id="sslPort"
                  value={config.sslPort}
                  onChange={(e) => onDirectChange("sslPort", e.target.value)}
                  placeholder="443"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="sslCertificate">SSL Certificate Path</Label>
                <Input
                  id="sslCertificate"
                  value={config.sslCertificate}
                  onChange={(e) => onDirectChange("sslCertificate", e.target.value)}
                  placeholder="/etc/nginx/ssl/example.com.crt"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="sslCertificateKey">SSL Certificate Key Path</Label>
                <Input
                  id="sslCertificateKey"
                  value={config.sslCertificateKey}
                  onChange={(e) => onDirectChange("sslCertificateKey", e.target.value)}
                  placeholder="/etc/nginx/ssl/example.com.key"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Collapsible open={locationsOpen} onOpenChange={setLocationsOpen} className="space-y-2">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Location Blocks</CardTitle>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  {locationsOpen ? "Hide" : "Show"} Locations
                </Button>
              </CollapsibleTrigger>
            </div>
            <CardDescription>Configure location blocks for different URL paths</CardDescription>
          </CardHeader>

          <CollapsibleContent>
            <CardContent className="space-y-4">
              {config.locations.map((location, index) => (
                <div key={index} className="p-4 border rounded-md space-y-4 bg-muted/30">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Location #{index + 1}</h4>
                    {index > 0 && (
                      <Button variant="destructive" size="sm" onClick={() => removeLocation(index)}>
                        <Trash2 className="h-4 w-4 mr-1" /> Remove
                      </Button>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor={`location-path-${index}`}>Path</Label>
                    <Input
                      id={`location-path-${index}`}
                      value={location.path}
                      onChange={(e) => handleLocationChange(index, "path", e.target.value)}
                      placeholder="/"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor={`location-root-${index}`}>Root</Label>
                    <Input
                      id={`location-root-${index}`}
                      value={location.root}
                      onChange={(e) => handleLocationChange(index, "root", e.target.value)}
                      placeholder="/var/www/html"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor={`location-index-${index}`}>Index</Label>
                    <Input
                      id={`location-index-${index}`}
                      value={location.index}
                      onChange={(e) => handleLocationChange(index, "index", e.target.value)}
                      placeholder="index.html index.htm"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor={`location-try-files-${index}`}>Try Files</Label>
                    <Input
                      id={`location-try-files-${index}`}
                      value={location.tryFiles}
                      onChange={(e) => handleLocationChange(index, "tryFiles", e.target.value)}
                      placeholder="$uri $uri/ =404"
                    />
                  </div>
                </div>
              ))}

              <Button onClick={addLocation} className="w-full" variant="outline">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Location Block
              </Button>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  )
}

