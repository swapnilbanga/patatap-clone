var objects = [];
var pressedKey;
var keyData = {
			q: {
				sound: new Howl({
		  		urls: ['sounds/bubbles.mp3']
				}),
				color: '#b3b3ff',
				initialize: function()
				{
					createCircle(this.color);
				}
			},
			w: {
				sound: new Howl({
		  		urls: ['sounds/clay.mp3']
				}),
				color: '#2ecc71',
				initialize: function()
				{
					createRectangle(this.color);
				}
			},
			e: {
				sound: new Howl({
		  		urls: ['sounds/confetti.mp3']
				}),
				color: '#3498db',
				initialize: function()
				{
					createCircle(this.color);
				}
			},
			r: {
				sound: new Howl({
		  		urls: ['sounds/corona.mp3']
				}),
				color: '#9b59b6',
				initialize: function()
				{
					createRectangle(this.color);
				}
			},
				t: {
				sound: new Howl({
		  		urls: ['sounds/dotted-spiral.mp3']
				}),
				color: '#34495e',
				initialize: function()
				{
					createRectangle(this.color);
				}
			},
			y: {
				sound: new Howl({
		  		urls: ['sounds/flash-1.mp3']
				}),
				color: '#9966ff',
				initialize: function()
				{
					createCircle(this.color);
				}
			},
			u: {
				sound: new Howl({
		  		urls: ['sounds/flash-2.mp3']
				}),
				color: '#27ae60',
				initialize: function()
				{
					createRectangle(this.color);
				}
			},
			i: {
				sound: new Howl({
		  		urls: ['sounds/flash-3.mp3']
				}),
				color: '#2980b9',
				initialize: function()
				{
					createCircle(this.color);
				}
			},
			o: {
				sound: new Howl({
					urls: ['sounds/glimmer.mp3']
				}),
				color: '#8e44ad',
				initialize: function()
				{
					createCircle(this.color);
				}
			},
			p: {
				sound: new Howl({
		  		urls: ['sounds/moon.mp3']
				}),
				color: '#a6a6a6',
				initialize: function()
				{
					createCircle(this.color);
				}
			},
			a: {
				sound: new Howl({
		  		urls: ['sounds/pinwheel.mp3']
				}),
				color: '#f1c40f',
				initialize: function()
				{
					createCircle(this.color);
				}

			},
			s: {
				sound: new Howl({
		  		urls: ['sounds/piston-1.mp3']
				}),
				color: '#e67e22',
				initialize: function()
				{
					createCircle(this.color);
				}
			},
				d: {
				sound: new Howl({
		  		urls: ['sounds/piston-2.mp3']
				}),
				color: '#e74c3c',
				initialize: function()
				{
					createRectangle(this.color);
				}
			},
			f: {
				sound: new Howl({
		  		urls: ['sounds/prism-1.mp3']
				}),
				color: '#95a5a6',
				initialize: function()
				{
					createCircle(this.color);
					
				}
			},
			g: {
				sound: new Howl({
		  		urls: ['sounds/prism-2.mp3']
				}),
				color: '#f39c12',
				initialize: function()
				{
					createCircle(this.color);
					
				}
			},
			h: {
				sound: new Howl({
		  		urls: ['sounds/prism-3.mp3']
				}),
				color: '#d35400',
				initialize: function()
				{
					createCircle(this.color);
					
				}
			},
			j: {
				sound: new Howl({
		  		urls: ['sounds/splits.mp3']
				}),
				color: '#1abc9c',
				initialize: function()
				{
					createRectangle(this.color);
				}
			},
			k: {
				sound: new Howl({
		  		urls: ['sounds/squiggle.mp3']
				}),
				color: '#2ecc71',
				initialize: function()
				{
					createCircle(this.color);
					
				}
			},
			l: {
				sound: new Howl({
		  		urls: ['sounds/strike.mp3']
				}),
				color: '#ffc299',
				initialize: function()
				{
					createCircle(this.color);
					
				}
			},
			z: {
				sound: new Howl({
		  		urls: ['sounds/suspension.mp3']
				}),
				color: '#9b59b6',
				initialize: function()
				{
					createRectangle(this.color);
				}
			},
			x: {
				sound: new Howl({
		  		urls: ['sounds/timer.mp3']
				}),
				color: '#b8b894',
				initialize: function()
				{
					createCircle(this.color);
					
				}
			},
			c: {
				sound: new Howl({
		  		urls: ['sounds/ufo.mp3']
				}),
				color: '#16a085',
				initialize: function()
				{
					createRectangle(this.color);
				}
			},
			v: {
				sound: new Howl({
		  		urls: ['sounds/veil.mp3']
				}),
				color: '#c65353',
				initialize: function()
				{
					createCircle(this.color);
					
				}
			},
			b: {
				sound: new Howl({
		  		urls: ['sounds/wipe.mp3']
				}),
				color: '#c1f0f0',
				initialize: function()
				{
					createCircle(this.color);
					
				}
			},
			n: {
				sound: new Howl({
					urls: ['sounds/zig-zag.mp3']
				}),
				color: '#9999ff',
				initialize: function()
				{
					createRectangle(this.color);
				}
			},
			m: {
				sound: new Howl({
		  		urls: ['sounds/moon.mp3']
				}),
				color: '#2c3e50',
				initialize: function()
				{
					createCircle(this.color);
					
				}

			}
		}

		function createRectangle(passColor)
		{
			var newPoint = calculatePoint();
			var size = new Size(250, 150);
			var myRectangle = new Path.Rectangle(newPoint, size);
			myRectangle.fillColor = passColor;
			objects.push(myRectangle);
			console.log(objects);
		}

		function createCircle(passColor)
		{
			var newPoint = calculatePoint();
			var newCircle = new Path.Circle(newPoint,300)
			newCircle.fillColor = passColor;
			objects.push(newCircle);
		}

		function calculatePoint()
		{
			var maxPoint = new Point(view.size.width, view.size.height);
			var randomPoint = Point.random();
			var point = maxPoint * randomPoint;
			return (point);
		}

		function onKeyDown(event) 
		{
			pressedKey = event.key;
			console.log(pressedKey);
			if(keyData[event.key])
			{
				keyData[event.key].sound.play();
				keyData[event.key].initialize();
			}
		}

		// function onFrame(event) 
		// {
		// 	for(var i = 0; i < objects.length; i++)
		// 	{
  //       		objects[i].scale(0.9);
  //      			objects[i].fillColor.hue += 1;
		//        	if(objects[i].area < 1)
		//        	 {
		//        		objects[i].remove();
		//          	objects.splice(i, 1);
		//           	console.log(objects);
		// 		 }

  //     	}
  //   	}


    function Ball(r, p, v) {
	this.radius = r;
	this.point = p;
	this.vector = v;
	this.maxVec = 15;
	this.numSegment = Math.floor(r / 3 + 2);
	this.boundOffset = [];
	this.boundOffsetBuff = [];
	this.sidePoints = [];
	this.path = new Path({
		fillColor: '#ffb3b3',
		blendMode: 'lighter'
	});

	for (var i = 0; i < this.numSegment; i ++) {
		this.boundOffset.push(this.radius);
		this.boundOffsetBuff.push(this.radius);
		this.path.add(new Point());
		this.sidePoints.push(new Point({
			angle: 360 / this.numSegment * i,
			length: 1
		}));
	}
}

