export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","BP-Logo-history.jpg","about-us.jpg","annual-emissions-chart.jpg","balloon.png","blank-pfp.jpg","bp-boardroom.jpg","bp-cf-ads.jpg","calculator-thumbnail.png","carbon-fp-trend.png","carpentaria-karumba-queensland.jpg","cfc-screenshot.jpg","emissions-graph-1.png","emissions-in-perspective.jpg","favicon.png","footprints-transparent.png","mocklogo1.png","perspective-v2.json","political-donations.jpg","preamble_lottie.json","scopes.json","shell-pfp.jpg","smoke-stack-extended.jpg","styles/global.css","styles/tokens.css","twitter-icon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".json":"application/json",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.mlsKoTtf.js","app":"_app/immutable/entry/app.CXlfAPLR.js","imports":["_app/immutable/entry/start.mlsKoTtf.js","_app/immutable/chunks/BGtLF1Fj.js","_app/immutable/chunks/DkuR2h71.js","_app/immutable/chunks/Clw94ien.js","_app/immutable/chunks/DJ06FuHk.js","_app/immutable/chunks/DVy7si5e.js","_app/immutable/entry/app.CXlfAPLR.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DkuR2h71.js","_app/immutable/chunks/CqNWsa6F.js","_app/immutable/chunks/Ctx4Pf3h.js","_app/immutable/chunks/DyP0Hlkv.js","_app/immutable/chunks/D8m06CPG.js","_app/immutable/chunks/DECK7M2C.js","_app/immutable/chunks/PXt0EZiu.js","_app/immutable/chunks/ksjtCClb.js","_app/immutable/chunks/Clw94ien.js","_app/immutable/chunks/BpE8ltH5.js","_app/immutable/chunks/DVy7si5e.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
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
				id: "/articles/article-three",
				pattern: /^\/articles\/article-three\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/articles/article-two",
				pattern: /^\/articles\/article-two\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/explore",
				pattern: /^\/explore\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
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
