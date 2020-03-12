class Grid{

	constructor(_canvas, rows, cols){
		
		this.canvas = _canvas;
		this.rows = rows;
		this.cols = cols;
		this.points = Create2DArray(this.rows + 1, this.cols + 1);
		this.ctx = this.canvas.getContext('2d');
		this.ctx.fillStyle = "black";
		this.cellSizeX = this.canvas.offsetWidth / this.rows;
		this.cellSizeY = this.canvas.offsetHeight / this.cols;
		for(let i = 0; i < this.points.length; i++){
			for(let j = 0; j < this.points[0].length; j++){

				this.points[i][j] = this.canvas.offsetWidth / this.rows * i * (j < 1 ? 1 : 0) + this.canvas.offsetHeight / this.cols * j;

			}
		}
	}

	DrawShape(shape, x, y){
		if(shape == "rect"){
			if(x > this.points.length || y > this.points[0].length) {
				throw new Error("TypeExeption");
				return;
			}
			this.ctx.fillRect(this.points[x - 1][0], this.points[0][y - 1], this.cellSizeX, this.cellSizeY);

		}
		else{
			throw new Error("TypeExeption");
			return;
		}
	}

	SetColor(color){
		if(typeof color === "string"){
			this.ctx.fillStyle = color;

		}
	}

	DrawSequence(pixels){

	}


	CreatePixelMap(color, position){

	}
}



function Create2DArray(rows, cols) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = new Array(cols);

  }

  return arr;
}


	let canvas = document.getElementById('Canvas');
	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;

	let grid2D = new Grid(canvas, 10, 10);
	grid2D.DrawShape("rect", 1, 1);
	grid2D.SetColor("green");
	grid2D.DrawShape("rect", 1, 10);
	grid2D.SetColor("red");
	grid2D.DrawShape("rect", 10, 10);
	grid2D.SetColor("aqua");
	grid2D.DrawShape("rect", 10, 1);

	


