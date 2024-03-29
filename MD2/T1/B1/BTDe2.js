function detectCollision(objects, point) {
    let founodobject = objects.find(({x,y,width,height})=>{
        return point.x>=x && point.x <= x + width &&
            point.y >= y && point.y <= y + height
    })
    return founodobject;
}
const myObjects = [
    {x:  10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x:   0, y:  0, width: 10, height:  5}
]
console.log(detectCollision(myObjects, {x: 4, y: 2}))