/*
    CBrainBrake
    Brake we have.

    2024-01-02 [CB] Creation
    
*/

const CBrainBaseModule= require("./CBrainBase.js");

class CBrainBrake extends CBrainBaseModule.CBrainBase {

    // CBrainALevel => { id, name }
    // CBrainBrake  => { origin }
    constructor(pRaw) {
        super(pRaw);
        this._raw.origin= pRaw.origin||null;
    }
    getOrigin() {
        return this._raw.origin;
    }
    display(pIndent) {
        super.display(pIndent++);
        console.log(' '.repeat(pIndent||0), `. Origin: ${this.getOrigin()}`);
    }

}

class CBrainBrakeList {

    _CBrainBrakeList= [];
    
    constructor(pRaw) {

    }
    display(pIndent) {
        this._CBrainBrakeList.forEach(element => {
            element.display(pIndent);
        });
    }
    // pCBrainBrake: CBrainBrake
    add(pCBrainBrake) {
        this._CBrainBrakeList.push(pCBrainBrake);
    }

}

module.exports= {
    CBrainBrake, CBrainBrakeList
};