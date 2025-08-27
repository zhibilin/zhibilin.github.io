---
title: Pricing & Rate Limits
icon: fab fa-markdown
order: 2
#cover: https://github.githubassets.com/assets/inbox-zero-86555dddc82e.svg
category:
  - node1
tag:
  - node1
---


## Pricing & Rate Limits


|Plan| Entry | Intermediate | Advance  |
| --- | --- | --- | --- | 
|Billed per month | $0 | Contact sales | Contact sales |
| TPS | 5 TPS  |20 TPS |
| Transaction Tip |0.002 SOL|0.002 SOL|0.002 SOL|



## Staked Conn
The usage of the staked_conn interface is similar to the RPC interface, primarily providing the sendTransaction method, which directly connects to our validator node.
When calling the sendTransaction method of staked_conn, please note the following:
- Minimum tip 0.002, tps rate 5
- The higher the tip you give, the higher the success rate of going on chain
- You need to transfer an amount greater than or equal to 0.002 SOL to any of the following accounts:

    - `node1PqAa3BWWzUnTHVbw8NJHC874zn9ngAkXjgWEej`
    - `node1UzzTxAAeBTpfZkQPJXBAqixsbdth11ba1NXLBG`
    - `node1Qm1bV4fwYnCurP8otJ9s5yrkPq7SPZ5uhj3Tsv`
    - `node1PUber6SFmSQgvf2ECmXsHP5o3boRSGhvJyPMX1`
    - `node1AyMbeqiVN6eoQzEAwCA6Pk826hrdqdAHR7cdJ3`
    - `node1YtWCoTwwVYTFLfS19zquRQzYX332hs1HEuRBjC`


## Example for CMD: `curl`

```shell
curl -X POST "https://ny.node1.me" \
    -H "Content-Type: application/json" \
    -H "api-key: $APIKEY" \
    -d '{
            "jsonrpc": "2.0",
            "id": "1",
            "method": "sendTransaction",
            "params": [
                "",
                { "encoding": "base64" }
            ]
        }
```


For better performance and faster speeds, you can test and select the most suitable IP to use:


1.NY
- <a >https://ny.node1.me</a>
- <a>http://ny.node1.me</a>

2.AMS
- <a>https://ams.node1.me</a>
- <a>http://ams.node1.me</a>

3.Frankfurt
- <a>https://fra.node1.me</a>
- <a>http://fra.node1.me</a>
