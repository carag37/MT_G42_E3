function leerDatos(tipo){
        $.ajax({
            url:"http://localhost:8080/api/"+tipo+"/all",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
            
            
            $("#res_tabla").empty();
            updateTabla(respuesta, tipo)
            
            }
            });
    };

function updateTabla(items, tipo){
    
    let myTable = '<table class="text-gray-600 border-rounded-lg text-center text-sm border border-gray-300">';
    myTable += "<thead class='border border-gray-300'>";
    myTable += "<tr class='rounded-full'>";

    switch(tipo){

    case 'Category':
            //myTable+="<th>ID</th>";
            myTable+="<th>Nombre</th>";
            myTable+="<th>Eliminar</th>";   
            myTable+="</tr>";
            myTable+="</thead>"
        
    for(i=0;i<items.length;i++){
            myTable+="<tr>";
            //myTable+="<td>"+items[i].id+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].id+", \""+tipo+"\");'>"
            +items[i].name+"</a>"+"</td>";
            myTable+='<td> <a class="text-center" href="#" onclick="eliminar('+items[i].id+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto text-gray-400 hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";   
        }
 
    break;

    case 'Cloud':
    //myTable+="<th>ID</th>";
    myTable+="<th>Nombre</th>";
    myTable+="<th>Eliminar</th>";   
    myTable+="</tr>";
    myTable+="</thead>"

    for(i=0;i<items.length;i++){
            myTable+="<tr>";
            //myTable+="<td>"+items[i].id+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].id+", \""+tipo+"\");'>"
            +items[i].name+"</a>"+"</td>";
            myTable+='<td> <a class="text-center" href="#" onclick="eliminar('+items[i].id+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto text-gray-400 hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";   
        }

    listar('Category')
     
    break;

    case 'Client':
    myTable+="<th>ID</th>";
    myTable+="<th>Nombre</th>";  
    myTable+="<th>Eliminar</th>"; 
    myTable+="</tr>";
    myTable+="</thead>"

        for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].idClient+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].idClient+", \""+tipo+"\");'>"
            +items[i].name+"</td>";
            myTable+='<td> <a class="text-center" href="#" onclick="eliminar('+items[i].idClient+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";   
        }
         
    break;

    case 'Message':
    //myTable+="<th>ID</th>";
    myTable+="<th>Mensaje</th>";
    myTable+="<th>Eliminar</th>";   
    myTable+="</tr>";
    myTable+="</thead>"
    
        for(i=0;i<items.length;i++){
            myTable+="<tr>";
            //myTable+="<td>"+items[i].idMessage+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].idMessage+", \""+tipo+"\");'>"
            +items[i].messageText+"</td>";
            myTable+='<td> <a class="text-center" href="#" onclick="eliminar('+items[i].idMessage+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";   
        }
    listar('Cloud')
    listar('Client')      
    break
    
    case 'Reservation':
    myTable+="<th>Id Reserva</th>";
    myTable+="<th>Cliente</th>"
    myTable+="<th>Calificar</th>"
    myTable+="<th>Eliminar</th>";   
    myTable+="</tr>";
    myTable+="</thead>"
    var score = 0;
    var scoreId = 0;
    console.log(items);
    for(i=0;i<items.length;i++){
        if(items[i].score==null){score = "Sin calificar"; scoreId=0}else{score = items[i].score.score; scoreId=items[i].score.idScore}
            myTable+="<tr>";
            //myTable+="<td>"+items[i].idReservation+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].idReservation+", \""+tipo+"\");'>"+items[i].idReservation+"</td>";
            myTable+="<td>"+items[i].client.idClient+" - "+items[i].client.name+" - "+items[i].client.email+"</td>";
            myTable+='<td ><form class="form-inline"><label>'+score+'</label><a class="text-center" href="#" onclick="detalle('+items[i].idReservation+', \''+"Score"+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto text-gray-400 hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path></svg></a></form></td>'
            myTable+='<td > <a class="text-center" href="#" onclick="eliminarScore('+items[i].idReservation+','+scoreId+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto text-gray-400 hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";
    }
    listar('Client') 
    listar('Cloud')
break;

