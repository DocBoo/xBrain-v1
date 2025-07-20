/*
    Take Decision.

    2023-12-28 [CB] Creation

*/

function DECISION() {
    this.raw = {};
    return this;
}

// pRow:    { id: iduuid, company, role_admin }
function factoryGetFromRow(pRow) {
    var vNew = new DECISION();
    vNew.raw = {
        id:          pRow.id||null,
        name:        pRow.name||null,
        needList:    pRow.needList||null,
        planList:    pRow.planList||null
    };
    return vNew;
}

const   DecisionList= [];

DecisionList.push(factoryGetFromRow({ 'name': 'DEC_1.1',    'needList':   [ { 'name': 'live'    } 
],                                                          'planList':   [ { 'name': 'GEN_1.1' }
] }));



module.exports= {
    DECISION,
    DecisionList
};