/*
    CBrainNeed
    Needs we have.

    2024-01-01 [CB] Creation
    
*/

const CBrainMaslowLevelModule= require("./CBrainMaslowLevel.js");

class CBrainNeed extends CBrainMaslowLevelModule.CBrainMaslowLevel {

    // CBrainBase        => { id, name }
    // CBrainMaslowLevel => { maslowLevel }
    constructor(pRaw) {
        super(pRaw);
    }
    display(pIndent) {
        super.display(pIndent++);
    }

}

class CBrainNeedList {

    _CBrainNeedList= [];

    constructor(pRaw) {

    }
    display(pIndent) {
        this._CBrainNeedList.forEach(element => {
            element.display(pIndent);
        });
    }
    // pCBrainNeed: CBrainNeed
    add(pCBrainNeed) {
        this._CBrainNeedList.push(pCBrainNeed);
    }

}

module.exports= {
    CBrainNeed, CBrainNeedList
};