let txtNombre = document.getElementById('txtNombre')
let txtTarea= document.getElementById('txtTarea')
let divPrinter = document.getElementById('divResultado')
let arrayTodo = []

const registrarTodo=()=>{
    if(txtNombre.value !=="" && txtTarea.value !==""){
        let id = arrayTodo.length
        let info = {
            nombre:txtNombre.value,
            tarea:txtTarea.value,
            id: id
        }
        arrayTodo.push(info)
        txtNombre.value=''
        txtTarea.value=''
        printerTodo()
    }else{
        alert('Los datos son requeridos')
        if(txtTarea.value ==="") txtTarea.focus()
        if(txtNombre.value ==="") txtNombre.focus()
    }
}

const eliminarTarea=(id)=>{
    let temp = arrayTodo.filter((resp)=>Number(resp.id) !== Number(id))
    arrayTodo = []
    arrayTodo = temp
    printerTodo()
    txtNombre.focus()
}

const printerTodo=()=>{
    divPrinter.innerHTML=''
    let info =''
    for (const key in arrayTodo) {
        info += `
        <div style="margin-top:10px">
            <input type="text" disabled placeholder="Ingrese el nombre de la tarea" id="txtNombre" class="form-control" value='${arrayTodo[key].nombre}'/>
            <input type="text" disabled placeholder="Ingrese la tarea" id="txtTarea" class="form-control" value='${arrayTodo[key].tarea}'/>
            <button class="btn2" onclick="eliminarTarea(${arrayTodo[key].id})">
                ❌ Eliminar Tarea
            </button>
        </div>`
    }
    divPrinter.innerHTML = info
}