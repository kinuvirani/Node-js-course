var asyncadd=(a,b)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>
      {
        if(typeof a==='number' && typeof b==='number')
        {
            resolve(a+b);
        }
        else {
          reject("Argument may not be valid");
        }

      },1500);
    });
};
asyncadd(15,5).then((res)=>{
  console.log("Sum= "+res);
  return asyncadd(res,'30');
},
(error)=>{
  console.log("Error= "+error);
}).then((res)=>{
  console.log("Sum= "+res);
}).catch((error)=>{
  console.log("Error= "+error);
});
