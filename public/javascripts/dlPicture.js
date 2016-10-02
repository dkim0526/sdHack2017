var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
img.onload = function() {
  draw(this);
};

function draw(img) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  img.crossOrigin = "Anonymous";
  img.style.display = 'none';


  function resize(){
	var hx = (canvas.width-1.0)/(300-1.0);
	var hy = (canvas.height-1.0)/(200-1.0);
	var newx = 0.0, newy = 0.0, deltax = 0.0, deltay = 0.0;
	var x = 0, y = 0, i = 0, j = 0;
	var newcanvas = document.getElementById('zoom');
	var newctx = newcanvas.getContext('2d');
	var img2 = newctx.getImageData(0,0,newcanvas.width, newcanvas.height);
	var data = img2.data;

	for (i = 0; i < canvas.width; i++){
		for (j = 0; j < canvas.height; j++){
			newx = i*hx;
			newy = j*hy;
			x = parseInt(newx);
			y = parseInt(newy);
			if (x < 0)
				x = 0;
			if (x >canvas.width - 2)
				x = canvas.width - 2;
			if (y < 0)
				y = 0;
			if (y > canvas.height - 2)
				y = canvas.height - 2;
			deltax = newx - x;
			deltay = newy - y;
			for(k = 0; k < data.length; k+=4){
				for (m = 0; m < 3; m++){
					data[k+m] = 
						(1.0-deltax) * (1.0-deltay)*ctx.getImageData(x,y,0,0).data[k+m] +
						(1.0-deltax) * deltay * ctx.getImageData(x,y+1,0,0).data[k+m] +
						deltax * (1.0-deltay) * ctx.getImageData(x+1,y,0,0).data[k+m] +
						deltax * deltay * ctx.getImageData(x+1,y+1,0,0).data[k+m];
				}
			}			
		}
	}
	newctx.putImageData(img2, 0, 0);
	newctx.drawImage(img,0,0);
};
}