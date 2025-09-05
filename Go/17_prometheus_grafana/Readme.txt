If it need. Add setting to ./prometheus/prometheus.yml file.

// =============================
    Prometheus in browser:
    localhost:9090
// =============================

Grafana in browser:
    localhost:3000
then 
    admin - login
    admin - password

don't change password !!!

Then in dashboard 
    Connection -> Data source -> Add -> Prometeus
In connection type address:
    http://prometheus:9090
    
Then - save


// =============================

    Dashboard

1. In dashboard -> Dashboard -> Create dashboard -> Add visualisation
    -> choose prometheus 

2. Add query