function leerDatos(tipo){
        $.ajax({
            url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/"+tipo+"/"+tipo,
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
            console.log(respuesta);
            $("#res_tabla").empty();
            updateTabla(respuesta.items, tipo)
            
            }
            });
    };

function updateTabla(items, tipo){
    
    let myTable = '<table class="text-gray-600 border-rounded-lg text-center text-sm border border-gray-300">';
    myTable += "<thead class='border border-gray-300'>";
    myTable += "<tr class='rounded-full'>";

    switch(tipo){
    case 'cloud':
    myTable+="<th>ID</th>";
    myTable+="<th>Nombre</th>";
    myTable+="<th>Eliminar</th>";   
    myTable+="</tr>";
    myTable+="</thead>"

    for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].id+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].id+", \""+tipo+"\");'>"
            +items[i].name+"</a>"+"</td>";
            myTable+='<td> <a class="text-center" href="#" onclick="eliminar('+items[i].id+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto text-gray-400 hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";   
        }
    myTable+= "</table>";
    $("#res_tabla").append(myTable); 
    break;

    case 'client':
    myTable+="<th>ID</th>";
    myTable+="<th>Nombre</th>";  
    myTable+="<th>Eliminar</th>"; 
    myTable+="</tr>";
    myTable+="</thead>"

        for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].id+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].id+", \""+tipo+"\");'>"
            +items[i].name+"</td>";
            myTable+='<td> <a class="text-center" href="#" onclick="eliminar('+items[i].id+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";   
        }
        myTable+= "</table>";
        $("#res_tabla").append(myTable);  
    break;

    case 'message':
    myTable+="<th>ID</th>";
    myTable+="<th>Mensaje</th>";
    myTable+="<th>Eliminar</th>";   
    myTable+="</tr>";
    myTable+="</thead>"
    
        for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].id+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].id+", \""+tipo+"\");'>"
            +items[i].messagetext+"</td>";
            myTable+='<td> <a class="text-center"  href="#" onclick="eliminar('+items[i].id+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";   
        }
        myTable+= "</table>";
        $("#res_tabla").append(myTable);  
    break;
    }
}

function detalle(id, tipo){
    sessionStorage.setItem('id',id);
    sessionStorage.setItem('tipo',tipo);
    location.href="./Detalles_R2.html";
}

function verDetalle(){

    let id = sessionStorage.getItem('id');
    let tipo = sessionStorage.getItem('tipo');
    let myType;
    let myBack;
    
    let myTable = '<table class="table-auto text-gray-600 text-center text-sm">';
    $.ajax({
        url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/"+tipo+"/"+tipo,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        console.log(respuesta);
        
        $("#res_tabla").empty();
        $("#res_Back").empty();
        $("#res_Type").empty();

        switch(tipo){
        case 'cloud':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Nombre</th>";
            myTable+="<th>Proveedor</th>";
            myTable+="<th>Modelo</th>";
            myTable+="<th>Categoría</th>";            
            myTable+="</tr>";
            myTable+="</thead>";
                
            for(i=0;i<respuesta.items.length;i++){
                if(respuesta.items[i].id==id){
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta.items[i].id+"</td>";
                myTable+="<td>"+'<input type="text" id="nombre" value='+ respuesta.items[i].name+' name="nombre" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"> </div>' + "</td>";
                myTable+="<td>"+'<input type="text" id="proveedor" value='+respuesta.items[i].brand+' name="proveedor" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"></input>' + "</td>";
                myTable+="<td>"+'<input type="number" id="modelo" value='+respuesta.items[i].model+' name="modelo" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                myTable+="<td>"+'<input type="number" id="category_id" value='+respuesta.items[i].category_id+' name="category_id" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                myTable+="</tr>"; 
                } 
            }
            
            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Nubes_R2.html" target="_self">'
            myType = '<label class="leading-7 text-ml text-gray-600">Nubes</label>'         
        break;
    
        case 'client':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Nombre</th>";
            myTable+="<th>Email</th>";
            myTable+="<th>Edad</th>";          
            myTable+="</tr>";
            myTable+="</thead>";

            for(i=0;i<respuesta.items.length;i++){
                if(respuesta.items[i].id==id){
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta.items[i].id+"</td>";
                myTable+="<td>"+'<input type="text" id="nombre" value='+ respuesta.items[i].name+' name="nombre" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"> </div>' + "</td>";
                myTable+="<td>"+'<input type="text" id="email" value='+respuesta.items[i].email+' name="email" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                myTable+="<td>"+'<input type="number" id="edad" value='+respuesta.items[i].age+' name="edad" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                myTable+="</tr>"; 
                }  
            }
            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Clientes_R2.html" target="_self">'
            myType = '<label class="leading-7 text-ml text-gray-600">Clientes</label>'
        break;
    
        case 'message':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Mensaje</th>";       
            myTable+="</tr>";
            myTable+="</thead>";

            for(i=0;i<respuesta.items.length;i++){
                if(respuesta.items[i].id==id){   
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta.items[i].id+"</td>";
                myTable+="<td>";
                myTable+='<textarea type="text" id="message" name="message" class="w-2/3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">'+respuesta.items[i].messagetext+'</textarea>'
                myTable+="</td>";
                myTable+="</tr>";  
                }
                        
            }

            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Mensaje_R2.html" target="_self">'
            myType = '<label class="leading-7 text-ml text-gray-600">Mensajes</label>'
        break;

        }

        myTable+= "</table>";
        myBack+='Regresar </a>'
            $("#res_Type").append(myType)
            $("#res_tabla").append(myTable);                       
            $("#res_Back").append(myBack);
    }
});

}

