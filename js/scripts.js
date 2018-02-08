var i, j, x, tablinks;

		function hideAll() {
			x = document.getElementsByClassName('portfolio__item');
			for (i=0; i< x.length; i++) {
				x[i].style.display = "none";
			}
		}

		function showCat(evt,cat) {
			hideAll();
			x = document.getElementsByClassName(cat);
			for (i=0; i< x.length; i++) {
				x[i].style.display = "block";
			}

			tablinks = document.getElementsByClassName('tablink');
		  	for (j = 0; j < tablinks.length; j++) {
		      tablinks[j].className = tablinks[j].className.replace("active", "");
				}

			evt.currentTarget.className += " active";
		}