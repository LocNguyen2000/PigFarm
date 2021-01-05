class Pig {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.id = maxId;
    this.weight = 20;
    this.eaten = 0;
    this.cumulative = 0;
    this.remain = Math.floor(Math.random() * (5 - 0) + 1);
    this.eatingSpeed = 5;
    // state: 'eat, not-eat'
    this.state = 'not-eat'
  }
  eat() {
    for (let i = 0; i < troughList.length; i++) {
      console.log(troughList[i].pigID);
      if (troughList[i].pigID == 0) {
        troughList[i].pigID = this.id;
        troughList[i].amount = Math.floor(Math.random() * (this.remain - 0) + 1);
        this.state = 'eat'
        this.eaten += troughList[i].amount
        this.remain -= troughList[i].amount
        this.cumulative += this.eaten
        break;
      }
    }
    console.log("eat");
    renderTable1();
    
    setTimeout(() => {
      for (let i = 0; i < troughList.length; i++) {
        if(troughList[i].pigID == this.id){
          troughList[i].pigID = 0
          troughList[i].amount = 0
        }
      }
      this.state = 'not-eat'
      renderTable1()
      renderTable2()

    }, this.eatingSpeed * 1000);
  }
  
}