case 'Admin':
    myTable+="<th>ID</th>";
    myTable+="<th>Nombre</th>";  
    myTable+="<th>Eliminar</th>"; 
    myTable+="</tr>";
    myTable+="</thead>"

        for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].idAdmin+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].idAdmin+", \""+tipo+"\");'>"
            +items[i].name+"</td>";
            myTable+='<td> <a class="text-center" href="#" onclick="eliminar('+items[i].idAdmin+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";   
        }
         
    break;

    }

    myTable+= "</table>";
    $("#res_tabla").append(myTable);
}

function detalle(id, tipo){
    sessionStorage.setItem('id',id);
    sessionStorage.setItem('tipo',tipo);
    if (tipo=="Score"){location.href="./Califica_R3.html";} else {location.href="./Detalles_R3.html";}
    
}


function verDetalle(){

    let id = sessionStorage.getItem('id');
    let tipo = sessionStorage.getItem('tipo');
    
    let myType;
    let myBack;
    
    let myTable = '<table class="table-auto text-gray-600 text-center text-sm">';
    $.ajax({
        url:"http://localhost:8080/api/"+tipo+"/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        
        
        $("#res_tabla").empty();
        $("#res_Back").empty();
        $("#res_Type").empty();

        switch(tipo){

        case 'Category':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Nombre</th>";
            myTable+="<th>Descripción</th>";
            myTable+="<th>Nubes</th>";   
            myTable+="</tr>";
            myTable+="</thead>";
                    
            for(i=0;i<respuesta.length;i++){
                if(respuesta[i].id==id){
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].id+"</td>";
                myTable+="<td style='white-space:pre'>"+'<input type="text" id="nombre" value='+respuesta[i].name+' name="nombre" class="whitespace-pre w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                myTable+="<td>";
                myTable+='<textarea type="text" id="description" name="description" class="w-2/3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">'+respuesta[i].description+'</textarea>'
                myTable+="</td>";
                myTable+="<td>";
                myTable+='<textarea readonly type="text" id="nubes" name="nubes" style="cursor: not-allowed" class="w-2/3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">'
                
                for(j=0;j<respuesta[i].clouds.length;j++){myTable+=respuesta[i].clouds[j].name+" "}
                myTable+="</textarea>"
                myTable+="</td>";
                myTable+="</tr>"; 
                } 
            }
                
            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Category_R3.html" target="_self">';
            myType = '<label class="leading-7 text-ml text-gray-600">Categorías</label>';         
        break;
        
        case 'Cloud':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Nombre</th>";
            myTable+="<th>Proveedor</th>";
            myTable+="<th>Modelo</th>";
            myTable+="<th>Categoría</th>";
            myTable+="<th>Descripción</th>";            
            myTable+="</tr>";
            myTable+="</thead>";
                
            for(i=0;i<respuesta.length;i++){
                if(respuesta[i].id==id){
                listarDetalle(0, 0, respuesta[i].category.id);
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].id+"</td>";
                myTable+="<td>"+'<input type="text" id="nombre" value='+ respuesta[i].name+' name="nombre" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"> </div>' + "</td>";
                myTable+="<td>"+'<input type="text" id="proveedor" value='+respuesta[i].brand+' name="proveedor" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"></input>' + "</td>";
                myTable+="<td>"+'<input type="number" max="2050" min="1980" id="modelo" value='+respuesta[i].year+' name="modelo" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500 invalid:text-red-600 invalid:ring-2';
                myTable+='invalid:ring-red-200 focus:invalid:border-red-500 focus:invalid:text-red-600 focus:invalid:ring-2 focus:invalid:ring-red-200">' + "</td>"
                
                myTable+="<td>"+'<input readonly style="cursor: not-allowed;" type="text" id="categoryId" value='+respuesta[i].category.name+' name="categoryId" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                //myTable+="<td>";
                //myTable+='<select type="number" id="categoryId" name="categoryId" class="w-full bg-white rounded border border-gray-300 text-gray-700 py-1 px-3 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-20 text-base outline-none leading-8 transition-colors">'
                //myTable+='<option selected class="text-gray-700" value='+respuesta[i].category.id+'>'+respuesta[i].category.name+'</option>'
                
                //myTable+=sessionStorage.getItem('mySelectCat');
                //myTable+="</td>";
                myTable+="<td>";
                myTable+='<textarea type="text" id="description" name="description" class="w-2/3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">'+respuesta[i].description+'</textarea>'
                myTable+="</td>";
                myTable+="</tr>"; 
                
                } 
            }

            
            
            
            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Nubes_R3.html" target="_self">';
            myType = '<label class="leading-7 text-ml text-gray-600">Nubes</label>';        
        break;
    
        case 'Client':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Nombre</th>";
            myTable+="<th>Email</th>";
            myTable+="<th>Contraseña</th>"
            myTable+="<th>Edad</th>";          
            myTable+="</tr>";
            myTable+="</thead>";

            for(i=0;i<respuesta.length;i++){
                if(respuesta[i].idClient==id){
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].idClient+"</td>";
                myTable+="<td>"+'<input type="text" id="nombre" value='+ respuesta[i].name+' name="nombre" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].email + "</td>";
                myTable+="<td>"+'<input type="password" id="password" placeholder="•••••••••" name="password" minlength="6" maxlength="45" value='+respuesta[i].password + ' name="password" class="peer w-full bg-white border border-gray-300 text-center text-gray-700 text-sm rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 invalid:border-red-500 invalid:text-red-600 invalid:ring-2 invalid:ring-red-200 focus:invalid:border-red-500 focus:invalid:text-red-600 focus:invalid:ring-2 focus:invalid:ring-red-200" required>';
                myTable+='<p class="invisible peer-invalid:visible text-red-600 text-xs">Ingrese mínimo 6 caracteres" </p>'+ "</td>";
                myTable+="<td>"+'<input type="number" min="18" max="99" id="edad" value='+respuesta[i].age+' name="edad" class="peer w-1/2 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">';
                myTable+='<p class="mt-2 invisible peer-invalid:visible text-red-600 text-xs">Ingrese edad permitida "(entre 18 y 99)" </p>'+ "</td>";
                myTable+="</tr>";
                console.log(respuesta[i].password) 
                }  
            }
            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Clientes_R3.html" target="_self">';
            myType = '<label class="leading-7 text-ml text-gray-600">Clientes</label>';
        break;
    
        case 'Message':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Mensaje</th>";
            myTable+="<th>Cliente</th>";
            myTable+="<th>Nube</th>";       
            myTable+="</tr>";
            myTable+="</thead>";

            for(i=0;i<respuesta.length;i++){
                if(respuesta[i].idMessage==id){   
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].idMessage+"</td>";
                myTable+="<td>";
                myTable+='<textarea type="text" id="Message" name="Message" class="w-2/3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">'+respuesta[i].messageText+'</textarea>'
                myTable+="</td>";
                myTable+="<td>";
                myTable+='<select type="number" id="ClientId" name="ClientId" class="w-full bg-white rounded border border-gray-300 text-gray-700 py-1 px-3 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-20 text-base outline-none leading-8 transition-colors">'
                myTable+='<option selected class="text-gray-700" value='+respuesta[i].client.idClient+'>'+respuesta[i].client.name+'</option>'
                //listarDetalle(respuesta[i].client.idClient, respuesta[i].cloud.id);
                //myTable+=sessionStorage.getItem('mySelectClient');
                myTable+="</td>";
                
                myTable+="<td>"; 
                myTable+='<select type="number" id="CloudId" name="CloudId" class="w-full bg-white rounded border border-gray-300 text-gray-700 py-1 px-3 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-20 text-base outline-none leading-8 transition-colors">'
                myTable+='<option selected class="text-gray-700" value='+respuesta[i].cloud.id+'>'+respuesta[i].cloud.name+'</option>'
                //myTable+=sessionStorage.getItem('mySelectCloud');
                myTable+='</select>'
                myTable+="</td>";
                

                myTable+="</tr>";  
                }
                        
            }

            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Mensaje_R3.html" target="_self">';
            myType = '<label class="leading-7 text-ml text-gray-600">Mensajes</label>';
        break;

        case 'Reservation':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Nombre Nube</th>";
            myTable+="<th>ID Usuario</th>";
            myTable+="<th>Nombre Usuario</th>";
            //myTable+="<th>Email Usuario</th>";
            myTable+="<th>Fecha inicio</th>";
            myTable+="<th>Fecha fin</th>";
            myTable+="<th>Calificación</th>"
            myTable+="<th>Estado</th>";         
            myTable+="</tr>";
            myTable+="</thead>";
            console.log(respuesta)
                   
            for(i=0;i<respuesta.length;i++){
                console.log(respuesta[i].score.score)
                if(respuesta[i].idReservation==id){
                
                myTable+="<tr>";
                myTable+="<td>"+'<input type="text" id="idReservation" style="cursor: not-allowed;" value='+respuesta[i].idReservation+' name="idReservation" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"> </div>' + "</td>";
                myTable+="<td>"+respuesta[i].cloud.name+"</td>";
                myTable+="<td>"+respuesta[i].client.idClient+"</td>";
                myTable+="<td>"+respuesta[i].client.name+"</td>";
                //myTable+="<td>"+respuesta[i].client.email+"</td>";
                myTable+="<td>"+'<input type="text" format="yyyy-mm-dd" id="startDate" value='+respuesta[i].startDate.substr(0,10)+' name="startDate" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"> </div>' + "</td>";
                myTable+="<td>"+'<input type="text" format="yyyy-mm-dd" id="devolutionDate" value='+respuesta[i].devolutionDate.substr(0,10)+' name="devolutionDate" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"> </div>' + "</td>";
                myTable+="<td>"+respuesta[i].score.score+"</td>";
                myTable+="<td>"
                myTable+='<select type="text" id="status" name="status" class="w-full bg-white rounded border border-gray-300 text-gray-700 py-1 px-3 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-20 text-base outline-none leading-8 transition-colors" required>';
                myTable+='<option disabled selected class="text-gray-700">'+respuesta[i].status+'</option>';
                myTable+="<option value='Programado'>Programado</option>";
                myTable+="<option value='Cancelado'>Cancelado</option>";
                myTable+="<option value='Realizado'>Realizado</option>";
                myTable+="</select>"
                myTable+="</td>"
                myTable+="</tr>"; 
                } 
            }
                
            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Reserva_R3.html" target="_self">';
            myType = '<label class="leading-7 text-ml text-gray-600">Reservas</label>';     
        break;

        case 'Admin':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Nombre</th>";
            myTable+="<th>Email</th>"; 
            myTable+="<th>Password</th>"; 
            myTable+="</tr>";
            myTable+="</thead>";

            for(i=0;i<respuesta.length;i++){
                if(respuesta[i].idAdmin==id){
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].idAdmin+"</td>";
                myTable+="<td>"+'<input type="text" id="nombre" value='+ respuesta[i].name+' name="nombre" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"> </div>' + "</td>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].email + "</td>";
                myTable+="<td>"+'<input type="password" id="password" placeholder="•••••••••" name="password" minlength="6" maxlength="45" value='+respuesta[i].password + ' name="password" class="peer w-full bg-white border border-gray-300 text-center text-gray-700 text-sm rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 invalid:border-red-500 invalid:text-red-600 invalid:ring-2 invalid:ring-red-200 focus:invalid:border-red-500 focus:invalid:text-red-600 focus:invalid:ring-2 focus:invalid:ring-red-200" required>';
                myTable+='<p class="invisible peer-invalid:visible text-red-600 text-xs">Ingrese mínimo 6 caracteres" </p>'+ "</td>";
                myTable+="</tr>"; 
                }  
            }
            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Admins_R3.html" target="_self">';
            myType = '<label class="leading-7 text-ml text-gray-600">Clientes</label>';
            console.log(respuesta)
        break;

        }

        myTable+= "</table>";
        myBack+='Regresar </a>';
            $("#res_Type").append(myType);
            $("#res_tabla").append(myTable);                       
            $("#res_Back").append(myBack);
    }
});

}

