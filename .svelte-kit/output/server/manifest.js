export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","about-us.jpg","balloon.png","blue-sky.jpg","bp-cf-ads.jpg","calculator-thumbnail.png","carbon-fp-trend.png","cfc-screenshot.jpg","emissions-graph-1.png","emissions-in-perspective.jpg","favicon.png","footprints-transparent.png","mocklogo1.png","perspective-v2.json","political-donations.jpg","preamble_lottie.json","smoke-stack-extended.jpg","styles/global.css","styles/tokens.css"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".json":"application/json",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.BOBwMry7.js","app":"_app/immutable/entry/app.002hbxE0.js","imports":["_app/immutable/entry/start.BOBwMry7.js","_app/immutable/chunks/CY2uch1Q.js","_app/immutable/chunks/N84nhSPx.js","_app/immutable/chunks/BMwfVSHN.js","_app/immutable/chunks/D-kdLbdY.js","_app/immutable/entry/app.002hbxE0.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/N84nhSPx.js","_app/immutable/chunks/H9lVyFwr.js","_app/immutable/chunks/mn9GTD1c.js","_app/immutable/chunks/DttLfJ2O.js","_app/immutable/chunks/CAsUI1Vc.js","_app/immutable/chunks/DquVoF9p.js","_app/immutable/chunks/lh6egGIj.js","_app/immutable/chunks/D-kdLbdY.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
