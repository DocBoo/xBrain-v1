/*
    CBrainMaslowLevel

    2024-01-02 [CB] Creation

*/
const CBrainBaseModule= require("./CBrainBase.js");

class CBrainMaslowLevel extends CBrainBaseModule.CBrainBase {

    // CBrainBase   => { id, name }
    // CBrainMLevel => { maslowLevel }
    constructor (pRaw) {
        super(pRaw);
        this._raw.maslowLevel= pRaw.maslowLevel||0;
    }
    getMaslowLevel() {
        return this._raw.maslowLevel;
    }
    display(pIntent) {
        super.display(pIntent++);
        console.log(' '.repeat(pIntent||0), `. Maslow level: ${this.getMaslowLevel()}`);
    }
};

module.exports= {
    CBrainMaslowLevel
};