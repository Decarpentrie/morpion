var counter=0;
var result = [	[0, 0, 0], 
				[0, 0, 0],
				[0, 0, 0], ];



$('td').click(function(){
		counter++;		
		counter % 2 === 0 ? a = 'p2' : a = 'p1';
	});





$('td').click(function () {
	var full =$(this).html()
	if ( full!= "") {
		return;
	}

	if (a == "p1" ) {
		
		$(this).append('<img src="https://lh4.ggpht.com/qg10qsJGXjFy5GBYRCojTQgq_gOopE8CudfQZlN8NFSdt57-2wSxips0dUOso4pDuFQ=w300" width="100" height="100">')
	}else{

		$(this).append('<img src="http://4.bp.blogspot.com/_BjwutFO7-jM/S7c2Ebvd55I/AAAAAAAAAds/aePC2_Ku2Rk/s320/gimp-circle.png width="100" height="100" ">')
	}
//console.log(a)
});




$('td').click(function () {
	
	var win = "";

	for (var i = 0; i <= result.length; i++) {
	win += a

	if (win == "p1p1p1") {
		alert("joueur 1 a gagner")

	}else if (win == "p2p2p2"){
		alert("joueur 2 a gagner")
	}


	}
	console.log(win)
 })
	