function crearReg(tipo){
    
    let myData={};
    
    switch(tipo){
       
    case 'Category': 
        myData={    
            //id:$("#id").val(),
            name:$("#nombre").val(),
            description:$("#description").val(),              
            }; //Almaceno info en variables
    break;    

    case 'Cloud': 
        myData={    
            //id:$("#id").val(),
            brand:$("#proveedor").val(),
            year:$("#modelo").val(),
            category:{"id":$("#CategoryId").val()},
            name:$("#nombre").val(),
            description:$("#description").val(),              
            }; //Almaceno info en variables
            
    break;
    case 'Client':
        myData={    
            //id:$("#id").val(),
            name:$("#nombre").val(),
            email:$("#email").val(),
            age:$("#edad").val(),
            password:$("#password").val(),              
            }; //Almaceno info en variables
            
    break;
    case 'Message':
        myData={    
            //id:$("#id").val(),
            messageText:$("#Message").val(),
            cloud:{"id":$("#CloudId").val()},
            client:{"idClient":$("#ClientId").val()},            
            }; //Almaceno info en variables
            
    break;

    case 'Reservation': 
    myData={    
        //id:$("#id").val(),
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),   
        cloud:{"id":$("#CloudId").val()},
        client:{"idClient":$("#ClientId").val()},          
        }; //Almaceno info en variables
    break;

    case 'Score': 
        myData={    
            //idScore:id,
            score:$("#score").val(),
            scoreText:$("#scoreText").val(),
            reservation:{"idReservation":$("#ReservationId").val()},           
            }; //Almaceno info en variables
    break;
    case 'Admin':
        myData={    
            //id:$("#id").val(),
            name:$("#nombre").val(),
            email:$("#email").val(),
            password:$("#password").val(),         
            }; //Almaceno info en variables
            
    break;

    default: console.log("No type selected")
    }
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({ //Llamo al método AJAX
        url:"http://localhost:8080/api/"+tipo+"/save", //Dirección del módulo
        type:"POST", //Tipo post para enviar
        data:dataToSend, //Datos a enviar
        contentType:"application/JSON", //Le indico al servidor en qué formato le envío la info
        datatype:"JSON", //Tipo de datos a enviar
        success:function(respuesta){
            $("#res_tabla").empty();

            switch(tipo){
                        
            case 'Category':
                //$("#id").val("");
                $("#nombre").val("");
                $("#description").val("");
            break;
            case 'Cloud':
                //$("#id").val("");
                $("#nombre").val("");
                $("#proveedor").val("");
                $("#modelo").val("");
                $("#CategoryId").val("");
                $("#description").val("");
            break;
            case 'Client':
                //$("#id").val("");
                $("#nombre").val("");
                $("#email").val("");
                $("#edad").val("");
                $("#password").val("");
            break;
            case 'Message':
                //$("#id").val("");
                $("#message").val("");
                $("#ClientId").val(""),
                $("#CloudId").val("");  
            break;
            case 'Reservation':
                ///$("#id").val("");
                $("#startDate").val("");
                $("#devolutionDate").val("");   
                $("#ClientId").val("");
                $("#CloudId").val("");     
            break;
            case 'Score': 
                //$("#id").val("");
                $("#score").val("");
                $("#scoreText").val("");
                $("#ReservationId").val("");
            break;
            case 'Admin':
                //$("#id").val("");
                $("#nombre").val("");
                $("#email").val("");
                $("#password").val("");
            break;
                     
        }

       
       if(tipo!='Score'){leerDatos(tipo);} else{calificar();}
        alert("Se han almacenado los datos");

        }
    });
}


