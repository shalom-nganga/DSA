class cat {
  constructor(name, breed, age){
      this.name = name
      this.breed = breed
      this.age = age
      this.favFood = []

    }
    introduce = function () {
        return `hi my name is${this.name} and im a ${this.breed}`
  }
  addFood = (food) => {
    this.favFood.push(food)
  }
  LoopThroughFoods() {
    this.favFood.forEach(food => {
        console.log(`hi my name is ${this.name} and i love eating ${food}`)
    }) 
  }
}

let rose = new cat('rose', 'husky', 12)
let becky = new cat('becky', 'canaine', 9)
rose.addFood('fish')
rose.addFood('greens')
rose.addFood('meat')


//    console.log(this)  