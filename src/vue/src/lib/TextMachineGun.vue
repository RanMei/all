<template>
	<div class="MachineGunText"></div>
</template>

<style lang="less">
	.MachineGunText {
		position: relative;
		width: 100%; height: 2rem;
		padding: 1rem 0;
		background: black;
		h3 {
			font-family: '宋体';
			position: absolute;
			width: 100%; 
			font-size: 1rem;
			font-weight: normal;
			text-align: center;
			color: white;
		}
	}
</style>

<script type="text/javascript">
	function haha(){
		var container = document.querySelector('.MachineGunText');
	    let _sentenceEndExp = /(榜)$/g; //regular expression to sense punctuation that indicates the end of a sentence so that we can adjust timing accordingly

		function machineGun(text) {
		  var words = text.split(" "),
		      tl = new TimelineMax({delay:0.6, repeat:2, repeatDelay:4}),
		      wordCount = words.length,
		      time = 0,
		      word, element, duration, isSentenceEnd, i;
		  
		  for(i = 0; i < wordCount; i++){
		    word = words[i];
		    isSentenceEnd = _sentenceEndExp.test(word);
		    element = (function(){
		    	let child = document.createElement('h3');
		    	child.innerHTML = word;
		    	container.appendChild(child);
		    	return child;
		    })();
		    //$("<h3>" + word + "</h3>").appendTo(container);
		    duration = Math.max(0.5, word.length * 0.15); //longer words take longer to read, so adjust timing. Minimum of 0.5 seconds.
		    if (isSentenceEnd) {
		      duration += 0.6; //if it's the last word in a sentence, drag out the timing a bit for a dramatic pause.
		    }
		    //set opacity and scale to 0 initially. We set z to 0.01 just to kick in 3D rendering in the browser which makes things render a bit more smoothly.
		    TweenLite.set(element, {autoAlpha:0, scale:0, z:0.01});
		    //the SlowMo ease is like an easeOutIn but it's configurable in terms of strength and how long the slope is linear. See http://www.greensock.com/v12/#slowmo and http://api.greensock.com/js/com/greensock/easing/SlowMo.html
		    tl.to( element, duration, {
		    	scale: 1.2, 
		    	ease: SlowMo.ease.config(0.25, 0.9)
		    }, time)
		      //notice the 3rd parameter of the SlowMo config is true in the following tween - that causes it to yoyo, meaning opacity (autoAlpha) will go up to 1 during the tween, and then back down to 0 at the end. 
				 	.to(element, duration, {autoAlpha:1, ease:SlowMo.ease.config(0.25, 0.9, true)}, time);
		    time += duration - 0.05;
		    if (isSentenceEnd) {
		      time += 0.6; //at the end of a sentence, add a pause for dramatic effect.
		    }
		  }
		}

		machineGun("阅文集团 年度庆典 原创 文学 风 云 榜");
	};

	export default {
		mounted: function(){
			haha();
		}
	}
</script>