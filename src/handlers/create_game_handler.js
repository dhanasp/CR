class create_game_handler{
  constructor(){
    this.id=1
  }
  execute(req,res){
    let game=new Game(this.id);
  }
  getRequestHandler(){
     return this.execute().bind(this); 
  }
}
module.exports=create_game_handler;