function crearReg(tipo){
    
    let myData={};
    
    switch(tipo){
    case 'cloud': 
        myData={    
            id:$("#id").val(),
            name:$("#nombre").val(),
            brand:$("#proveedor").val(),
            model:$("#modelo").val(),
            category_id:$("#category_id").val(),              
            }; //Almaceno info en variables
            
    break;
    case 'client':
        myData={    
            id:$("#id").val(),
            name:$("#nombre").val(),
            email:$("#email").val(),
            age:$("#edad").val(),              
            }; //Almaceno info en variables
            
    break;
    case 'message':
        myData={    
            id:$("#id").val(),
            messagetext:$("#message").val(),            
            }; //Almaceno info en variables
            
    break;
    default: console.log("No type selected")
    }
    let dataToSend=JSON.stringify(myData);

    $.ajax({ //Llamo al método AJAX
        url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/"+tipo+"/"+tipo, //Dirección del módulo
        type:"POST", //Tipo post para enviar
        data:dataToSend, //Datos a enviar
        contentType:"application/JSON", //Le indico al servidor en qué formato le envío la info
        datatype:"JSON", //Tipo de datos a enviar
        success:function(respuesta){
            $("#res_tabla").empty();

            switch(tipo){
            case 'cloud':
            $("#id").val("");
            $("#nombre").val("");
            $("#proveedor").val("");
            $("#modelo").val("");
            $("#category_id").val("");
            break;
            case 'client':
            $("#id").val("");
            $("#nombre").val("");
            $("#email").val("");
            $("#edad").val("");
            break;
            case 'message':
            $("#id").val("");
            $("#message").val("");
            break;
                     
        }

        leerDatos(tipo);
        alert("Se han almacenado los datos");

        }
    });
}


function ActualizaReg(){
    
    let id = sessionStorage.getItem('id');
    let tipo = sessionStorage.getItem('tipo');

    let myData={};
    
    switch(tipo){
    case 'cloud': 
        myData={    
            id:id,
            name:$("#nombre").val(),
            brand:$("#proveedor").val(),
            model:$("#modelo").val(),
            category_id:$("#category_id").val(),              
            }; //Almaceno info en variables
            
    break;
    case 'client':
        myData={    
            id:id,
            name:$("#nombre").val(),
            email:$("#email").val(),
            age:$("#edad").val(),              
            }; //Almaceno info en variables
            
    break;
    case 'message':
        myData={    
            id:id,
            messagetext:$("#message").val(),            
            }; //Almaceno info en variables
            
    break;
    default: console.log("No type selected")
    }
    let dataToSend=JSON.stringify(myData);
    console.log(myData);
    $.ajax({ //Llamo al método AJAX
        url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/"+tipo+"/"+tipo, //Dirección del módulo
        type:"PUT", //Tipo post para enviar
        data:dataToSend, //Datos a enviar
        contentType:"application/JSON", //Le indico al servidor en qué formato le envío la info
        datatype:"JSON", //Tipo de datos a enviar
        success:function(respuesta){
            $("#res_tabla").empty();

            switch(tipo){
            case 'cloud':
            $("#id").val("");
            $("#nombre").val("");
            $("#proveedor").val("");
            $("#modelo").val("");
            $("#category_id").val("");
            break;
            case 'client':
            $("#id").val("");
            $("#nombre").val("");
            $("#email").val("");
            $("#edad").val("");
            break;
            case 'message':
            $("#id").val("");
            $("#mensaje").val("");
            break;
                     
        }

        verDetalle();
        alert("Se han actualizado los datos");

        }
    });
}

function eliminar(id, tipo){
 
    console.log(id, tipo);
    let myData={id:id}; //Almaceno id traída desde el pintar
    let dataToSend=JSON.stringify(myData); //Convierto en JSON
        $.ajax({ //Llamo al método AJAX
            url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/"+tipo+"/"+tipo, //Dirección del módulo
            type:"DELETE", //Tipo post para enviar
            data:dataToSend, //Datos a enviar
            contentType:"application/JSON", //Le indico al servidor en qué formato le envío la info
            datatype:"JSON", //Tipo de datos a enviar
            success:function(respuesta){
                $("#resultado").empty();
                leerDatos(tipo);
                alert("Se ha eliminado el dato")
            }
            });
    


}