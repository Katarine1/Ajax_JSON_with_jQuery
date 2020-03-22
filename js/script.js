$(document).ready(function(){
	$("button").click(function(){
		$.get("file.json", function(data, status){
			//console.log(data);
			
			for(let i in data.employee) {

				let item = data.employee[i];

				//console.log(item);

				// Create Elements
				let sectionDescription = document.createElement('section');
				sectionDescription.id = 'description';

				let h3 = document.createElement('h3');
				h3.innerHTML = "Employee:";
				h3.style.padding = "20px";

				let p1 = document.createElement('p');
				p1.innerHTML = "<strong>Name: </strong>" + item.name;
				p1.style.padding = "20px 40px";
							
				let p2 = document.createElement('p');
				p2.innerHTML = "<strong>Age: </strong>" + item.age;
				p2.style.padding = "20px 40px";

				let p3 = document.createElement('p');
				p3.innerHTML = "<strong>Salary: </strong>" + item.salary;
				p3.style.padding = "20px 40px";

				let p4 = document.createElement('p');
				p4.innerHTML = "<strong>Office: </strong>" + item.office;
				p4.style.padding = "20px 40px";

				let hr = document.createElement('hr');

				sectionDescription.appendChild(h3);
				sectionDescription.appendChild(p1);
				sectionDescription.appendChild(p2);
				sectionDescription.appendChild(p3);
				sectionDescription.appendChild(p4);
				sectionDescription.appendChild(hr);

					$("#contents").append(sectionDescription);
				}	
		});
	});
});
