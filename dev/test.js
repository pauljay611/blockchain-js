const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();


const bc1 = {"chain":[{"index":1,"timestamp":1530342138067,"transactions":[],"nonce":100,"hash":"0","previousBlockHash":"0"},{"index":2,"timestamp":1530342205604,"transactions":[],"nonce":18140,"hash":"0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100","previousBlockHash":"0"},{"index":3,"timestamp":1530342299892,"transactions":[{"amount":12.5,"sender":"00","recipient":"86bf72307c3311e8ad3b9b998b0c5fe5","transactionId":"af046fc07c3311e8ad3b9b998b0c5fe5"},{"amount":"1000","sender":"qwerqwersdfdsffds","recipient":"wqeradfgghsdfgdg","transactionId":"bda678207c3311e8ad3b9b998b0c5fe5"},{"amount":"800","sender":"qwerqwersdfdsffds","recipient":"wqeradfgghsdfgdg","transactionId":"e3dc92e07c3311e8ad3b9b998b0c5fe5"},{"amount":"900","sender":"qwerqwersdfdsffds","recipient":"wqeradfgghsdfgdg","transactionId":"e5bc28507c3311e8ad3b9b998b0c5fe5"}],"nonce":5456,"hash":"000088d3d73951863335c31de061100fd56dc65c4822b447bd4813a91c41a41f","previousBlockHash":"0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"}],"pendingTransactions":[{"amount":12.5,"sender":"00","recipient":"86bf72307c3311e8ad3b9b998b0c5fe5","transactionId":"e73470707c3311e8ad3b9b998b0c5fe5"}],"currentNodeUrl":"http://localhost:3001","networkNodes":[]
}

console.log('Valid', bitcoin.chainIsValid(bc1.chain));