function distanceBetweenPoints(a, b) {
    let heigth  = (a.y - b.y),
        width   = (b.x - a.x);
    let distance = Math.sqrt(heigth**2 + width**2);
    return distance;

}

console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)));