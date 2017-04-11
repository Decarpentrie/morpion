var counter=0

$('td').click(function(){
		counter++;		
		counter % 2 === 0 ? a = 'p2' : a = 'p1';
	});






$('td').click(function () {
	if (a == "p1" ) {
		
		$(this).append('<img src="https://lh4.ggpht.com/qg10qsJGXjFy5GBYRCojTQgq_gOopE8CudfQZlN8NFSdt57-2wSxips0dUOso4pDuFQ=w300" width="100" height="100">')
	}else{

		$(this).append('<img src="http://4.bp.blogspot.com/_BjwutFO7-jM/S7c2Ebvd55I/AAAAAAAAAds/aePC2_Ku2Rk/s320/gimp-circle.png width="100" height="100"">')
	}
});


















