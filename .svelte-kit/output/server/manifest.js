export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","about-us.jpg","balloon.png","blue-sky.jpg","bp-cf-ads.jpg","cfc-screenshot.jpg","emissions-graph-1.png","emissions-in-perspective.jpg","favicon.png","footprints-transparent.png","mocklogo1.png","perspective-v2.json","political-donations.jpg","preamble_lottie.json","smoke-stack-extended.jpg","styles/global.css","styles/tokens.css"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".json":"application/json",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.CVhiMOM3.js","app":"_app/immutable/entry/app.B882NJQh.js","imports":["_app/immutable/entry/start.CVhiMOM3.js","_app/immutable/chunks/rUrWBst8.js","_app/immutable/chunks/DD4mjsJM.js","_app/immutable/chunks/BPM6Kjcs.js","_app/immutable/chunks/CMyLQ5eM.js","_app/immutable/entry/app.B882NJQh.js","_app/immutable/chunks/7f8r9I2t.js","_app/immutable/chunks/DD4mjsJM.js","_app/immutable/chunks/BPim84tk.js","_app/immutable/chunks/DMlgdfBL.js","_app/immutable/chunks/DXnFObDU.js","_app/immutable/chunks/CAkxxl8Q.js","_app/immutable/chunks/BQ6FiXC_.js","_app/immutable/chunks/CMyLQ5eM.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
