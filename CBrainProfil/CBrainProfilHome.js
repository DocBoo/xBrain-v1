
const CBrainModule= require("../CBrain/CBrain.js");
const CBrainNeedModule= require("../CBrain/CBrainNeed.js");
const CBrainMotivationModule= require("../CBrain/CBrainMotivation.js");
const CBrainBrakeModule= require("../CBrain/CBrainBrake.js");

class CBrainProfilHome extends CBrainModule.CBrain {

    _CBrainNeedList= new CBrainNeedModule.CBrainNeedList();
    _CBrainMotivationList= new CBrainMotivationModule.CBrainMotivationList();
    _CBrainBrakeList= new CBrainBrakeModule.CBrainBrakeList();

    // { id, name }
    constructor(pRaw) {
        super(pRaw);
    }
    display(pIndent) {
        super.display(pIndent++);
        this._CBrainNeedList.display(pIndent);
        this._CBrainMotivationList.display(pIndent);
        this._CBrainBrakeList.display(pIndent);
    }
    // pCBrainNeed: CBrainNeed
    addNeed(pCBrainNeed) {
        this._CBrainNeedList.add(pCBrainNeed);
    }
    // pCBrainMotivation: CBrainMotivation
    addMotivation(pCBrainMotivation) {
        this._CBrainMotivationList.add(pCBrainMotivation);
    }
    // pCBrainBrake: CBrainBrake
    addBrake(pCBrainBrake) {
        this._CBrainBrakeList.add(pCBrainBrake);
    }

}

const xCBrainProfilHome= new CBrainProfilHome({ name:'ProfilHome'});

xCBrainProfilHome.addNeed(new CBrainNeedModule.CBrainNeed({ 'name': 'live',           'maslowLevel': 1 }));
xCBrainProfilHome.addNeed(new CBrainNeedModule.CBrainNeed({ 'name': 'conquest',       'maslowLevel': 2 }));
xCBrainProfilHome.addNeed(new CBrainNeedModule.CBrainNeed({ 'name': 'consideration',  'maslowLevel': 3 }));

xCBrainProfilHome.addMotivation(new CBrainMotivationModule.CBrainMotivation({ 'name': 'move' }));
xCBrainProfilHome.addMotivation(new CBrainMotivationModule.CBrainMotivation({ 'name': 'stayInLife' }));
xCBrainProfilHome.addMotivation(new CBrainMotivationModule.CBrainMotivation({ 'name': 'security' }));
xCBrainProfilHome.addMotivation(new CBrainMotivationModule.CBrainMotivation({ 'name': 'satisfaction' }));
xCBrainProfilHome.addMotivation(new CBrainMotivationModule.CBrainMotivation({ 'name': 'explore' }));
xCBrainProfilHome.addMotivation(new CBrainMotivationModule.CBrainMotivation({ 'name': 'beAnHero' }));


xCBrainProfilHome.addBrake(new CBrainBrakeModule.CBrainBrake({ 'name': 'friendAttacked', 'origin': 'external' }));



module.exports= {
    CBrainProfilHome,
    xCBrainProfilHome
};