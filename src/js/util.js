$(function(){
	
	var inputDefaults = [];
	$('input.default').each(function() {
		var inputName = $(this).attr('name');
		inputDefaults[inputName] = $(this).attr('value');
	});
	
	$('input.default').click(function(){
		if ($(this).val() === inputDefaults[$(this).attr('name')]) {
			$(this).val('');
		}
	});
	$('input.default').blur(function(){
		if ($(this).val() === '') {
			$(this).val(inputDefaults[$(this).attr('name')]);
		}
	});

	// Aside - remove parental "current" className
	$('aside.global nav.aside-main ul li.current').each(function() {
		if($(this).is(function() { return $('li.current', this).length === 0; })) {
			$(this).addClass('current-current');
		}
	});
	
	// adjustHeight
	if($('section.global').height() < $('aside.global').height()) {
		$('section.global').height($('aside.global').height());
	}
	
	// apply CSS for Windows
	if (navigator.platform.indexOf("Win") != -1) {
		document.body.style.fontFamily = 	"'Open Sans','メイリオ',Meiryo,'ＭＳ Ｐゴシック',sans-serif";
	}

});
