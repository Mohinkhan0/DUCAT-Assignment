class myclass{
    show(a,b){
        this.a=a
        this.b=b
        console.log("mohin khan Show " ,a,b);
    }
    getdata()
    {
        console.log("get data " , this.a,this.b);
    }
}

let obj=new myclass();
obj.show(100,20);
obj.getdata();