@app
pizza-delivery

@http
get /
get /orders
post /orders
get /services

@events
new-order
delivered

@scheduled
# cron(Minutes Hours Day-of-month Month Day-of-week Year)
open cron(0 13 ? * MON-FRI *)
close cron(0 22 ? * MON-FRI *)

@tables
orders
  orderID *Number # partition key
  tip **Number    # optional sort key

@aws
region us-west-2
architecture arm64
