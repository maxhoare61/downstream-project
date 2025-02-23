export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","about-us.jpg","bp-cf-ads.jpg","cfc-screenshot.jpg","emissions-graph-1.png","emissions-in-perspective.jpg","favicon.png","footprints-transparent.png","mocklogo1.png","perspective-v2.json","political-donations.jpg","preamble_lottie.json","smoke-stack-extended.jpg","styles/global.css","styles/tokens.css"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".json":"application/json",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.AYCgVViL.js","app":"_app/immutable/entry/app.B3pFchgs.js","imports":["_app/immutable/entry/start.AYCgVViL.js","_app/immutable/chunks/Dm6dMC91.js","_app/immutable/chunks/BPOaqogl.js","_app/immutable/chunks/CtlptF1z.js","_app/immutable/chunks/DwPnOOVN.js","_app/immutable/entry/app.B3pFchgs.js","_app/immutable/chunks/0wObXGaB.js","_app/immutable/chunks/BPOaqogl.js","_app/immutable/chunks/Dv6QKi4_.js","_app/immutable/chunks/QIQhJl4H.js","_app/immutable/chunks/BsuhtuCv.js","_app/immutable/chunks/DhoBeq3A.js","_app/immutable/chunks/DwPnOOVN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
