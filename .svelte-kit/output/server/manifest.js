export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","about-us.jpg","balloon.png","blue-sky.jpg","bp-cf-ads.jpg","calculator-thumbnail.png","cfc-screenshot.jpg","emissions-graph-1.png","emissions-in-perspective.jpg","favicon.png","footprints-transparent.png","mocklogo1.png","perspective-v2.json","political-donations.jpg","preamble_lottie.json","smoke-stack-extended.jpg","styles/global.css","styles/tokens.css"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".json":"application/json",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.DFCdw22u.js","app":"_app/immutable/entry/app.BSxFysNJ.js","imports":["_app/immutable/entry/start.DFCdw22u.js","_app/immutable/chunks/Bb15r-Dj.js","_app/immutable/chunks/DzkEQQzb.js","_app/immutable/chunks/DNWvHczP.js","_app/immutable/chunks/D6STZdQV.js","_app/immutable/entry/app.BSxFysNJ.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DzkEQQzb.js","_app/immutable/chunks/B_enjVDI.js","_app/immutable/chunks/BdObXAAd.js","_app/immutable/chunks/DMl8LHv4.js","_app/immutable/chunks/Cq_vkV2p.js","_app/immutable/chunks/Jhlp73W7.js","_app/immutable/chunks/3YygtruM.js","_app/immutable/chunks/CydCMTb6.js","_app/immutable/chunks/D6STZdQV.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
