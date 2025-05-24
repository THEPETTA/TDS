import pandas as pd

# Load the files
df_new = pd.read_json('config_new.json')
df_old = pd.read_json('config_old.json')

# Merge on 'key'
merged = pd.merge(df_new, df_old, on='key', suffixes=('_new', '_old'))

# Find where 'value' is different
diffs = merged[merged['value_new'] != merged['value_old']]

# Count differences
num_diffs = len(diffs)
print(num_diffs)
