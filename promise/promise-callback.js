const {checkInventory} = require('./promise-object.js');

const order = [['sunglasses', 1], ['bags', 2]];

function handleSuccess(onFulfilled){
  console.log(onFulfilled);
}

function handleFailure(onRejected){
  console.log(onRejected);
}

checkInventory(order).then(handleSuccess, handleFailure);