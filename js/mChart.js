$(document).ready(function(){
	var ctx = $("#skills").get(0).getContext("2d");

	var data = [
		{
			value: 70,
			color: "#46BFBD",
			highlight: "#5AD3D1",
			label: "Android"
		},
		{
			value: 65,
			color:"#F7464A",
			highlight: "#FF5A5E",
			label: "Java"
		},
		{
			value: 50,
			color: "#FDB45C",
			highlight: "#FFC870",
			label: "Javascript"
		},
		{
			value: 85,
			highlight: "#039BE5",
			color: "#03A9F4",
			label: "Python"
		}
	];

	var chart = new Chart(ctx).Doughnut(data);
});