function ActualizaReg(){
    
    let id = sessionStorage.getItem('id');
    let tipo = sessionStorage.getItem('tipo');

    let myData={};
    
    switch(tipo){
       
    case 'Category': 
        myData={    
            id:id,
            name:$("#nombre").val(),
            description:$("#description").val(),              
            }; //Almaceno info en variables
    break;

    case 'Cloud': 
        myData={    
            id:id,
            brand:$("#proveedor").val(),
            year:$("#modelo").val(),
            //category:{"id":$("#categoryId").val()},
            name:$("#nombre").val(),
            description:$("#description").val(),            
            }; //Almaceno info en variables     
    break;

    case 'Client':
        myData={    
            idClient:id,
            name:$("#nombre").val(),
            email:$("#email").val(),
            age:$("#edad").val(),
            password:$("#password").val(),            
            }; //Almaceno info en variables 
    break;

    case 'Message':
        myData={    
            idMessage:id,
            messageText:$("#Message").val(), 
            cloud:{"id":$("#CloudId").val()},
            client:{"idClient":$("#ClientId").val()},          
            }; //Almaceno info en variables
    break;

    case 'Reservation': 
        myData={    
            idReservation:$("#idReservation").val(),
            startDate:$("#startDate").val(),
            devolutionDate:$("#devolutionDate").val(),
            //cloud:{"id":$("#CloudId").val()},
            //client:{"idClient":$("#ClientId").val()},  
            status:$("#status").val(),        
            }; //Almaceno info en variables
    break;

    case 'Score': 
        myData={    
            idScore:$("#ScoreId").val(),
            score:$("#score").val(),
            scoreText:$("#scoreText").val(),
            reservation:{"id":$("#ReservationId").val()},           
            }; //Almaceno info en variables
    break;

    case 'Admin':
        myData={    
            idAdmin:id,
            name:$("#nombre").val(),
            email:$("#email").val(),
            password:$("#password").val(),
                          
            }; //Almaceno info en variables 
    break;
    

    default: console.log("No type selected")
    }
    let dataToSend=JSON.stringify(myData);
    
    $.ajax({ //Llamo al método AJAX
        url:"http://localhost:8080/api/"+tipo+"/update", //Dirección del módulo
        type:"PUT", //Tipo post para enviar
        data:dataToSend, //Datos a enviar
        contentType:"application/JSON", //Le indico al servidor en qué formato le envío la info
        datatype:"JSON", //Tipo de datos a enviar
        success:function(respuesta){
            $("#res_tabla").empty();
            
            switch(tipo){
            case 'Reservation':
                $("#id").val("");
                $("#startDate").val("");
                $("#devolutionDate").val("");   
                $("#ClientId").val("");
                $("#CloudId").val("");
            break;
            
            case 'Category':
                $("#id").val("");
                $("#nombre").val("");
                $("#description").val("");
            break;
            case 'Cloud':
                listarDetalle(0, 0, myData.category.id);
                $("#id").val("");
                $("#nombre").val("");
                $("#proveedor").val("");
                $("#CategoryId").val("");
                $("#modelo").val("");
                $("#description").val("");
            break;
            case 'Client':
                $("#id").val("");
                $("#nombre").val("");
                $("#email").val("");
                $("#edad").val("");
            break;
            case 'Message':
                
                listarDetalle(myData.client.idClient, myData.cloud.id);
                $("#id").val("");
                $("#mensaje").val("");
                $("#ClientId").val("");
                $("#CloudId").val("");

            break;
            case 'Score': 
                calificar();
                $("#id").val("");
                $("#score").val("");
                $("#scoreText").val("");
                $("#ReservationId").val("");
            break;
            case 'Client':
                $("#id").val("");
                $("#nombre").val("");
                $("#email").val("");               
            break;
      
        }

        if(tipo!='Score'){verDetalle();} else{calificar();}
        
        alert("Se han actualizado los datos");

        }
    });
}

