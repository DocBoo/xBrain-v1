/*
    Belief we have of the environment.

    2023-12-28 [CB] Creation

*/

function xBelief() {
    this.raw = {};
    return this;
}

// pRow:    { id: iduuid, company, role_admin }
function factoryGetFromRow(pRow) {
    var vNew = new xBelief();
    vNew.raw = {
        id:             pRow.id||null,
        name:           pRow.name||null,
        motivationList: pRow.motivationList||null
    };
    return vNew;
}

const   xBeliefList= [];
xBeliefList.push(factoryGetFromRow({ 'name': 'attack',           'motivationList': [ { 'name': 'satisfaction', 'value': 5 } 
] }));
xBeliefList.push(factoryGetFromRow({ 'name': 'attacked',         'motivationList': [ { 'name': 'satisfaction', 'value': -2 }, 
                                                                                    { 'name': 'stayInLife',   'value': 10 } 
] }));
xBeliefList.push(factoryGetFromRow({ 'name': 'friendAttacked',   'motivationList': [ { 'name': 'security',     'value': -5 } 
] }));
xBeliefList.push(factoryGetFromRow({ 'name': 'obstacle',         'motivationList': [ { 'name': 'move',         'value': 10 } 
] }));

module.exports= {
    xBelief,
    xBeliefList
};