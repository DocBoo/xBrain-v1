/*
    CBrain

    2024-01-02 [CB] Creation

*/

const CBrainBaseModule= require("./CBrainBase.js");

class CBrain extends CBrainBaseModule.CBrainBase {

    // CBrainBase   => { id, name }
    // CBrain       => {  }
    constructor (pRaw) {
        super(pRaw);
    }
    display(pIntent) {
        super.display(pIntent++);
        console.log(`Brain: <${this.getName()}>`);
    }
};

module.exports= {
    CBrain
};