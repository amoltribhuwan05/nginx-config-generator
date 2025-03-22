"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { ConfigType } from "@/lib/types"

interface PerformanceSettingsProps {
  config: ConfigType
  onConfigChange: (section: string, field: string, value: any) => void
  onDirectChange: (field: string, value: any) => void
}

export function PerformanceSettings({ config, onConfigChange, onDirectChange }: PerformanceSettingsProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Worker Settings</CardTitle>
          <CardDescription>Configure Nginx worker processes and connections</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="workerProcesses">
              Worker Processes
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="ml-1 cursor-help text-muted-foreground">(?)</TooltipTrigger>
                  <TooltipContent>
                    <p className="w-80">
                      Sets the number of worker processes. Set to "auto" to use all available CPU cores.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              id="workerProcesses"
              value={config.workerProcesses}
              onChange={(e) => onDirectChange("workerProcesses", e.target.value)}
              placeholder="auto"
            />
            <p className="text-sm text-muted-foreground">Set to "auto" to use all available cores</p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="workerConnections">
              Worker Connections
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="ml-1 cursor-help text-muted-foreground">(?)</TooltipTrigger>
                  <TooltipContent>
                    <p className="w-80">
                      Sets the maximum number of simultaneous connections that can be opened by a worker process.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              id="workerConnections"
              value={config.workerConnections}
              onChange={(e) => onDirectChange("workerConnections", e.target.value)}
              placeholder="1024"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Connection Settings</CardTitle>
          <CardDescription>Configure connection timeouts and limits</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="keepaliveTimeout">Keepalive Timeout (seconds)</Label>
            <Input
              id="keepaliveTimeout"
              value={config.keepaliveTimeout}
              onChange={(e) => onDirectChange("keepaliveTimeout", e.target.value)}
              placeholder="65"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="clientMaxBodySize">
              Client Max Body Size
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="ml-1 cursor-help text-muted-foreground">(?)</TooltipTrigger>
                  <TooltipContent>
                    <p className="w-80">
                      Sets the maximum allowed size of the client request body. This affects file uploads.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              id="clientMaxBodySize"
              value={config.clientMaxBodySize}
              onChange={(e) => onDirectChange("clientMaxBodySize", e.target.value)}
              placeholder="1m"
            />
            <p className="text-sm text-muted-foreground">Use m for MB, g for GB (e.g., 10m, 1g)</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gzip Compression</CardTitle>
          <CardDescription>Configure gzip compression settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="gzipEnabled"
              checked={config.gzipEnabled}
              onCheckedChange={(checked) => onDirectChange("gzipEnabled", checked)}
            />
            <Label htmlFor="gzipEnabled">Enable Gzip Compression</Label>
          </div>

          {config.gzipEnabled && (
            <div className="space-y-4 pl-6 border-l-2 border-primary/20 mt-2">
              <div className="grid gap-2">
                <Label htmlFor="gzipCompLevel">
                  Compression Level (1-9)
                  <span className="ml-2 text-sm text-muted-foreground">Current: {config.gzipCompLevel}</span>
                </Label>
                <div className="pt-2">
                  <Slider
                    id="gzipCompLevel"
                    min={1}
                    max={9}
                    step={1}
                    value={[config.gzipCompLevel]}
                    onValueChange={(value) => onDirectChange("gzipCompLevel", value[0])}
                  />
                </div>
                <p className="text-sm text-muted-foreground">Higher values = better compression but more CPU usage</p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="gzipMinLength">Minimum Length to Compress (bytes)</Label>
                <Input
                  id="gzipMinLength"
                  value={config.gzipMinLength}
                  onChange={(e) => onDirectChange("gzipMinLength", e.target.value)}
                  placeholder="1000"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="gzipTypes">MIME Types to Compress</Label>
                <Textarea
                  id="gzipTypes"
                  value={config.gzipTypes}
                  onChange={(e) => onDirectChange("gzipTypes", e.target.value)}
                  placeholder="text/plain text/css application/json..."
                  rows={3}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

