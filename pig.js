class Pig {
  constructor() {
    this.x = Math.floor(Math.random() * (10 - 0) + 0);
    this.y = Math.floor(Math.random() * (10 - 0) + 0);
    this.id = maxId;
    this.weight = 20;
    this.eaten = 0;
    this.cumulative = 0;
    this.remain = parseFloat(Math.floor(Math.random() * (5 - 0) + 1)).toFixed(1);
    this.eatingSpeed = 5;
  }
  setPos(x_, y_){
    this.x = x_
    this.y = y_
  }
  // weigh event => pig eats
  eat() {
    for (let i = 0; i < troughList.length; i++) {
      // check if trough empty
      if (troughList[i].pigID == 0) {
        troughList[i].pigID = this.id;
        troughList[i].amount = Math.floor(
          Math.random() * (this.remain - 0) + 1
        );
        this.eaten += troughList[i].amount;
        this.remain -= troughList[i].amount;
        this.cumulative += troughList[i].amount;
        break;
      }
    }
    console.log("eat");

    renderTable1();
    // wait for pig eats => change table
    setTimeout(() => {
      for (let i = 0; i < troughList.length; i++) {
        if (troughList[i].pigID == this.id) {
          troughList[i].pigID = 0;
          troughList[i].amount = 0;
        }
      }
      renderTable1();
      renderTable2();
    }, this.eatingSpeed * 1000);
  }
}
