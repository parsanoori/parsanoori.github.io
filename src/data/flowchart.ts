export type FlowNodeKind = 'start' | 'decision' | 'action'

export interface FlowNodeDef {
  id: string
  kind: FlowNodeKind
  label: string
  x: number
  y: number
  extraHandle?: { type: 'source' | 'target'; position: 'left' | 'right'; id: string }
}

export interface FlowEdgeDef {
  id: string
  source: string
  target: string
  label?: string
  loop?: boolean
}

export const flowNodes: FlowNodeDef[] = [
  { id: 'A', kind: 'start', label: 'Perceive life as it is', x: 320, y: 0 },
  {
    id: 'B',
    kind: 'decision',
    label: 'Is it desirable?',
    x: 320,
    y: 140,
    extraHandle: { type: 'target', position: 'left', id: 'loop-in' },
  },
  { id: 'G', kind: 'action', label: 'Accept it', x: 600, y: 300 },
  { id: 'H', kind: 'action', label: 'Enjoy it', x: 600, y: 460 },
  { id: 'C', kind: 'decision', label: 'Can you do something about it?', x: 60, y: 300 },
  { id: 'D', kind: 'action', label: 'Accept it', x: 260, y: 480 },
  { id: 'E', kind: 'action', label: 'Take action', x: -180, y: 460 },
  // Offset further left than E (not stacked directly under it) so the F->B
  // loop edge below has a clear lane and doesn't need a huge routing offset
  // to dodge E — that hack pushed the edge past the canvas's fitted view.
  {
    id: 'F',
    kind: 'action',
    label: 'See the results',
    x: -360,
    y: 620,
    extraHandle: { type: 'source', position: 'left', id: 'loop-out' },
  },
]

export const flowEdges: FlowEdgeDef[] = [
  { id: 'a-b', source: 'A', target: 'B' },
  { id: 'b-g', source: 'B', target: 'G', label: 'Yes' },
  { id: 'b-c', source: 'B', target: 'C', label: 'No' },
  { id: 'g-h', source: 'G', target: 'H' },
  { id: 'c-e', source: 'C', target: 'E', label: 'Yes' },
  { id: 'c-d', source: 'C', target: 'D', label: 'No' },
  { id: 'e-f', source: 'E', target: 'F' },
  { id: 'f-b', source: 'F', target: 'B', loop: true },
]