function eliminarScore(idReservation, idScore, tipo){
    if(idScore!=0){
    console.log(idReservation, idScore, tipo);
    let myData={id:idScore}; //Almaceno id traída desde el pintar
    let dataToSend=JSON.stringify(myData); //Convierto en JSON
        $.ajax({ //Llamo al método AJAX
            url:"http://localhost:8080/api/Score/"+idScore, //Dirección del módulo
            type:"DELETE", //Tipo post para enviar
            data:dataToSend, //Datos a enviar
            contentType:"application/JSON", //Le indico al servidor en qué formato le envío la info
            datatype:"JSON", //Tipo de datos a enviar
            success:function(respuesta){
                $("#resultado").empty();
                leerDatos(tipo);
                alert("Se ha eliminado el dato Score")
                eliminar(idReservation, tipo);
            }
            });
        }else{eliminar(idReservation, tipo);}

            
    


}

function eliminar(id, tipo){
    
    console.log(id, tipo);
    let myData={id:id}; //Almaceno id traída desde el pintar
    let dataToSend=JSON.stringify(myData); //Convierto en JSON
        $.ajax({ //Llamo al método AJAX
            url:"http://localhost:8080/api/"+tipo+"/"+id, //Dirección del módulo
            type:"DELETE", //Tipo post para enviar
            data:dataToSend, //Datos a enviar
            contentType:"application/JSON", //Le indico al servidor en qué formato le envío la info
            datatype:"JSON", //Tipo de datos a enviar
            success:function(respuesta){
                $("#resultado").empty();
                leerDatos(tipo);
                alert("Se ha eliminado el dato")
            }
            }).fail(function() {
                alert("No es posible eliminar pues el dato está asociado a otro elemento")});
    


}

