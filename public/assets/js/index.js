var anim_el = document.querySelector(".animation h1");

function animation() {
	fetch("/assets/fetishes.json").then(function(resp) {
		return resp.text()	
	}).then(function(text) {
		var list = JSON.parse(text)
		console.log(list);
		var i = 0;
		function a() {
			anim_el.innerHTML = "We like " + list[i]
			i++;
			if (i < list.length) {
				setTimeout(a, 500);
			} else {
				anim_el.innerHTML = "We like every fetish";
			} 
		}
		a(i)
	});
}

function chart_setup() {
	var ctx = document.getElementById('chart').getContext('2d');
	
	var barChart = new Chart(ctx, {
  	  type: 'bar',
	  data: {
	    labels: ["Giantess", "Big Butt", "Big Tits", "Growth", "Farting", "Facesitting", "Vore", "Fat", "BBW", "Big Stomach", "Ballbusting", "Domination", "Futa", "Bondage", "Stuckage", "Thickness Overflow", "Gore / Guro", "Blood", "Tile Patterns", "Scat", "Snuff", "Mind Control", "Monster Girls", "Forced Fem", "Forced Orgasm", "Orgasm Denial", "Flagellation", "Cuntboys", "Breeding", "Oviposition", "All the way through", "Hucow", "Pegging", "Fisting", "Peeing", "Bukkake", "Amputees", "Endosoma", "Mommy Milkies", "Rape", "Mummification", "Sensory Deprivation", "Necrophilia", "Cuck", "Inflation", "Feet", "Beastiality", "Blacked", "Crushing", "Armpits", "Cum Inflation", "Tomboy", "Small Boobs", "Short Hair", "Traps", "Sounding / Urethral Insertion", "Diaper", "Muscle Girls"],
	    datasets: [{
	      label: 'People who has the fetish on the discord server',
	      data: [7, 27, 23, 6, 5, 20, 4, 6, 13, 8, 9, 24, 25, 27, 9, 11, 11, 11, 7, 8, 7, 21, 21, 19, 16, 22, 22, 27, 27, 8, 11, 29, 11, 15, 13, 20, 16, 20, 22, 9, 7, 22, 29, 9, 14, 12, 15, 8, 18, 19, 12, 6, 12, 15, 25, 27, 24, 29, 12],
	      backgroundColor: "#151515"
	    }]
	  },
	  options: {
		responsive: false,
		scales: {
			xAxes: [{
				gridLines: {
					display: false
				}
			}],
			yAxes: [{
				gridLines: {
					display: false
				}
			}],

		}
	}
	});
}

function change_discord_widget_css() {
	var w = document.querySelector("iframe");
	console.log(w.querySelector(".widgetHeader-2Hz_Ln"))
}


change_discord_widget_css()
chart_setup()
animation();
