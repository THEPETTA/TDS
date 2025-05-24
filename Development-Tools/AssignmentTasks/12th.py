import json
data = []
with open("q-multi-cursor-json.txt", "r") as f:
    l = f.readlines()
    for i in l:
        i = i.strip()
        if i != "":
            data.append(i)

d = {}
for i in data: 
    t = i.split("=")
    key = t[0]
    value = t[1]
    d[key] = value

print(json.dumps(d))
