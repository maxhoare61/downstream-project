export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","BP-Logo-history.jpg","BP_baby_ad.gif","DS-graph-51.png","DS-graph-52.png","DS-graph-53.png","OpenFinance_thumnail_crop.jpg","annual-emissions-chart.jpg","article_4.jpg","article_five.jpg","bp-cf-ads.jpg","bp_old_logo.jpg","carbon-fp-trend.png","colchart-climateawareness.png","favicon.png","infograph-1tco2.jpg","mocklogo1.png","perspective-v2.json","political-donations.jpg","preamble_lottie.json","scopes.json","six-americas.png","smoke-stack-extended.jpg","styles/global.css","styles/tokens.css"]),
	mimeTypes: {".jpg":"image/jpeg",".gif":"image/gif",".png":"image/png",".json":"application/json",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.J4owABjt.js","app":"_app/immutable/entry/app.Bf2qNG0c.js","imports":["_app/immutable/entry/start.J4owABjt.js","_app/immutable/chunks/CtYR9gWI.js","_app/immutable/chunks/5lW7ABz8.js","_app/immutable/chunks/9UI3birS.js","_app/immutable/chunks/C99JdHeE.js","_app/immutable/chunks/tLbPkKgv.js","_app/immutable/entry/app.Bf2qNG0c.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/5lW7ABz8.js","_app/immutable/chunks/Bnb1prmT.js","_app/immutable/chunks/DKeQvcmg.js","_app/immutable/chunks/CgUfm643.js","_app/immutable/chunks/DGqtx0UH.js","_app/immutable/chunks/SKRs8As8.js","_app/immutable/chunks/V6w2CZNC.js","_app/immutable/chunks/Cn8mQ5Lj.js","_app/immutable/chunks/9UI3birS.js","_app/immutable/chunks/C5mFiDie.js","_app/immutable/chunks/tLbPkKgv.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js'))
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
				id: "/articles/article-five",
				pattern: /^\/articles\/article-five\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/articles/article-four",
				pattern: /^\/articles\/article-four\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/articles/article-one",
				pattern: /^\/articles\/article-one\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/articles/article-six",
				pattern: /^\/articles\/article-six\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/articles/article-three",
				pattern: /^\/articles\/article-three\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/articles/article-two",
				pattern: /^\/articles\/article-two\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/explore",
				pattern: /^\/explore\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
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
