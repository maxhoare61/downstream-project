export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","about-us.jpg","emissions-in-perspective.jpg","favicon.png","mocklogo1.png","political-donations.jpg","preamble_lottie.json","styles/global.css","styles/tokens.css"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".json":"application/json",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.BUchOzWJ.js","app":"_app/immutable/entry/app.DWUQK1Vl.js","imports":["_app/immutable/entry/start.BUchOzWJ.js","_app/immutable/chunks/DuA-Povq.js","_app/immutable/chunks/BW6X3RMq.js","_app/immutable/chunks/UX9YJpLc.js","_app/immutable/chunks/CBun_DBB.js","_app/immutable/entry/app.DWUQK1Vl.js","_app/immutable/chunks/DmOdj0mq.js","_app/immutable/chunks/BW6X3RMq.js","_app/immutable/chunks/-2LoH5so.js","_app/immutable/chunks/BJ8icIrJ.js","_app/immutable/chunks/ka9KkwxP.js","_app/immutable/chunks/CtE9GlRU.js","_app/immutable/chunks/CBun_DBB.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
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
				id: "/articles/article-one",
				pattern: /^\/articles\/article-one\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/explore",
				pattern: /^\/explore\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
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
