class myclass{
    home()
    {
     console.log("Home call ");
    }
    business()
    {
     console.log("Business call");
 
    }
 }
 
 class son extends myclass{
     job()
     {
       console.log("my job call ");
          }
 }

 class classc extends son{
    land()
    {
      console.log("my land ");
        }
}
 
 let obj=new classc();
 obj.home()
 obj.business()
 obj.job()
obj.land();