"use client"

import { Copy, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { generateNginxConfig } from "@/lib/generate-config"
import type { ConfigType } from "@/lib/types"

interface ConfigPreviewProps {
  config: ConfigType
  onCopy: () => void
  onDownload: () => void
  copied: boolean
}

export function ConfigPreview({ config, onCopy, onDownload, copied }: ConfigPreviewProps) {
  return (
    <Card className="sticky top-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Generated Configuration</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onCopy}>
              {copied ? "Copied!" : "Copy"}
              <Copy className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={onDownload}>
              Download
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <pre className="bg-muted p-4 rounded-md overflow-auto max-h-[calc(100vh-250px)] text-sm">
            <code className="text-foreground">{generateNginxConfig(config)}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  )
}

