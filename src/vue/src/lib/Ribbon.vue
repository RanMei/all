<template>
	<div class="RibbonContainer">
		<div class="panel">
			<h3 class="ribbon">This is a ribbon.</h3>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.RibbonContainer {
		background: silver;
		overflow: hidden;
		.panel {
		  position: relative;
		  width: 250px;
		  height: 400px;
		  margin: 100px auto;
		  background-color: #fff;
		  box-shadow: #888 1px 1px 5px;
		  padding-top: 10px;
		}

		.ribbon {
		  position: absolute;
		  left: 0;
		  bottom: 15px;
		  width: 100%;
		  background-color: #CC0000;
		  color: #fff;
		  padding: 15px 15px 15px 15px;
		  margin-left: -15px;
		  margin-right: -15px;
		  margin-top: 15px;
		  font-size: 20px;
		  &:before {
		  	content: '';
			  position: absolute;
			  top: -15px;
			  left: -15px;
			  border-top-width: 15px;
			  border-bottom-width: 15px;
			  border-left-width: 15px;
			  border-right-width: 15px;
			  border-color: transparent;
			  border-style: solid;
			  border-right-color: #800000;
			  z-index: -1;
		  }
		}
		.ribbon:before {
		  content: '';
		  position: absolute;
		  top: -15px;
		  left: -15px;
		  border-top-width: 15px;
		  border-bottom-width: 15px;
		  border-left-width: 15px;
		  border-right-width: 15px;
		  border-color: transparent;
		  border-style: solid;
		  border-right-color: #800000;
		  z-index: -1;
		}
		.ribbon:after {
		  content: '';
		  position: absolute;
		  top: -15px;
		  right: -15px;
		  border-top-width: 15px;
		  border-bottom-width: 15px;
		  border-left-width: 15px;
		  border-right-width: 15px;
		  border-color: transparent;
		  border-style: solid;
		  border-left-color: #800000;
		  z-index: -1;
		}
	}
</style>
