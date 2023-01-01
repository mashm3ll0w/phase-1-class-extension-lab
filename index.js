// Your code here
class Polygon{
  constructor([...args]){
    this.sides = [...args]
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((acc, side) => acc += side)
  }
}


class Triangle extends Polygon{
  get isValid(){
    const [a, b, c] = this.sides
    if (a + b > c && b + c > a && a + c > b){
      return true
    }
    else return false
  }
}

class Square extends Polygon{
  get isValid(){
    // return this.sides.every(side => {
    //   if (side === this.sides[0]){
    //     return true
    //   }
    //   else return false
    // })
    return (new Set(this.sides).size === 1 ? true : false)
  }

  get area(){
    return this.sides[0] ** 2
  }
}


// Test data

const shape = new Polygon([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(shape.countSides)
console.log(shape.perimeter)

const triangle = new Triangle( [ 1, 1, 5 ] )
console.log(triangle.isValid)

const square = new Square( [3, 3, 3, 3] )
console.log(square.area)
console.log(square.isValid)