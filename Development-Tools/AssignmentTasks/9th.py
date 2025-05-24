import json

# Read JSON from file
with open('sales.json') as f:
    data = json.load(f)
print(data)