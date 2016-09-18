var breakDance = new TimelineMax({onComplete:function(){breakDance.reverse()},onReverseComplete:function(){breakDance.play()}})

breakDance.to('#pose1', .5, {morphSVG:'#pose2', ease:Power3.easeInOut},'+=.5')
.to('#pose1', .5, {morphSVG:'#pose3', ease:Power3.easeInOut},'+=1')
.to('#pose1', .5, {morphSVG:'#pose4', ease:Power3.easeInOut},'+=1')
.to('#pose1', .5, {morphSVG:'#pose2', ease:Power3.easeInOut},'+=1')
.set('#pose1',{alpha:1},'+=.5')