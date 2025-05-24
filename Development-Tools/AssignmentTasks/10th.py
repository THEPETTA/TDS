import pandas as pd

df = pd.read_json('data.json')

# Filter: price >= 102.63
df_filtered = df[df['price'] >= 102.63]

# Sort: category (A→Z), price (highest→lowest), name (A→Z)
df_sorted = df_filtered.sort_values(
    by=['category', 'price', 'name'],
    ascending=[True, False, True]
)

# Output as minified JSON array string
json_string = df_sorted.to_json(orient='records', lines=False)
print(json_string)
