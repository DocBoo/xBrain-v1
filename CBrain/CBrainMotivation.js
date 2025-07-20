/*
    CBrainMotivation
    Motivation we have.

    2024-01-02 [CB] Creation
    
*/

const CBrainBaseModule= require("./CBrainBase.js");

class CBrainMotivation extends CBrainBaseModule.CBrainBase {

    // CBrainBase       => { id, name }
    // CBrainMotivation => {  }
    constructor(pRaw) {
        super(pRaw);
    }
    display(pIndent) {
        super.display(pIndent++);
    }

}

class CBrainMotivationList {

    _CBrainMotivationList= [];
    
    constructor(pRaw) {

    }
    display(pIndent) {
        this._CBrainMotivationList.forEach(element => {
            element.display(pIndent);
        });
    }
    // pCBrainMotivation: CBrainMotivation
    add(pCBrainMotivation) {
        this._CBrainMotivationList.push(pCBrainMotivation);
    }

}

module.exports= {
    CBrainMotivation, CBrainMotivationList
};