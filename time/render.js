var fs = require('fs');
const Vue = require('vue')
 
const renderer = require('vue-server-renderer').createRenderer()
const code = fs.readFileSync( './time/server/server.chunk.js' );
const bundleRenderer = require('vue-server-renderer').createBundleRenderer(code);

bundleRenderer.renderToString((err, html) => {
	fs.writeFileSync( './time/haha.html',html );
})
 
// const vm = new Vue(code)
 
// renderer.renderToString(vm, (err, html) => {
// 	fs.writeFileSync( './time/haha.html',html );
// })