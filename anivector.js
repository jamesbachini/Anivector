class Anivector {
  constructor(id=false,width=1920,height=1080,style=``) {
    if (!id) id = Math.random();
    this.id = id;
    this.width = width;
    this.height = height;
    this.content = '';
    this.style = style;
    this.transform = {
      scale: '',
      rotation: '',
      print() {
        return this.scale+this.rotation;
      }
    };
  }

  clear () {
    this.content = '';
  };

  addTo (targetId) {
    document.getElementById(targetId).innerHTML = this.vector();
  };

  vector () {
		return `<svg id="${this.id}" version="1.1", height="${this.height}px" width="${this.width}px" viewBox="0 0 ${this.width} ${this.height}" style="${this.style}">${this.content}</svg>`;
  };

  circle (x,y,radius,style=``,id=false) {
		if (!id) id = Math.random();
		this.content += `<circle id="${id}" cx="${x}" cy="${y}" r="${radius}" style="${style}" />`;
	};

  rectangle (x,y,width,height,style=``,id=false) {
		if (!id) id = Math.random();
		this.content += `<rect id="${id}" x="${x}" y="${y}" width="${width}" height="${height}" style="${style}" />`;
	};

  path (d,style=``,id=false) {
		if (!id) id = Math.random();
		this.content += `<path id="${id}" d="${d}" style="${style}" />`;
	};

  text (x,y,text,style=``,id=false) {
		if (!id) id = Math.random();
		this.content += `<text id="${id}" x="${x}" y="${y}" style="${style}">${text}</text>`;
	};

  shrink (scale=1,speed=15) {
    scale -= 0.05;
    if (scale < 0) scale = 0;
    this.transform.scale = `scale(${scale})`;
    document.getElementById(this.id).style.transform = this.transform.print();
    if (scale > 0) setTimeout(() => this.shrink(scale,speed),speed);
  };

  grow (scale=0,max=1,speed=15) {
    scale += 0.05;
    if (scale > max) scale = max;
    this.transform.scale = `scale(${scale})`;
    document.getElementById(id).style.transform = this.transform.print();
    if (scale < max) setTimeout(() => this.grow(scale,max,speed),speed);
  };
  
  spin (rotation=0,speed=15) {
    rotation += 5;
    if (rotation > 360) rotation = 0;
    this.transform.rotation = `rotate(${rotation}deg)`;
		if (!document.getElementById(this.id)) return false;
    document.getElementById(this.id).style.transform = this.transform.print();
    setTimeout(() => this.spin(rotation,speed),speed);
  };

  fadeIn (opacity,max=1) {
    opacity += 0.03;
    if (opacity > max) opacity = max;
    document.getElementById(this.id).style.opacity = opacity;
    if (opacity < max) setTimeout(() => this.fadeIn(opacity,max),30);
  };

  fadeOut (opacity=1) {
    opacity -= 0.03;
    if (opacity < 0) opacity = 0;
    document.getElementById(this.id).style.opacity = opacity;
    if (opacity > 0) setTimeout(() => this.fadeOut(opacity),30);
  };
}
