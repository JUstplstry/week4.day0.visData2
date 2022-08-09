

fetch("https://randomuser.me/api/?results=70")

.then(function(response){
	 return response.json()
})
.then(function(data){
	for(let i=0; i<data.results.length;i++){

		let newDiv= document.createElement("div")
		Element.className = "results"

		let newh1= document.createElement("h1")
		newh1.innerHTML=data.results[i].name.first
		newDiv.append(newh1)

		let newh2=document.createElement("h2")
		newh2.innerHTML=data.results[i].email
		newDiv.append(newh2)

		let newh3=document.createElement("h3")
		newh3.innerHTML=data.results[i].gender
		newDiv.append(newh3)

		let newh4=document.createElement("h4")
		newh4.innerHTML=data.results[i].registered.age
		newDiv.append(newh4)

		newDiv.className="results"
		document.body.append(newDiv) 


		let filterGender = document.createElement("form")
		filterGender.innerHTML = "Form"
		Element.className = "forms"
		body.appendChild(filterGender)



  }
})
