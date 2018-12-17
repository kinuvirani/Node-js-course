var getuser=(id,callback)=>
{
  var user={
    id:id,
    name:'Kiran'
  };
  setTimeout(()=>{
      callback(user);
  },1000);
};
getuser(31,(user)=>
{
  console.log(user);
});
