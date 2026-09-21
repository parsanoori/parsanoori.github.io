import { memo } from 'react'
import { Handle, Position, type NodeProps } from '@xyflow/react'
import { motion } from 'framer-motion'

type FlowNodeData = { label: string; index: number }

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

export const DecisionNode = memo(({ data }: NodeProps) => {
  const { label, index } = data as unknown as FlowNodeData
  return (
    <motion.div {...enter(index)} className="relative flex h-32 w-32 items-center justify-center">
      <Handle type="target" position={Position.Top} className="!bg-accent-light" />
      <div className="absolute inset-0 rotate-45 rounded-lg border-2 border-fuchsia-400/70 bg-fuchsia-500/10 shadow-[0_0_20px_rgba(217,70,239,0.2)]" />
      <span className="relative z-10 px-4 text-center text-xs font-semibold text-text">
        {label}
      </span>
      <Handle type="source" position={Position.Bottom} className="!bg-accent-light" />
    </motion.div>
  )
})

export const ActionNode = memo(({ data }: NodeProps) => {
  const { label, index } = data as unknown as FlowNodeData
  return (
    <motion.div
      {...enter(index)}
      className="rounded-lg border-2 border-teal-400/60 bg-teal-500/10 px-4 py-3 text-center text-sm font-medium text-text shadow-[0_0_16px_rgba(45,212,191,0.15)]"
    >
      <Handle type="target" position={Position.Top} className="!bg-teal-300" />
      {label}
      <Handle type="source" position={Position.Bottom} className="!bg-teal-300" />
    </motion.div>
  )
})
