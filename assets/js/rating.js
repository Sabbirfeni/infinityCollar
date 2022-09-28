var count = 0;
 
function result(){
	if(count != 0){

        document.getElementById('result').innerHTML = '<div id="submitSuccessAlert" class="submitSuccessAlert active submit__success semiBoldFont text-center text-white">Thanks! Review submitted successfully</div>'

        setTimeout(() => {
            document.getElementById('submitSuccessAlert').classList.remove('active');
        }, 4000);
		// document.getElementById('result').innerText = 'Successfully submitted!';
        // document.getElementById('result').style.color = 'green';
		// "<h4>Rating: <label class='text-primary'>" + count + "</label></h4>"
		// + "<h4>Review</h4>"
		// + "<p>"+document.getElementById("review").value+"</p>";
	}else{
 
	}
}
 
function startRating(item){
	count=item.id[0];
	sessionStorage.star = count;
	for(var i=0;i<5;i++){
		if(i < count){
			document.getElementById((i+1)).style.color="#ffb87e";
		}
		else{
			document.getElementById((i+1)).style.color="#cfcfcf";
		}
	}
}