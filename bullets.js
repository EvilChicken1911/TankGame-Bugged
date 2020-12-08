class Bullet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.w = 100;
        this.h = 100;
        this.toDelete = false;
    }
    display(){
        fill("black");
        rect(this.x,this.y,this.w,this.h);
    }
    delete(){
        this.toDelete = true;
    }
    hit(tanks){
        var d = dist(this.x,this.y,tanks.x,tanks.y);
        if(d < this.w+tanks.w){
            return true;
        }
        else{
            return false;
        }
    }
    move(){
        var xdirref = database.ref('players/player');
        xdirref.on("value",(data)=>{
            xdir=data.val();
        })
        this.x = xdir.x;
        this.y = xdir.y;
    }
}