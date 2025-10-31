Open localhost:3000 and login and password - admin.

Then -> Add you first data source 
  choose liki
Type in url - http://loki:3100
Press save and test - shoud be ok -> then type explore in left panel
choose loki in drop down menu.

Select label = myapp 
and chose other query


// =====================================

Push
-----

curl -X POST http://localhost:3100/loki/api/v1/push \
  -H "Content-Type: application/json" \
  -d '{
    "streams": [
      {
        "stream": {
          "job": "myapp",
          "level": "info"
        },
        "values": [
          ["'"$(date +%s%N)"'", "Hello Loki! This is a direct log entry"]
        ]
      }
    ]
  }'


// =====================================
  Query


curl -G http://localhost:3100/loki/api/v1/query_range \
  --data-urlencode 'query={job="myapp"}' \
  --data-urlencode 'start='$(date -d '10 minutes ago' +%s%N) \
  --data-urlencode 'end='$(date +%s%N) \
  | jq -r '.data.result[] | .values[] | .[1]'



curl -G http://localhost:3100/loki/api/v1/query_range  \
    --data-urlencode 'query={job="myapp",level="info"}' \
    --data-urlencode 'start='$(date -d '10 minutes ago' +%s%N)  \
    --data-urlencode 'end='$(date +%s%N) \
    --data-urlencode 'step=1' | jq .
