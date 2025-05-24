import pandas as pd
from io import StringIO


df1 = pd.read_csv('data1.csv', encoding='cp1252')
df2 = pd.read_csv('data2.csv', encoding='utf-8')

# Reading files with explicit encoding
with open('data3.txt', encoding='utf-16') as f:
    text = f.read()
df3 = pd.read_csv(StringIO(text), sep='\t')

s1 = df1[(df1['symbol'] == 'š') |  (df1['symbol'] == '’') | (df1['symbol'] == 'Š')]['value'].sum()
s2 = df2[(df2['symbol'] == 'š') |  (df2['symbol'] == '’') | (df2['symbol'] == 'Š')]['value'].sum()
s3 = df3[(df3['symbol'] == 'š') |  (df3['symbol'] == '’') | (df3['symbol'] == 'Š')]['value'].sum()

print(s1+s2+s3)