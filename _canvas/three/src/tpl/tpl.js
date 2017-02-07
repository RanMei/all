const fs = require('fs');
const path = require('path');

var config = [{
	name: 'cube'
}]

config.forEach(a=>{
	var tpl =
`
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${a.name}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <style>
      body {
        font-family: Monospace;
        background-color: #f0f0f0;
        margin: 0px;
        overflow: hidden;
      }
    </style>
  </head>
  <body>

    <script type="text/javascript" src="../../vendor/threejs/three.min.js"></script>

    <script type="text/javascript" src="../../vendor/threejs/controls/OrbitControls.js"></script>
    <script type="text/javascript" src="../../vendor/threejs/controls/FlyControls.js"></script>

    <script type="text/javascript" src="../../vendor/threejs/renderers/Projector.js"></script>
    <script type="text/javascript" src="../../vendor/threejs/renderers/CanvasRenderer.js"></script>

    <script type="text/javascript" src="../../vendor/threejs/libs/stats.min.js"></script>

    <script type="text/javascript" src="src/${a.name}.js"></script>

  </body>
</html>
`;
fs.writeFileSync( path.resolve( __dirname,'../../'+a.name+'.html'),tpl );
})
