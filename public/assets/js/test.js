socket.emit("get-fetishes");

socket.on("fetishes", (data) => {
	var string = "";
	for(var i = 0; i < data.length; i++) {
		string += "<span>"+data[i]["fetish"]+"</span>";
	}
	document.querySelector("div").innerHTML = string;
});

document.getElementById("add").addEventListener("click", function() {
	var val = document.getElementById("val").value;
	if (val == "") {
		alert("can't add empty");
	} else {
		socket.emit("add-fetish", val);
		socket.emit("get-fetishes");
	}
});