function listar(tipo){

    $.ajax({
        url:"http://localhost:8080/api/"+tipo+"/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        
        
        $("#res_Select"+tipo).empty();
        
        let mySelect = '<select type="number" id="'+tipo+'Id" name="'+tipo+'Id" class="w-full bg-white rounded border border-gray-300 text-gray-700 py-1 px-3 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-20 text-base outline-none leading-8 transition-colors" required>'
        mySelect += '<option disabled selected class="text-gray-700">Selecciona una opción</option>'
        for(i=0;i<respuesta.length;i++){
             
            
            if(tipo=="Client"){
                mySelect += '<option value='+respuesta[i].idClient+'>'+respuesta[i].idClient+'</option>'
            }else {
            mySelect += '<option value='+respuesta[i].id+'>'+respuesta[i].name+'</option>'}
        }
        mySelect += '</select>'
      
        $("#res_Select"+tipo).append(mySelect)

        

        }
        });


};

function listarDetalle(idClient, idCloud, idCat){
let mySelectClient = ""
let mySelectCloud = ""
let mySelectCat = ""

    $.ajax({
        url:"http://localhost:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            
        
        for(i=0;i<respuesta.length;i++){
            if(respuesta[i].idClient!=idClient)
            {mySelectClient += '<option value='+respuesta[i].idClient+'>'+respuesta[i].name+'</option>'}
        }
        
             
       sessionStorage.setItem('mySelectClient',mySelectClient);
        }
        });

    $.ajax({
        url:"http://localhost:8080/api/Cloud/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        
        
            
        for(i=0;i<respuesta.length;i++){
            if(respuesta[i].id!=idCloud)
            mySelectCloud += '<option value='+respuesta[i].id+'>'+respuesta[i].name+'</option>'}
                 
            sessionStorage.setItem('mySelectCloud',mySelectCloud);
        }
            
        });

    $.ajax({
        url:"http://localhost:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
       
        
                
        for(i=0;i<respuesta.length;i++){
            

            if(respuesta[i].id!=idCat){mySelectCat += '<option value='+respuesta[i].id+'>'+respuesta[i].name+'</option>';}
        
        }
               
            sessionStorage.setItem('mySelectCat',mySelectCat);
            
            }
                
            });
            
};

