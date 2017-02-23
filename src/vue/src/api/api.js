// import items_ from 'api/items.js';

const api = {
	getItems: function(params){
		var items = JSON.parse( JSON.stringify(require('api/items.js')) );
    // var items_others = JSON.parse( JSON.stringify(require('api/items.others.js')) );
    // items = items.concat(items_others);
    items.sort((a,b)=>{
      var a_date = new Date(a.date?a.date:'2016-01-01 08:09:04').getTime();
      var b_date = new Date(b.date?b.date:'2016-01-01 08:09:04').getTime();
      if (a_date > b_date) {
        return -1;
      }
      if (a_date < b_date) {
        return 1;
      }
      return 0;
    });
    if( params.tag ){
    	var items__ = [];
    	items.forEach(a=>{
    		a.tags.forEach(b=>{
    			if(b===params.tag){
    				items__.push(a);
    			}
    		})
    	})
    	return items__;
    }
    return items;
	}
};

export default api;