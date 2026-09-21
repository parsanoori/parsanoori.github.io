import { memo } from 'react'
import { Handle, Position, type NodeProps } from '@xyflow/react'
import { motion } from 'framer-motion'

type FlowNodeData = {
  label: string
  index: number
  extraHandle?: { type: 'source' | 'target'; position: 'left' | 'right'; id: string }
}

const extraHandlePosition = { left: Position.Left, right: Position.Right }

function ExtraHandle({ extraHandle }: { extraHandle?: FlowNodeData['extraHandle'] }) {
  if (!extraHandle) return null
  return (
    <Handle
      type={extraHandle.type}
      position={extraHandlePosition[extraHandle.position]}
      id={extraHandle.id}
      className="!bg-fuchsia-400"
    />
  )
}

const enter = (index: number) => ({
  initial: { opacity: 0, scale: 0.6 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.4, delay: index * 0.12, type: 'spring' as const, stiffness: 200 },
})

export const StartNode = memo(({ data }: NodeProps) => {
  const { label, index } = data as unknown as FlowNodeData
  return (
    <motion.div
      {...enter(index)}
      className="rounded-full border-2 border-accent-light bg-accent/20 px-5 py-3 text-center text-sm font-semibold text-text shadow-[0_0_20px_rgba(96,165,250,0.25)]"
    >
      {label}
      <Handle type="source" position={Position.Bottom} className="!bg-accent-light" />
    </motion.div>
  )
})

// A square of side S rotated 45° has its vertices at S/√2 from center, so the
// wrapper must be S*√2 wide for Top/Bottom/Left/Right handles (placed at the
// wrapper's edges) to land exactly on the diamond's tips instead of floating
// inside its rotated silhouette.
const DIAMOND_SIDE = 112
const DIAMOND_BOUNDS = Math.round(DIAMOND_SIDE * Math.SQRT2)

export const DecisionNode = memo(({ data }: NodeProps) => {
  const { label, index, extraHandle } = data as unknown as FlowNodeData
  return (
    <motion.div
      {...enter(index)}
      className="relative flex items-center justify-center"
      style={{ width: DIAMOND_BOUNDS, height: DIAMOND_BOUNDS }}
    >
      <Handle type="target" position={Position.Top} className="!bg-accent-light" />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-lg border-2 border-fuchsia-400/70 bg-fuchsia-500/10 shadow-[0_0_20px_rgba(217,70,239,0.2)]"
        style={{ width: DIAMOND_SIDE, height: DIAMOND_SIDE }}
      />
      <span className="relative z-10 px-6 text-center text-xs font-semibold text-text">
        {label}
      </span>
      <Handle type="source" position={Position.Bottom} className="!bg-accent-light" />
      <ExtraHandle extraHandle={extraHandle} />
    </motion.div>
  )
})

export const ActionNode = memo(({ data }: NodeProps) => {
  const { label, index, extraHandle } = data as unknown as FlowNodeData
  return (
    <motion.div
      {...enter(index)}
      className="rounded-lg border-2 border-teal-400/60 bg-teal-500/10 px-4 py-3 text-center text-sm font-medium text-text shadow-[0_0_16px_rgba(45,212,191,0.15)]"
    >
      <Handle type="target" position={Position.Top} className="!bg-teal-300" />
      {label}
      <Handle type="source" position={Position.Bottom} className="!bg-teal-300" />
      <ExtraHandle extraHandle={extraHandle} />
    </motion.div>
  )
})
