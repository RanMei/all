var user = new Promise((resolve,reject)=>{
  resolve(JSON.stringify({
    name: 'John'
  }));
});

var cart = new Promise((resolve,reject)=>{
  resolve(JSON.stringify([{
    name: 'iPhone 7'
  }]));
});

Promise.all([user,cart]).then((vals)=>{
  console.log(vals)
})