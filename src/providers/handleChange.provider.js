const handleChangeProvider=(e,form,setForm)=>{
    // const handleChange = (e) => {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    // }
    console.log(e.target.value );
    if (e.target.type=='file'){
        //para tener todos los archivos
        setForm({ ...form, [e.target.name]: e.target.files }); //files es el arreglo de archivos para obtener 1 se pone [0]
    } else{
        
        setForm({ ...form, [e.target.name]: e.target.value });
    }
   
}
export default handleChangeProvider;