app.controller( "orderDetailsCtrl",function( $scope,$http ){
	// @state
    $scope.$root.pageTitle = '机票订单';

    $scope.user;
    // @data
    $scope.order;


    //$scope.ap = AirPort.getByCode('PEK');


    // 该变量的值为该订单的剩余时间。
    // @type {string}
    $scope.time_left = null;
    //该函数用于获取剩余时间并给$scope.time_left重新赋值。
    function get_time_left(){
        if($scope.order){
            var now = new Date().getTime();
            var deadline = new Date($scope.order.expire_at).getTime();
            //
            var minutes = ((deadline-now)/1000/60).toFixed(4);
            // 
            // @type {number}
            var seconds = Math.ceil(Number(minutes.split('.')[1])/10000*60);
            minutes = minutes.split('.')[0];
            seconds = (seconds.length===1)?('0'+seconds):seconds;
            seconds = (seconds==='60')?('00'):seconds;
            $scope.time_left = minutes+' : '+seconds;
        }
    }
    // 每隔一秒调用get_time_left给$scope.time_left重新赋值。
    var interval = setInterval(function(){
        get_time_left();
        $scope.$apply();
    },1000);      

    // @state
    $scope.deliveryAddressShown = false;
    //@param {params:string}
    $scope.toggle = function( params ){
        if( params==="deliveryAddress" ){
            $scope.deliveryAddressShown = ($scope.deliveryAddressShown?false:true);
        };
    }

    //该函数用于判断并返回订单状态。
    //@return {string}
    $scope.renderStatus = function(){
        var statuses = {
            cancelled: '已取消',
            OUT_TICKET: '已出票',
            PAY_FAILED: '已取消',
            paid: '支付成功',
            REFUND: '已关闭',
            REFUNDING: '退款中',
            unpaid: '待支付',
            WAIT_TICKET: '待出票'
        };
        return $scope.order?statuses[ $scope.order.status ]:'';
    }

    //该函数用于计算并以“98%”的格式返回准点率。
    //@return {string}
    $scope.renderPercentage = function(){
        return $scope.order?( $scope.order.ontimeRatio*100+'%' ):'';
    }

    //@return {string}
    $scope.renderDay = function(){
        var day = ['周日','周一','周二','周三','周四','周五','周六'];
        return (
            $scope.order?
            day[new Date($scope.order.flight_list.departure_date).getDay()]
            :
            null
        );
    }

    // $scope.renderTimeSpan = function(){//该函数用于计算并以“10时10分”的格式返回这次飞行所需的时间。
    //     if($scope.order){
    //         var departure_time = new Date( $scope.order.start_time ).getTime();
    //         var arrival_time = new Date( $scope.order.end_time ).getTime();
    //         var time_span = (arrival_time - departure_time)/1000;
    //         return time_span;
    //     };
    // }

    // 该函数在用户点击“退改签说明”之后被调用。
    $scope.showInfo = function(){
        msgbox.alert( $scope.order.ticket_info.tpgd, '确定' );
    }

    // 该函数在用户点击“删除订单”按钮之后被调用。
    $scope.delete = function(){
        msgbox.confirm( '订单一经删除则无法恢复，确认删除吗？','确认删除','取消' );
    }

    // 获取当前员工信息和机票订单信息。
    $scope.order = {
        id: '31856983561',
    	status: 'unpaid',
    	ontimeRatio: 0.95,
    	create_at: '2016-08-09',
    	totalPrice: 1000,
    	deliveryFee: 15,
    	deliveryInfo: {
    		consignee: '李明月',
    		phone: '13011111111',
    		address: '海淀区学院路'
    	},
        refund: 1000
    }
		
});