const Block = require('./block');

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        const genesisDate = '04/07/1999';
        return new Block('Genesis Block',0,genesisDate);
    }

    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }

    addNewBlock(newBlock){
        newBlock.index = this.getLastBlock.index + 1;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let blocksToAdd = 5;

const polyChain = new Blockchain();

for(i=0; i<blocksToAdd;i++){
    polyChain.addNewBlock(new Block({sender: 'Polycode',receiver: 'youtube',message: 'Block ${polyChain.chain.length} has been added to the chain'}));
}

polyChain.chain.forEach((block) => {
    console.log(block);
});