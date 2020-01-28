# Anivector
 Animate vector graphics using Javascript and CSS - anivector.js

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
	setTimeout(() => vector1.text(100,100,'Hello Skillshare','font-size: 100px;'), 4000);
	setTimeout(() => {
		vector2.text(50,450,'Skillshare','font-size: 400px; font-family: Arial;');
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
