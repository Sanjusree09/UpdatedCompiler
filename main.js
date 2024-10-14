const { show, op, storeNumber, storeString, storeArray, accessArrayElement } = require('./interpreterUpdate');

storeString('p', 'HI');
storeString('q', 'Sanju');
storeNumber(`a`,10);
storeNumber(`b`, 8);
storeArray(`arr`,[`Apple`,`banana`,`Grapes`, `Mango`]);

show( p = op('p PLUS q PLUS Hello  '));


show(values = accessArrayElement(`arr`,2));


show(q = op(`a PLUS b PLUS arr1`));
//show(q);