function volume_sphere() {
    const ipRadius=document.getElementById("radius");
	const opVolume=document.getElementById("volume");

	const r=parseFloat(ipRadius.value);
	if(isNaN(r)|| r<0){
		alert("enter valid radius");
		opVolume.value="";
		return false;
	}

	const volume=(4/3)*Math.PI*Math.pow(r,3);

	opVolume.value=isNaN(volume)?volume:volume.toFixed(4);
	return false;
  
} 

window.onload=function(){
	document.getElementById("MyForm").onsubmit=function(e){
		e.preventDefault();
		volume_sphere();
	}
}
