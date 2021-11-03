function Counter (element, value) {
  this.counter = element
  this.value = value
  
  // selectors
  this.valueNum = element.querySelector('.value')
  this.resetBtn = element.querySelector('.reset')
  this.increaseBtn = element.querySelector('.increase')
  this.decreaseBtn = element.querySelector('.decrease')

  // set starting count
  this.valueNum.textContent = this.value

  // this.resetBtn.addEventListener('click', this.reset.bind(element))
}

Counter.prototype.increase = function() {
  console.log(this);
  this.value++
  this.valueNum.textContent = this.value
}
Counter.prototype.decrease = function() {
  this.value--
  this.valueNum.textContent = this.value
}
Counter.prototype.reset = function() {
  this.value = 0
  console.log(this.value, this);
  this.valueNum.textContent = this.value
}



const firstCounter = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)
// firstCounter.reset()


// function to generate a selector
function getElement (selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  }
  throw new Error (`Please check "${selection}" selector, no such element exists`)
}