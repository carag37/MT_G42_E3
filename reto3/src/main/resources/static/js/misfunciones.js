function traerInformacion(){
    $.ajax({
        url:"https://g028fdc581fb29e-qm17brxwychc8igl.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaNube(respuesta.items)
        }
    });
}

function pintarRespuesta(items){
    let myTable ="<table border=2px>";
    myTable+="<tr>";
    Object.keys(items[0]).forEach(a=>myTable+="<th>"+a+"</th>");
    myTable+="</tr>";
    myTable+="<tr>";
    for(i=0;i<Object.keys(items[0]).length;i++){
       myTable+="<td>"+Object.values(items[0])[i]+"</td>" ; 
    }
    myTable+="</tr>";
    myTable+="</table>";
    $("#resultado").empty();
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url:"https://g028fdc581fb29e-qm17brxwychc8igl.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Se ha guardado")    
        }
    });
}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url:"https://g028fdc581fb29e-qm17brxwychc8igl.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"PUT",
        data:dataTosend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            MostrarDetalle();
            alert("Se ha actualizado")
        }
    });    
}

function traerInformacionCliente(){
    $.ajax({
        url:"https://g028fdc581fb29e-qm17brxwychc8igl.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCliente(respuesta.items)
        }
    });
}
function guardarInformacionCliente(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),    
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url:"https://g028fdc581fb29e-qm17brxwychc8igl.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultados").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("Se ha guardado")    
        }
    });
}
function editarInformacionCliente(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),    
    };
    console.log(myData);
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url:"https://g028fdc581fb29e-qm17brxwychc8igl.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataTosend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            MostrarDetalle();
            alert("Se ha actualizado")
        }
    });    
}

function traerInformacionMensaje(){
    $.ajax({
        url:"https://g028fdc581fb29e-qm17brxwychc8igl.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensaje(respuesta.items)
        }
    });
}

function guardarInformacionMensaje(){
    let myData={
        id:$("#idMensaje").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url:"https://g028fdc581fb29e-qm17brxwychc8igl.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idMensaje").val("");
            $("#messagetext").val("");
            traerInformacionMensaje();
            alert("Se ha guardado")    
        }
    });
}
function editarInformacionMensaje(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),    
    };
    console.log(myData);
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url:"https://g028fdc581fb29e-qm17brxwychc8igl.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataTosend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#id").val("");
            $("#messagetext").val("");
            MostrarDetalle();
            alert("Se ha actualizado")
        }
    });    
}
function pintarRespuestaNube(items){
    let myTable ="<table border=2px>";
    let tipo="cloud";
    myTable+="<tr>";
    myTable+="<th>Nombre</th>";
    myTable+="</tr>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td><a href='#'onclick='guardarId("+items[i].id+",\""+tipo+"\");'>"+items[i].name+"</a></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").empty();
    $("#resultado").append(myTable);
}
function pintarRespuestaCliente(items){
    let myTable ="<table border=2px>";
    let tipo="client";
    myTable+="<tr>";
    myTable+="<th>Nombre</th>";
    myTable+="</tr>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td><a href='#'onclick='guardarId("+items[i].id+",\""+tipo+"\");'>"+items[i].name+"</a></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").empty();
    $("#resultado").append(myTable);
}
function pintarRespuestaMensaje(items){
    let myTable ="<table border=2px>";
    let tipo="message";
    myTable+="<tr>";
    myTable+="<th>Mensaje</th>";
    myTable+="</tr>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td><a href='#'onclick='guardarId("+items[i].id+",\""+tipo+"\");'>"+items[i].messagetext+"</a></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").empty();
    $("#resultado").append(myTable);
}


function guardarId(id, tipo){
    sessionStorage.setItem('id',id);
    sessionStorage.setItem('tipo',tipo);
    location.href="./detalle.html";

}
function MostrarDetalle(){
   let id = sessionStorage.getItem('id');
   let tipo = sessionStorage.getItem('tipo');
   $.ajax({
    url:"https://g028fdc581fb29e-qm17brxwychc8igl.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/"+tipo+"/"+tipo+"/"+id,
    type:"GET",
    datatype:"JSON",
    success:function(respuesta){
        console.log(respuesta);
        pintarRespuesta(respuesta.items);
        pintarformulario(respuesta.items);
    }
});

}

function BorrarDetalle(){
    let id = sessionStorage.getItem('id');
    let tipo = sessionStorage.getItem('tipo');
    $.ajax({
     url:"https://g028fdc581fb29e-qm17brxwychc8igl.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/"+tipo+"/"+tipo,
     data:JSON.stringify({'id':id}),
     contentType:'application/json',
     type:"DELETE",
     datatype:"JSON",
     success:function(respuesta){
         alert("Se ha borrado con éxito");
         location.href="./index.html";
     }
 });
 
 }

function pintarformulario(items){
    let texto ="";
    Object.keys(items[0]).forEach(a=>texto+="<input id=\""+a+"\" placeholder=\""+a+"\">");
    $("#formulario").empty();
    $("#formulario").append(texto);
}

function editarBaseDatos(){
    let tipo = sessionStorage.getItem('tipo');
    if(tipo=="cloud"){
        editarInformacion();
    }else if(tipo=="message"){
        editarInformacionMensaje();
    }else if (tipo=="client"){
        editarInformacionCliente();
    }
}