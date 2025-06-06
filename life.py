from graphviz import Digraph

# Create the graph
dot = Digraph(format='svg')
dot.attr(rankdir='TB', size='10')
dot.attr(bgcolor='transparent')  # For dark UI embedding

# Define consistent styles
PARALLELOGRAM_STYLE = {
    'shape': 'parallelogram',
    'style': 'filled',
    'fillcolor': '#2E3A59',      # Indigo blue
    'color': '#5BD6D2',          # Teal border
    'fontcolor': '#E0FBFC'       # Light text
}
DIAMOND_STYLE = {
    'shape': 'diamond',
    'style': 'filled',
    'fillcolor': '#3C2A4D',      # Deep plum
    'color': '#BC8CF2',          # Soft purple border
    'fontcolor': '#F8F8F2'       # Light text
}

# Define node labels (grammatically refined)
nodes = {
    'A': 'Perceive life\nas it is',
    'B': 'Is it desirable?',
    'C': 'Can you do\nsomething about it?',
    'D': 'Accept it',
    'E': 'Take action',
    'F': 'See the results',
    'G': 'Accept it',
    'H': 'Enjoy it',
}

# Add nodes with respective styles
for node in ['A', 'D', 'E', 'F', 'G', 'H']:
    dot.node(node, label=nodes[node], **PARALLELOGRAM_STYLE)

for node in ['B', 'C']:
    dot.node(node, label=nodes[node], **DIAMOND_STYLE)

# Add edges with themed contrast
dot.edge('A', 'B', color='#5BD6D2')  # flow edge
dot.edge('B', 'C', label='No', color='#C792EA', fontcolor='#C792EA')  # pink
dot.edge('B', 'G', label='Yes', color='#52E0C4', fontcolor='#52E0C4')  # aqua
dot.edge('C', 'D', label='No', color='#C792EA', fontcolor='#C792EA')
dot.edge('C', 'E', label='Yes', color='#52E0C4', fontcolor='#52E0C4')
dot.edge('E', 'F', color='#5BD6D2')
dot.edge('G', 'H', color='#5BD6D2')
dot.edge('F', 'B', color='#8BE9FD')  # loop

# Output as SVG
svg_output = dot.pipe(format='svg').decode('utf-8')
print(svg_output)
