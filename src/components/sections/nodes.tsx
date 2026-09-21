import { memo } from 'react'
import { Handle, Position, type NodeProps } from '@xyflow/react'

type FlowNodeData = {
  label: string
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

// Nodes render plain, with no entrance animation. React Flow measures handle
// positions with getBoundingClientRect() at mount and caches them; a CSS
// transform applied at that moment (e.g. an entrance `scale`) gets baked into
// those offsets and never re-measured, leaving every edge permanently short of
// the painted border. The section container's own fade-in covers the entrance.

export const StartNode = memo(({ data }: NodeProps) => {
  const { label } = data as unknown as FlowNodeData
  return (
    <div className="rounded-full border-2 border-accent-light bg-accent/20 px-5 py-3 text-center text-sm font-semibold text-text shadow-[0_0_20px_rgba(96,165,250,0.25)]">
      {label}
      <Handle type="source" position={Position.Bottom} className="!bg-accent-light" />
    </div>
  )
})

// A square of side S rotated 45° has its vertices at S/√2 from center, so the
// wrapper must be S*√2 wide for Top/Bottom/Left/Right handles (placed at the
// wrapper's edges) to land exactly on the diamond's tips instead of floating
// inside its rotated silhouette.
const DIAMOND_SIDE = 112
const DIAMOND_BOUNDS = Math.round(DIAMOND_SIDE * Math.SQRT2)

export const DecisionNode = memo(({ data }: NodeProps) => {
  const { label, extraHandle } = data as unknown as FlowNodeData
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: DIAMOND_BOUNDS, height: DIAMOND_BOUNDS }}
    >
      <Handle type="target" position={Position.Top} className="!bg-accent-light" />
      {/* No border radius: rounding pulls the painted tip inside the
          mathematical vertex where the handle (and so the edge) attaches. */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-fuchsia-400/70 bg-fuchsia-500/10 shadow-[0_0_20px_rgba(217,70,239,0.2)]"
        style={{ width: DIAMOND_SIDE, height: DIAMOND_SIDE }}
      />
      <span className="relative z-10 px-6 text-center text-xs font-semibold text-text">
        {label}
      </span>
      <Handle type="source" position={Position.Bottom} className="!bg-accent-light" />
      <ExtraHandle extraHandle={extraHandle} />
    </div>
  )
})

export const ActionNode = memo(({ data }: NodeProps) => {
  const { label, extraHandle } = data as unknown as FlowNodeData
  return (
    <div className="rounded-lg border-2 border-teal-400/60 bg-teal-500/10 px-4 py-3 text-center text-sm font-medium text-text shadow-[0_0_16px_rgba(45,212,191,0.15)]">
      <Handle type="target" position={Position.Top} className="!bg-teal-300" />
      {label}
      <Handle type="source" position={Position.Bottom} className="!bg-teal-300" />
      <ExtraHandle extraHandle={extraHandle} />
    </div>
  )
})