Ball.prototype = {
	iterate: function() {
		this.checkBorders();
		if (this.vector.length > this.maxVec)
			this.vector.length = this.maxVec;
		this.point += this.vector;
		this.updateShape();
	},

	checkBorders: function() {
		var size = view.size;
		if (this.point.x < -this.radius)
			this.point.x = size.width + this.radius;
		if (this.point.x > size.width + this.radius)
			this.point.x = -this.radius;
		if (this.point.y < -this.radius)
			this.point.y = size.height + this.radius;
		if (this.point.y > size.height + this.radius)
			this.point.y = -this.radius;
	},

	updateShape: function() {
		var segments = this.path.segments;
		for (var i = 0; i < this.numSegment; i ++)
			segments[i].point = this.getSidePoint(i);

		this.path.smooth();
		for (var i = 0; i < this.numSegment; i ++) {
			if (this.boundOffset[i] < this.radius / 4)
				this.boundOffset[i] = this.radius / 4;
			var next = (i + 1) % this.numSegment;
			var prev = (i > 0) ? i - 1 : this.numSegment - 1;
			var offset = this.boundOffset[i];
			offset += (this.radius - offset) / 15;
			offset += ((this.boundOffset[next] + this.boundOffset[prev]) / 2 - offset) / 3;
			this.boundOffsetBuff[i] = this.boundOffset[i] = offset;
		}
	},

	react: function(b) {
		var dist = this.point.getDistance(b.point);
		if (dist < this.radius + b.radius && dist != 0) {
			var overlap = this.radius + b.radius - dist;
			var direc = (this.point - b.point).normalize(overlap * 0.015);
			this.vector += direc;
			b.vector -= direc;

			this.calcBounds(b);
			b.calcBounds(this);
			this.updateBounds();
			b.updateBounds();
		}
	},

	getBoundOffset: function(b) {
		var diff = this.point - b;
		var angle = (diff.angle + 180) % 360;
		return this.boundOffset[Math.floor(angle / 360 * this.boundOffset.length)];
	},

	calcBounds: function(b) {
		for (var i = 0; i < this.numSegment; i ++) {
			var tp = this.getSidePoint(i);
			var bLen = b.getBoundOffset(tp);
			var td = tp.getDistance(b.point);
			if (td < bLen) {
				this.boundOffsetBuff[i] -= (bLen  - td) / 2;
			}
		}
	},

	getSidePoint: function(index) {
		return this.point + this.sidePoints[index] * this.boundOffset[index];
	},

	updateBounds: function() {
		for (var i = 0; i < this.numSegment; i ++)
			this.boundOffset[i] = this.boundOffsetBuff[i];
	}
};

//--------------------- main ---------------------

var balls = [];
var numBalls = 18;
for (var i = 0; i < numBalls; i++) {
	var position = Point.random() * view.size;
	var vector = new Point({
		angle: 360 * Math.random(),
		length: Math.random() * 10
	});
	var radius = Math.random() * 60 + 60;
	balls.push(new Ball(radius, position, vector));
}

function onFrame() {
	for (var i = 0; i < balls.length - 1; i++) {
		for (var j = i + 1; j < balls.length; j++) {
			balls[i].react(balls[j]);
		}
	}
	for (var i = 0, l = balls.length; i < l; i++) {
		balls[i].iterate();
	}
	for(var i = 0; i < objects.length; i++)
			{
        		objects[i].scale(0.9);
       			objects[i].fillColor.hue += 1;
		       	if(objects[i].area < 1)
		       	 {
		       		objects[i].remove();
		         	objects.splice(i, 1);
		          	console.log(objects);
				 }

      	}
}