function Sleigh() {
    Sleigh.prototype.authenticate = finction(name, pass) {
        return name === "Santa Claus" && pass === "Ho Ho Ho!";
    }
}

console.log(Sleigh.prototype.authenticate("Santa Claus", "Ho Ho Ho!"))