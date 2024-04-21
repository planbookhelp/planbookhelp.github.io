// 设计游戏类
class Game{
  constructor(select,scoreEle,gameoverbg){
    this.startbtn=document.querySelector("#start")
    this.gameoverimg=document.querySelector(gameoverbg)
    // 地图
    this.map=document.querySelector(select)
    //计分板
    this.scoreEle=document.querySelector(scoreEle)
    // 食物
    this.food=new Food(select)
    // 蛇
    this.snake=new Snake(select)
    //定义计时器
    this.timer=0
    // 得分
    this.cunt=0
  
  }
  //  定义游戏开始的方法
  start(){
    this.gameoverimg.style.display="none"
    this.timer= setInterval(() => {
      // 让蛇动起来
      this.snake.move()
      //判断是否吃到食物
      if (this.snake.isEat(this.food.x,this.food.y)) {
         //吃到食物要变长，调用增加蛇头的方法
         this.snake.createHead()
         //食物的位置更新
         this.food.foodPos()
         //调用得分增加更新分数
         this.scorechange()
      
      }
      //判断蛇是否死亡
      if (this.snake.isDie()) {
        clearInterval(this.timer)
        this.gameover()
      }
    }, 500);
  }
  // 暂停
  pause(){
    clearInterval(this.timer)
  }
  // 重新开始
  restart(){
    // 释放开始按钮
    this.startbtn.disabled=false
    window.location.reload()
  }
  // 改变方向的方法
  change(type){
    this.snake.direction=type
  }
  //得分增加
  scorechange(){
       //得分增加
       this.cunt++
       this.scoreEle.innerText=this.cunt
  }
  //游戏结束的方法
  gameover(){
     this.gameoverimg.style.display="block"
     //禁用 掉开始按钮的点击
     this.startbtn.disabled=true

  }
}