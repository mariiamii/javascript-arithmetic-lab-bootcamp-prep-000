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

var a = 1
function inc(a) {
  return a+1
}

var a = 1 
function dec(a) {
  return a-1
}

var a = 2 
function parseInt('a', 10) {
  return a, 10
}


describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})




