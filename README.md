# blockchain-js 
User Javascript for simple blockchain simulation
## API
> See your blockchain
- /blockchain
> transaction your block
- /transaction/broadcast
> Verify the block  [nonce]
- /mine
---

## Server Node API 
> Broadcast all node and Synchronize new node
- /register-and-broadcast-node
> Synchronize new node
- /register-node
> Broadcast
- /register-nodes-bulk
---

## Explorer
> Search your chain
- /block-explorer


## How to start
1. Create 5 server nodes 
- npm run node_1
- npm run node_2
- npm run node_3
- npm run node_4
- npm run node_5
2. use /blockchain to see your block
3. use postman post /transaction to announce transactions
4. use /mine to create a block
5. use /blockchain to see your blockchain
