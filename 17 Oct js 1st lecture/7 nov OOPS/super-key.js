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
 
 let obj=new son();
 obj.home()
 obj.business()
 obj.job()