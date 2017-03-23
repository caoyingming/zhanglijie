
window.onload = function() {
    newScroll = new IScroll('#nowScroll');
downScroll = new IScroll('#downScroll');
myScroll = new IScroll('#myScroll');
}

$(function(){
	$('#container header ul li').on('click', function () {
		var idx = $(this).index();
		$(this).find('a').addClass('on').parent().siblings().find('a').removeClass('on');
		$('#main section').eq(idx).addClass('sectiono').siblings().removeClass('sectiono');
    console.log(idx);
    if (idx === 0) {
      newScroll = new IScroll('#nowScroll');
    }else if(idx === 1){
      downScroll = new IScroll('#downScroll');
    }else if (idx === 2) {
      myScroll = new IScroll('#myScroll');
    }
 	})
})
