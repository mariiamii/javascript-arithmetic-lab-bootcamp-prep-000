var a = 1
var b = 80

function add(a, b) {
  return a+b
}

var a = 60
var b = 40

function subtract(a, b) {
  return a-b
}

var a = 2
var b = 3.4

function multiply(a, b) {
  return a*b
}

var a = 5.0
var b = 2.5 

function divide(a, b) {
  return a/b
}

var n = 1
function inc(n) {
  return n++
}

var n =1 
function dec(n) {
  return n--
}


it('inc(n) increments n and returns the result', function() {
  expect(inc(a)).toEqual(a + 1)
})

it('dec(n) decrements n and returns the result', function() {
  expect(dec(a)).toEqual(a - 1)
})


