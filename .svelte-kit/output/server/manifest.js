export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","about-us.jpg","balloon.png","blue-sky.jpg","bp-cf-ads.jpg","calculator-thumbnail.png","carbon-fp-trend.png","carpentaria-karumba-queensland.jpg","cfc-screenshot.jpg","emissions-graph-1.png","emissions-in-perspective.jpg","favicon.png","footprints-transparent.png","mocklogo1.png","perspective-v2.json","political-donations.jpg","preamble_lottie.json","smoke-stack-extended.jpg","styles/global.css","styles/tokens.css"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".json":"application/json",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.CCrERAv9.js","app":"_app/immutable/entry/app.CBKKac2Z.js","imports":["_app/immutable/entry/start.CCrERAv9.js","_app/immutable/chunks/CbUS1MUy.js","_app/immutable/chunks/DwA5C2Sx.js","_app/immutable/chunks/B1fG5muO.js","_app/immutable/chunks/m_Jc1BPw.js","_app/immutable/chunks/CsrgPRc4.js","_app/immutable/entry/app.CBKKac2Z.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DwA5C2Sx.js","_app/immutable/chunks/DL5e9Qj9.js","_app/immutable/chunks/YE37X6u0.js","_app/immutable/chunks/BCNvZDCa.js","_app/immutable/chunks/XY3dAnIK.js","_app/immutable/chunks/CQ1VbVzY.js","_app/immutable/chunks/C-m7fHYS.js","_app/immutable/chunks/CrQw1KKS.js","_app/immutable/chunks/B1fG5muO.js","_app/immutable/chunks/QkOyKOJU.js","_app/immutable/chunks/CsrgPRc4.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
