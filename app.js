
let Block = require('./models/block')
let Transaction = require('./models/transaction')
let Blockchain = require('./models/blockchain')

// create genesis block
let genesisBlock = new Block()
let blockchain = new Blockchain(genesisBlock)

// create a transaction
let transaction = new Transaction('king','prince',1500)
let block = blockchain.getNextBlock([transaction])
blockchain.addBlock(block)

let anotherTransaction = new Transaction("xavi","iniesta",2010)
let block1 = blockchain.getNextBlock([anotherTransaction, transaction])
blockchain.addBlock(block1)

let anotherTransaction2 = new Transaction("el nino","kun",2007)
let block2 = blockchain.getNextBlock([anotherTransaction2, anotherTransaction])
blockchain.addBlock(block2)

// prints the 3 blocks of our blockchain
console.log(blockchain)
