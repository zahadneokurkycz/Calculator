$(document).on('keypress',function(e) {
	let key = e.key.toLowerCase()
	try {
		switch (key) {
			case 'c':
				$('#clear').get(0).click()
				$('#clear').addClass('active')
				setTimeout('$("#clear").removeClass("active")', 300)
				break
			case 'enter':
				$('#equals').get(0).click()
				$('#equals').addClass('active')
				setTimeout('$("#equals").removeClass("active")', 300)
				break
			case '+':
				$('#add').get(0).click()
				$('#add').addClass('active')
				setTimeout('$("#add").removeClass("active")', 300)
				break
			case '-':
				$('#subtract').get(0).click()
				$('#subtract').addClass('active')
				setTimeout('$("#subtract").removeClass("active")', 300)
				break
			case '*':
				$('#multiply').get(0).click()
				$('#multiply').addClass('active')
				setTimeout('$("#multiply").removeClass("active")', 300)
				break
			case '/':
				$('#divide').get(0).click()
				$('#divide').addClass('active')
				setTimeout('$("#divide").removeClass("active")', 300)
				break
			case '1':
				$('#one').get(0).click()
				$('#one').addClass('active')
				setTimeout('$("#one").removeClass("active")', 300)
				break
			case '2':
				$('#two').get(0).click()
				$('#two').addClass('active')
				setTimeout('$("#two").removeClass("active")', 300)
				break
			case '3':
				$('#three').get(0).click()
				$('#three').addClass('active')
				setTimeout('$("#three").removeClass("active")', 300)
				break
			case '4':
				$('#four').get(0).click()
				$('#four').addClass('active')
				setTimeout('$("#four").removeClass("active")', 300)
				break
			case '5':
				$('#five').get(0).click()
				$('#five').addClass('active')
				setTimeout('$("#five").removeClass("active")', 300)
				break
			case '6':
				$('#six').get(0).click()
				$('#six').addClass('active')
				setTimeout('$("#six").removeClass("active")', 300)
				break
			case '7':
				$('#seven').get(0).click()
				$('#seven').addClass('active')
				setTimeout('$("#seven").removeClass("active")', 300)
				break
			case '8':
				$('#eight').get(0).click()
				$('#eight').addClass('active')
				setTimeout('$("#eight").removeClass("active")', 300)
				break
			case '9':
				$('#nine').get(0).click()
				$('#nine').addClass('active')
				setTimeout('$("#nine").removeClass("active")', 300)
				break
			case '0':
				$('#zero').get(0).click()
				$('#zero').addClass('active')
				setTimeout('$("#zero").removeClass("active")', 300)
				break
			case ',':
				$('#decimal').get(0).click()
				$('#decimal').addClass('active')
				setTimeout('$("#decimal").removeClass("active")', 300)
				break
			case '.':
				$('#decimal').get(0).click()
				$('#decimal').addClass('active')
				setTimeout('$("#decimal").removeClass("active")', 300)
				break
		}
	} catch(e) {
		null
	}
});