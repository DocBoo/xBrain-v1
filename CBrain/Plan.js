/*
    Plan with Motivation and Actions to do.

    2023-12-28 [CB] Creation

*/

function PLAN() {
    this.raw = {};
    return this;
}

// pRow:    { id: iduuid, company, role_admin }
function factoryGetFromRow(pRow) {
    var vNew = new PLAN();
    vNew.raw = {
        id:             pRow.id||null,
        name:           pRow.name||null,
        category:       pRow.category||null,
        subCategory:    pRow.subCategory||null,
        motivationList: pRow.motivationList||null
    };
    return vNew;
}

const   PlanList= [];

PlanList.push(factoryGetFromRow({ 'name': 'GEN_1.1',    'category':           'go',
                                                        'subcategory':        'toFriends',
                                                        'motivationList': [ { 'name': 'satisfaction',   'value': 2 }, 
                                                                            { 'name': 'move',           'value': 5 }, 
                                                                            { 'name': 'explore',        'value': 2 }, 
                                                                            { 'name': 'Security',       'value': 3 } 
],                                                      'actionList': [     { 'name': 'moveRandom' }
] }));

PlanList.push(factoryGetFromRow({ 'name': 'GEN_1.2',    'category':           'go',
                                                        'subcategory':        'avoid',
                                                        'motivationList': [ { 'name': 'Security',       'value': 5 } 
],                                                      'actionList': [     { 'name': 'moveRandom' }
] }));

module.exports= {
    PLAN,
    PlanList
};