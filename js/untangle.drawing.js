if (untangleGame === undefined) {
var untangleGame = {};
}

function randWarna() {
	var r=250*Math.random()|25,
	    g=225*Math.random()|25,
	    b=200*Math.random()|25;
	return 'rgb(' + r +',' + g + ',' + b + ')';
}
untangleGame.drawCircle = function(x, y, radius) {
var ctx = untangleGame.ctx;
ctx.fillStyle = randWarna();
ctx.beginPath();
ctx.arc(x, y, radius, 100, Math.PI*2, true);
ctx.closePath();
ctx.fill();
};