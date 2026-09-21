import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ReactFlow, Background, BackgroundVariant, type Node, type Edge } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { flowNodes, flowEdges } from '../../data/flowchart'
import { StartNode, DecisionNode, ActionNode } from './nodes'

const nodeTypes = { start: StartNode, decision: DecisionNode, action: ActionNode }

export default function LifeFlowchart() {
  const nodes: Node[] = useMemo(
    () =>
      flowNodes.map((n, index) => ({
        id: n.id,
        type: n.kind,
        position: { x: n.x, y: n.y },
        data: { label: n.label, index },
        draggable: true,
      })),
    [],
  )

  const edges: Edge[] = useMemo(
    () =>
      flowEdges.map((e) => ({
        id: e.id,
        source: e.source,
        target: e.target,
        label: e.label,
        type: e.loop ? 'default' : 'smoothstep',
        animated: true,
        pathOptions: e.loop ? { curvature: 0.7 } : undefined,
        style: {
          stroke: e.loop ? '#c084fc' : '#60a5fa',
          strokeWidth: 2,
          strokeDasharray: e.loop ? '6 4' : undefined,
        },
        labelStyle: { fill: '#e2e8f0', fontSize: 11, fontWeight: 600 },
        labelBgStyle: { fill: '#0d1220', fillOpacity: 0.85 },
      })),
    [],
  )

  return (
    <section id="philosophy" className="mx-auto max-w-4xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-2 text-3xl font-bold text-text"
      >
        How I Approach Life
      </motion.h2>
      <p className="mb-8 text-text-muted">
        Drag the nodes around — the diagram runs on its own, but it's yours to explore.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="h-[560px] w-full overflow-hidden rounded-2xl border border-border bg-surface"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          colorMode="dark"
          fitView
          fitViewOptions={{ padding: 0.2 }}
          nodesConnectable={false}
          edgesFocusable={false}
        >
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#1e293b" />
        </ReactFlow>
      </motion.div>
    </section>
  )
}
