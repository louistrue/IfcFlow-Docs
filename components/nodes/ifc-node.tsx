"use client"

import { memo } from "react"
import { Handle, Position } from "reactflow"
import { FileUp } from "lucide-react"

export const IfcNode = memo(({ data, isConnectable }) => {
  return (
    <div className="bg-white border-2 border-blue-500 rounded-md w-48 shadow-md">
      <div className="bg-blue-500 text-white px-3 py-1 flex items-center gap-2">
        <FileUp className="h-4 w-4" />
        <div className="text-sm font-medium truncate">{data.label}</div>
      </div>
      <div className="p-3 text-xs">
        {data.properties?.file ? (
          <div className="truncate">{data.properties.file}</div>
        ) : (
          <div className="text-muted-foreground">No file selected</div>
        )}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="output"
        style={{ background: "#555", width: 8, height: 8 }}
        isConnectable={isConnectable}
      />
    </div>
  )
})

IfcNode.displayName = "IfcNode"

