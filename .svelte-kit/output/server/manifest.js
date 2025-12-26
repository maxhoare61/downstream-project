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
		client: {"start":"_app/immutable/entry/start.tI5y6Umk.js","app":"_app/immutable/entry/app.BRo-c5tR.js","imports":["_app/immutable/entry/start.tI5y6Umk.js","_app/immutable/chunks/CMlII4j1.js","_app/immutable/chunks/BBwZFZ4Q.js","_app/immutable/chunks/Rnr6evyE.js","_app/immutable/chunks/DtWNj1SS.js","_app/immutable/chunks/C7Ccb2ak.js","_app/immutable/entry/app.BRo-c5tR.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/BBwZFZ4Q.js","_app/immutable/chunks/DomR7J3w.js","_app/immutable/chunks/C-Xd0lSa.js","_app/immutable/chunks/BaLy3aCV.js","_app/immutable/chunks/D4PfDTrR.js","_app/immutable/chunks/BManHpkB.js","_app/immutable/chunks/CgpzC4Oa.js","_app/immutable/chunks/C1dGOTeK.js","_app/immutable/chunks/Rnr6evyE.js","_app/immutable/chunks/gb8GQDW0.js","_app/immutable/chunks/C7Ccb2ak.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
