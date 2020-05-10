


        window.addEventListener('load', () => {
            fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
                .then(response => {
                    return response.json()
                })
                .then(data => {


                    var y =document.getElementById("carta");
                    

                    for(var i = 0; i < data.length; i++ ){
                        var x =document.createElement("div");
                        x.innerHTML= `
                        <div class="col-md-4" style="margin: 20px;">
				        <div class="card" style="width: 500px;">
                        <h5 class="card-header" style="text-align: center;" >
						   <p> ${data[i].name}</p>
					    </h5>
                        <div class="card-body" >
                            
                            <img style="width: 100%;" src=${data[i].photo}>
						    <p class="card-text">
							    tipo da propriedade: ${data[i].property_type}
						    </p>
					    </div>
					    <div class="card-footer">
						    Preço: <b>R$ ${data[i].price}</b>
                        </div> 
                        </div>
			            </div>                     
                         `
                         y.appendChild(x);  

                    
                    }
                })
                .catch(err => {
                    var y =document.getElementById("carta"); 
                        var x =document.createElement("div");
                        x.innerHTML= `
                        <div>
				         <h5>JSON Não encontrado.</h5>
			            </div>                     
                         `
                         y.appendChild(x);  
                })
        });
       
