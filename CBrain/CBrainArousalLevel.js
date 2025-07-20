/*
    CBrainArousalLevel

    2024-01-02 [CB] Creation

*/
const CBrainBaseModule= require("./CBrainBase.js");

class CBrainArousalLevel extends CBrainBaseModule.CBrainBase {

    // CBrainBase         => { id, name }
    // CBrainArousalLevel => { currentLevel, optimalLevel, highLevel }
    constructor (pRaw) {
        super(pRaw);
        this._raw.currentLevel= pRaw.currentLevel||0;
        this._raw.optimalLevel= pRaw.optimalLevel||0;
        this._raw.highLevel=    pRaw.highLevel||0;
    }
    display(pIntent) {
        super.display(pIntent++);
        console.log(' '.repeat(pIntent||0), `ALevel: 0 <= ${this._raw.currentLevel} ~= ${this._raw.optimalLevel} <= ${this._raw.highLevel}`);
    }
};

module.exports= {
    CBrainArousalLevel
};