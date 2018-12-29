# blockchain-js 
User Javascript for simple blockchain simulation
## Tools
- express.js
- vue.js
- webpack4
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

## 安裝
- npm run build

## 如何使用
0. 先同步節點 /BlockData
1. 發起交易 /BlockTransaction
2. 生成待驗證之交易 
```
"pendingTransactions":[{}],"currentNodeUrl":"http://localhost:3001","networkNodes":[]
```
3. 驗證交易(挖礦) /mine
```
{"note":"New block mined successfully!","block":{"index":2,"timestamp":1544953463473,"transactions":[{}],"nonce":204174,"hash":"000026ba598492e722df4cf5473603a4fc1e0b946d0021a40c8f924ec006a0d0","previousBlockHash":"0"}}
```
4. 使用 /BlockExplorer查看
![](https://i.imgur.com/hB7dKN0.png)

## 操作
1. 創建初始區塊 this.createNewBlock(100, '0', '0');
2. createNewTransaction 建立新的交易並放進待驗證之交易中addTransactionToPendingTransactions
3. 廣播所有節點有待完成之交易
4. 挖礦/mine POF計算nonce(每個節點所爭搶的值) 
5. 使用新的nonce 再去 hashBlock 產生新的Block
6. 挖礦費用加入新的block的待驗證交易




