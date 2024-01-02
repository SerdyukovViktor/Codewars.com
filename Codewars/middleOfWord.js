function getMiddle(s)
{
    //Code goes here!
    return s.substr((Math.ceil(s.length / 2) - 1), (2 - s.length % 2))
}

console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");