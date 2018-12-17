var somepromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve('Worked..!!');
        reject('It does not worked');
    },2000);

});
somepromise.then((message)=>{
  console.log('Success= ',message);
},(emessage)=>{
    console.log('Error Message= ',emessage);
});
