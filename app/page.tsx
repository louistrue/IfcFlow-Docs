"use client"

import { useState, useCallback, useRef } from "react"
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  Panel,
  type Connection,
  type NodeTypes,
} from "reactflow"
import "reactflow/dist/style.css"
import { Sidebar } from "@/components/sidebar"
import { PropertiesPanel } from "@/components/properties-panel"
import { IfcNode } from "@/components/nodes/ifc-node"
import { GeometryNode } from "@/components/nodes/geometry-node"
import { FilterNode } from "@/components/nodes/filter-node"
import { TransformNode } from "@/components/nodes/transform-node"
import { ViewerNode } from "@/components/nodes/viewer-node"
import { Toolbar } from "@/components/toolbar"

// Define custom node types
const nodeTypes: NodeTypes = {
  ifcNode: IfcNode,
  geometryNode: GeometryNode,
  filterNode: FilterNode,
  transformNode: TransformNode,
  viewerNode: ViewerNode,
}

export default function Home() {
  // Initial nodes and edges
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [selectedNode, setSelectedNode] = useState(null)
  const reactFlowWrapper = useRef(null)
  const [reactFlowInstance, setReactFlowInstance] = useState(null)

  // Handle connections between nodes
  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds))
    },
    [setEdges],
  )

  // Handle node selection for properties panel
  const onNodeClick = useCallback((_, node) => {
    setSelectedNode(node)
  }, [])

  // Handle dropping new nodes from the sidebar
  const onDragOver = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onDrop = useCallback(
    (event) => {
      event.preventDefault()

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
      const type = event.dataTransfer.getData("application/reactflow")

      // Check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })

      // Create a new node
      const newNode = {
        id: `${type}-${Date.now()}`,
        type,
        position,
        data: { label: `${type} node`, properties: {} },
      }

      setNodes((nds) => nds.concat(newNode))
    },
    [reactFlowInstance, setNodes],
  )

  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Toolbar />
        <div className="flex-1 h-full" ref={reactFlowWrapper}>
          <ReactFlowProvider>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onNodeClick={onNodeClick}
              nodeTypes={nodeTypes}
              fitView
              snapToGrid
              snapGrid={[15, 15]}
            >
              <Controls />
              <Background color="#aaa" gap={16} />
              <Panel position="bottom-right">
                <div className="bg-card rounded-md p-2 text-xs text-muted-foreground">Grasshopper for IFC - v0.1.0</div>
              </Panel>
            </ReactFlow>
          </ReactFlowProvider>
        </div>
      </div>
      {selectedNode && <PropertiesPanel node={selectedNode} setNodes={setNodes} />}
    </div>
  )
}

