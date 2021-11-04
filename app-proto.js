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

  // left of the dot is the button, so we need to redirect what this should point to (counter) using .bind(this)
  this.resetBtn.addEventListener('click', this.reset.bind(this))
  this.increaseBtn.addEventListener('click', this.increase.bind(this))
  this.decreaseBtn.addEventListener('click', this.decrease.bind(this))
}

Counter.prototype.increase = function() {
  this.value++
  this.valueNum.textContent = this.value
}
Counter.prototype.decrease = function() {
  this.value--
  this.valueNum.textContent = this.value
}
Counter.prototype.reset = function() {
  this.value = 0
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