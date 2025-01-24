export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "downstream-project/_app",
	assets: new Set([".nojekyll","favicon.png","mocklogo1.png","preamble_lottie.json"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.BgMv0wf-.js","app":"_app/immutable/entry/app.DbhBF1Op.js","imports":["_app/immutable/entry/start.BgMv0wf-.js","_app/immutable/chunks/BJlWzzWB.js","_app/immutable/chunks/CXh6Pbic.js","_app/immutable/chunks/CCYeOIUp.js","_app/immutable/chunks/Dbf8PGUb.js","_app/immutable/entry/app.DbhBF1Op.js","_app/immutable/chunks/k_m1u21n.js","_app/immutable/chunks/CXh6Pbic.js","_app/immutable/chunks/CZoHumtT.js","_app/immutable/chunks/BSoORELv.js","_app/immutable/chunks/CFSNHIOO.js","_app/immutable/chunks/Dbf8PGUb.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about-us",
				pattern: /^\/about-us\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/explore",
				pattern: /^\/explore\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
