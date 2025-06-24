//writing the syntax of a class
//a class is a blueprint of the object.
class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = "";
    }

    area(){
        return this.height * this.width;
    }

    printcolor(){
        console.log("the color is "+ this.color);
    }
}

const rect = new Rectangle;//rect here is the object created.
rect.width = 2;
rect.height = 3;
rect.color = "red";

console.log(rect.area());
console.log(rect.printcolor());