/*
    Action and Sub Action.

    2023-12-28 [CB] Creation

*/

function xACTION() {
    this.raw = {};
    return this;
}

// pRow:    { id: iduuid, company, role_admin }
function factoryGetFromRow(pRow) {
    var vNew = new xACTION();
    vNew.raw = {
        id:             pRow.id||null,
        name:           pRow.name||null,
        category:       pRow.category||null,
        subCategory:    pRow.subCategory||null
    };
    return vNew;
}

const   ActionList= [];
ActionList.push(factoryGetFromRow({ 'name': 'groupInCirle',             'category': 'group',            'subCategory': 'inCircle'   }));
ActionList.push(factoryGetFromRow({ 'name': 'groupInLine',              'category': 'group',            'subCategory': 'inLine'     }));
ActionList.push(factoryGetFromRow({ 'name': 'ungroup',                  'category': 'ungroup'                                       }));
ActionList.push(factoryGetFromRow({ 'name': 'fireRandom',               'category': 'fire',             'subCategory': 'random'     }));
ActionList.push(factoryGetFromRow({ 'name': 'fireMoving',               'category': 'fire',             'subCategory': 'moving'     }));
ActionList.push(factoryGetFromRow({ 'name': 'attack',                   'category': 'attack'                                        }));
ActionList.push(factoryGetFromRow({ 'name': 'defend',                   'category': 'defend'                                        }));
ActionList.push(factoryGetFromRow({ 'name': 'CommunicationWithFriend',  'category': 'communication',    'subCategory': 'friend'     }));
ActionList.push(factoryGetFromRow({ 'name': 'CommunicationWithBase',    'category': 'communication',    'subCategory': 'base'       }));
ActionList.push(factoryGetFromRow({ 'name': 'moveToBase',               'category': 'move',             'subCategory': 'toBase'     }));
ActionList.push(factoryGetFromRow({ 'name': 'moveRandom',               'category': 'move',             'subCategory': 'random'     }));
ActionList.push(factoryGetFromRow({ 'name': 'avoidFire',                'category': 'avoid',            'subCategory': 'fire'       }));
ActionList.push(factoryGetFromRow({ 'name': 'avoidEnemy',               'category': 'avoid',            'subCategory': 'enemy'      }));
ActionList.push(factoryGetFromRow({ 'name': 'searchEnemy',              'category': 'search',           'subCategory': 'enemy'      }));

module.exports= {
    xACTION,
    ActionList
};