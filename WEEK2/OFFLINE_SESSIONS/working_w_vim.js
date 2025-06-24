console.log("nice catch!!");

class Rectangle{
	constructor(width, length, color){
		this.width = width;
		this.length = length;
		this.color = color;
	}

	perimeter(){
		return 2*( this.width + this.length);
	}
	colour(){
		console.log(this.color);
	}
}

const R1 = new Rectangle(3, 5, "red");
