console.log( 'I am javascript.' );



// when circle is clicked, attach circle to cursor.
// when cursor moves, circle follows underneath.
// when cursor clicks outside of holder, return circle to original spot.
// when cursor clicks inside holder, snap circle to holder.
// when circle snaps to holder, fade out elements h1, h2, and circles, and fade in new stuff.







var myCircle = document.getElementById("circle");

function startDrag() {
	
	console.log('you clicked');
	
}


myCircle.addEventListener("click", startDrag, false);







