export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "downstream-project/_app",
	assets: new Set([".nojekyll","favicon.png","mocklogo1.png","preamble_lottie.json","styles/global.css","styles/tokens.css"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.CvGwl4Ob.js","app":"_app/immutable/entry/app.C3n-T9Kk.js","imports":["_app/immutable/entry/start.CvGwl4Ob.js","_app/immutable/chunks/CiGS7CaU.js","_app/immutable/chunks/DzWE_ddi.js","_app/immutable/chunks/DdcpUOxD.js","_app/immutable/chunks/CKksi7zM.js","_app/immutable/entry/app.C3n-T9Kk.js","_app/immutable/chunks/CkPax-wO.js","_app/immutable/chunks/DzWE_ddi.js","_app/immutable/chunks/B1PbRolo.js","_app/immutable/chunks/CoGNq-27.js","_app/immutable/chunks/XHkML9iF.js","_app/immutable/chunks/Chl_3Gad.js","_app/immutable/chunks/CKksi7zM.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
