# Anivector
 Animate vector graphics using Javascript and CSS - anivector.js

## Methods 

### clear ()
Clears vector contents

### addTo (targetId)
Adds vector to container with target ID i.e. <div id="xyz"></div>

### vector ()
Output vector - print to string

### circle (x,y,radius,style=``,id=false)
Create a circle using x,y cordinates for center point and a radius

### rectangle (x,y,width,height,style=``,id=false)
Create a rectangle or square with x,y cordinates plus width and height

### path (d,style=``,id=false)
Create a path using a d variable string.
For more info see: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths

### text (x,y,text,style=``,id=false)
Create some text

### shrink (scale=1,speed=15)
Shrink the vector using css transform: scale()
Optional scale and speed variables

### grow (scale=0,max=1,speed=15)
Grow the vector using css transform: scale()
Scale is starting point, max is end point 1 = full.

### spin (rotation=0,speed=15)
Spin the vector constantly using css transform: rotate(xdeg)

### fadeIn (opacity,max=1)
Fade in using css opacity

### fadeOut (opacity=1)
Fade out using css opacity


## Example

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Anivector Test</title>
  <script type="text/javascript" src="anivector.js"></script>
  <style>
  #container {
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    margin: 0 auto;
    background: #0F0;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  #container * {
    position: absolute;
    top: 0px;
    left: 0px;
  }
  </style>
</head>
<body>
  <div id="container"></div>
<script>
  const vector1 = new Anivector();
  const vector2 = new Anivector();
  vector1.circle(540,520,300);
  vector1.rectangle(940,220,600,600);
  vector1.addTo('container');
  vector1.spin();
  setTimeout(() => vector1.shrink(), 3000);
  setTimeout(() => {
    vector2.text(50,450,'Hello World','font-size: 400px; font-family: Arial;');
    vector2.addTo('container');
    setTimeout(() => vector2.fadeOut(),4000);
  }, 5000);
</script>
</body>
</html>
```

## Tested
Tested on Firefox and Chrome


## Release Notes

Latest release: 1.0.0

### 1.0.0

Anivector v1.0.0 initial release

## Known Issues

None

### Links

* [James Bachini](https://jamesbachini.com)
