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
		client: {"start":"_app/immutable/entry/start.CvbBdXrR.js","app":"_app/immutable/entry/app.Bkypwmsb.js","imports":["_app/immutable/entry/start.CvbBdXrR.js","_app/immutable/chunks/B1SIWpXH.js","_app/immutable/chunks/BBwZFZ4Q.js","_app/immutable/chunks/Rnr6evyE.js","_app/immutable/chunks/DEFOvSlV.js","_app/immutable/chunks/C7Ccb2ak.js","_app/immutable/entry/app.Bkypwmsb.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/BBwZFZ4Q.js","_app/immutable/chunks/DomR7J3w.js","_app/immutable/chunks/C-Xd0lSa.js","_app/immutable/chunks/BaLy3aCV.js","_app/immutable/chunks/D4PfDTrR.js","_app/immutable/chunks/BManHpkB.js","_app/immutable/chunks/CgpzC4Oa.js","_app/immutable/chunks/C1dGOTeK.js","_app/immutable/chunks/Rnr6evyE.js","_app/immutable/chunks/gb8GQDW0.js","_app/immutable/chunks/C7Ccb2ak.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
				id: "/explore",
				pattern: /^\/explore\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/publications/art_01",
				pattern: /^\/publications\/art_01\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/publications/art_04",
				pattern: /^\/publications\/art_04\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/publications/art_05",
				pattern: /^\/publications\/art_05\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/publications/art_06",
				pattern: /^\/publications\/art_06\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/publications/article-three",
				pattern: /^\/publications\/article-three\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/publications/article-two",
				pattern: /^\/publications\/article-two\/?$/,
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
