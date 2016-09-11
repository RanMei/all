var style = {
	mask: `
		position: fixed; left: 0; top: 0;
		width: 100%; height: 100%;
		background: rgba(0,0,0,0.5);
		z-index: 999;
	`,
	panel: `
		overflow: hidden;
		position: absolute; left: 0; top: 0; bottom: 0; right: 0;
		width: 5.5rem; height: 3.6rem;
		margin: auto;
		border-radius: 0.1rem; background: white;
	`,
	top: `
		box-sizing: border-box;
		height: 0.9rem;
		border-bottom: 1px solid #d8d8d8;
		font-size: 0.28rem; line-height: 0.9rem; font-weight: bold; text-align: center;

	`,
	middle: `
		box-sizing: border-box;
		height: 1.8rem;
		border-bottom: 1px solid #d8d8d8;
		font-size: 0.28rem; line-height: 1.8rem; text-align: center;
	`,
	bottom: `
		overflow: hidden;
	`,
	button: `
		float: left;
		width: 50%; height: 0.9rem; line-height: 0.9rem;
		font-size: 0.28rem; text-align: center;
	`,
	confirm: `
		background: #3d8dcf;
		color: white;
	`
};

var mask = {
	template: `
		<div style="${style.mask}" v-show="shown">
			<div style="${style.panel}">
				<p style="${style.top}">下载QQ阅读，畅读海量小说</p>
				<p style="${style.middle}">如果还未安装QQ阅读，你可以：</p>
				<ul style="${style.bottom}">
					<li style="${style.button+style.confirm}">下载QQ阅读</li>
					<li style="${style.button}" v-on:click="hide">取消</li>
				</ul>
			</div>
		</div>
	`,
	data: function(){
		return {
			shown: true
		}
	},
	methods: {
		hide: function(){
			this.shown = false;
		}
	}
}
module.exports = mask;
