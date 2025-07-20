/*
    CBrainBase

    2024-01-02 [CB] Creation

*/

class CBrainBase {
    _debug= false;
    _className= null;
    _raw=   { id:null, name:null };

    // CBrainBase   => { id, name }
    constructor (pRaw) {
        this._className= this.constructor.name;
        if (pRaw) 
        this._raw = {
            id:             pRaw.id||null,
            name:           pRaw.name||null,
        };
    }
    getClassName() {
        return this._className;
    }
    getId() {
        return this._raw.id;
    }
    getName() {
        return this._raw.name;
    }
    display(pIntent) {
        console.log(' '.repeat(pIntent||0), `${this.getClassName()}: <${this.getName()}>`);
    }
};

module.exports= {
    CBrainBase
};