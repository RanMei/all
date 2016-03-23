(function(){
	
	var zeta=function( elem ){
		return new zeta.prototype.init( elem );
	};
	//-----------------------------------------------------------
	zeta.fn=zeta.prototype;
	var init=zeta.prototype.init=function( elem ){
		this.elem=elem;
	};
	init.prototype=zeta.prototype;
	//-----------------------------------------------------------
	zeta.prototype.ready=function(f){
		if( document.readyState=="complete" ){
			f();
		}else{
			document.onreadystatechange=function(){
				if( document.readyState=="complete" ){
					f();
				};
			};
		};		
	};
	//-----------------------------------------------------------
	zeta.prototype.on=function( event,f ){
		var elem=this.elem;
		elem.addEventListener( event,f );	
	};
	zeta.prototype.fadeOut=function( time,callback ){
		var elem=this.elem;
		if( elem.style.opacity==""||elem.style.opacity==1 ){
			var p=1;
			var dp=1/(time/10);
			elem.style.opacity=1;
			var interval=setInterval(function(){
				if( p-dp>0 ){		
					p-=dp;
					elem.style.opacity=p;
				}else{
					clearInterval( interval );
					elem.style.opacity=0;
					if(callback){callback();};
				};
			},10);
		};
	};
	zeta.prototype.fadeIn=function( time ){
		var elem=this.elem;
		if( elem.style.opacity==0 ){
			var p=0;
			var dp=1/(time/10);
			var interval=setInterval(function(){
				if( p+dp<1 ){		
					p+=dp;
					elem.style.opacity=p;
				}else{
					clearInterval( interval );
					elem.style.opacity=1;
					console.log( elem.style.opacity );
				};
			},10);
		};
	};
	zeta.prototype.fadeToggle=function( time ){
		this.fadeOut(time);
		this.fadeIn(time);
	};
	//-----------------------------------------------------------
	zeta.prototype.slideUp=function( time ){
		var elem=this.elem;
		elem.style.overflow="hidden";
		var p=elem.offsetHeight;
		var dp=p/(time/10);			
		var interval=setInterval(function(){
			if( p-dp>0 ){
				p-=dp;
				elem.style.height=p+"px";
			}else{
				clearInterval( interval );
				elem.style.height=0;
				console.log( elem.offsetHeight );
			};
		},10);
	};
	//-----------------------------------------------------------
	zeta.prototype.css=function( o,time ){
		var elem=this.elem;
	
	
	
	
	
	
	
	};	
	//-----------------------------------------------------------
	zeta.prototype.animate=function( o,time,callback ){
		var elem=this.elem;
		var p=document.defaultView.getComputedStyle(elem).marginLeft;
		p=p.replace(/px/,"");
		p=Number(p);
		console.log(p);
		if( o["margin-left"] ){
			var dp=o["margin-left"]/(time/10);
			var tar=p+o["margin-left"];
			if( o["margin-left"]>=0 ){
				var interval=setInterval(function(){
					if( p+dp<=tar ){
						p+=dp;
						elem.style.marginLeft=p+"px";
					}else{
						clearInterval( interval );
						elem.style.marginLeft=tar;
						if( callback ){
							callback();					
						};
					};
				},10);
			}else{
				var interval=setInterval(function(){
					if( p+dp>=tar ){
						p+=dp;
						elem.style.marginLeft=p+"px";
					}else{
						clearInterval( interval );
						elem.style.marginLeft=tar;
						if( callback ){
							callback();					
						};
					};
				},10);			
			};
		};
	};
	//-----------------------------------------------------------
	zeta.ajax=function(o){
		var xhr=new XMLHttpRequest();
		xhr.open( o.type,o.url );
		xhr.send( o.data||null );
		xhr.onreadystatechange=function(){
			var data=xhr.responseText;
			if(xhr.status===200){
				o.success(data);
			};
		};		
	};
	//-----------------------------------------------------------
	window.$=zeta;
	
})();