function contar(valor, label){
    let characterCount = valor.value.length,
        current = $('#current'+label);
    current.text(characterCount);
   
 };

function calificar(puntaje){

    let id = sessionStorage.getItem('id');
    let tipo = sessionStorage.getItem('tipo');
    
    let myType;
    let myBack;
    let myButton;
    var contar=0;
    
    let myTable = '<table class="table-auto text-gray-600 text-center text-sm">';
    $.ajax({
        url:"http://localhost:8080/api/"+tipo+"/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        
        
        $("#res_tabla").empty();
        $("#res_Back").empty();
        $("#res_Type").empty();
        $("#res_Button").empty();
                
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>ID Reserva</th>";
            myTable+="<th>Calificación</th>";
            myTable+="<th>Descripción</th>";         
            myTable+="</tr>";
            myTable+="</thead>";
                    
         
            if(respuesta.length==0){
                myTable+="<tr>";
                    myTable+="<td style='cursor: not-allowed'></td>";
                    myTable+="<td>"+'<input readonly style="cursor: not-allowed" type="number" id="ReservationId" name="ReservationId" value='+id+' class="w-1/2 bg-white rounded border border-gray-300 text-base text-center outline-none text-gray-700 leading-8 transition-colors">' + "</td>";
                    myTable+="<td>"+'<input type="number" id="score" min="1" max="5" pattern="\d" placeholder="Ingrese calificación" name="score" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                    myTable+="<td>"+'<textarea type="text" id="scoreText" name="scoreText" placeholder="Describa calificación" class="w-2/3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>'+ "</td>";
                    myTable+="</tr>";
                    myButton += "<button onclick='crearReg(\""+tipo+"\")' class='text-white font-bold bg-[#4164B7] border-0 py-2 px-6 focus:outline-none hover:bg-[#EC2468] rounded text-xl'> Crear </button>"
            }

            
            for(i=0;i<respuesta.length;i++){
                 
                if(respuesta[i].reservation.idReservation==id){
                    
                if(!typeof respuesta[i].reservation.score==='undefined'){
                    myTable+="<tr>";
                    myTable+="<td style='cursor: not-allowed'></td>";
                    myTable+="<td>"+'<input readonly style="cursor: not-allowed" type="number" id="ReservationId" name="ReservationId" value='+id+' class="w-1/2 bg-white rounded border border-gray-300 text-base text-center outline-none text-gray-700 leading-8 transition-colors">' + "</td>";
                    myTable+="<td>"+'<input type="number" id="score" min="1" max="5" pattern="\d" placeholder="Ingrese calificación" name="score" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                    myTable+="<td>"+'<textarea type="text" id="scoreText" name="scoreText" placeholder="Describa calificación" class="w-2/3 class="bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>'+ "</td>";
                    myTable+="</tr>";
                    myButton += "<button onclick='crearReg(\""+tipo+"\")' class='text-white font-bold bg-[#4164B7] border-0 py-2 px-6 focus:outline-none hover:bg-[#EC2468] rounded text-xl'> Crear </button>"
                }
                else{
                
                myTable+="<tr>";
                myTable+="<td>"+'<input readonly style="cursor: not-allowed" type="number" id="ScoreId" name="ScoreId" value='+respuesta[i].idScore+' class="w-1/2 bg-white rounded border border-gray-300 text-base text-center outline-none text-gray-700 leading-8 transition-colors">' + "</td>";
                myTable+="<td>"+'<input readonly style="cursor: not-allowed" type="number" id="ReservationId" name="ReservationId" value='+respuesta[i].reservation.idReservation+' class="w-1/2 bg-white rounded border border-gray-300 text-base text-center outline-none text-gray-700 leading-8 transition-colors">' + "</td>";
                myTable+="<td>"+'<input type="number" id="score" min="1" max="5" pattern="\d" value='+respuesta[i].score+' name="score" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                myTable+="<td>"+'<textarea type="text" id="scoreText" name="scoreText" class="w-2/3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">'+respuesta[i].scoreText+'</textarea>'+ "</td>";
                myTable+="</tr>";
                myButton += "<button onclick='ActualizaReg()' class='text-white font-bold bg-[#4164B7] border-0 py-2 px-6 text-center focus:outline-none hover:bg-[#EC2468] rounded text-xl'> Actualizar </button>"
                } 
                }
                else{contar=contar+1}

                if(respuesta.length==contar){
                    myTable+="<tr>";
                    myTable+="<td style='cursor: not-allowed'></td>";
                    myTable+="<td>"+'<input readonly style="cursor: not-allowed" type="number" id="ReservationId" name="ReservationId" value='+id+' class="w-1/2 bg-white rounded border border-gray-300 text-base text-center outline-none text-gray-700 leading-8 transition-colors">' + "</td>";
                    myTable+="<td>"+'<input type="number" id="score" min="1" max="5" pattern="\d" placeholder="Ingrese calificación" name="score" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                    myTable+="<td>"+'<textarea type="text" id="scoreText" name="scoreText" placeholder="Describa calificación" class="w-2/3 class="bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>'+ "</td>";
                    myTable+="</tr>";
                    myButton += "<button onclick='crearReg(\""+tipo+"\")' class='text-white font-bold bg-[#4164B7] border-0 py-2 px-6 focus:outline-none hover:bg-[#EC2468] rounded text-xl'> Crear </button>"
                }

                
                
              
            }

            


        myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Reserva_R3.html" target="_self">'
        myType = '<label class="leading-7 text-ml text-gray-600">Calificación</label>'
        myTable+= "</table>";
        myBack+='Regresar </a>';

        $("#res_Type").append(myType);
        $("#res_tabla").append(myTable);                       
        $("#res_Back").append(myBack);
        $("#res_Button").append(myButton);

        }
    });
    
}
 