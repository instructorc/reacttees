			function elementloader(strFileName, strElement){
				var fileRequest = new XMLHttpRequest();
				var strURLOrigin = document.documentURI;
				//alert(strURLOrigin);
				var strURLTarget = "https://reacttees.com" + "/includes/" + strFileName;
				var elemHeader = document.getElementById(strElement);
				
				fileRequest.open("GET",strURLTarget,false); //method, URL, boolean Asynchronous
				fileRequest.setRequestHeader("User-Agent",navigator.userAgent);
				fileRequest.send(null);
				
				if (fileRequest.status == 200) 
					elemHeader.innerHTML = fileRequest.responseText;
				else
					alert("Error executing XMLHttpRequest call");
			}