import '../../../css/contacto.css'

const Contacto = () => {
    
    return(
        <>
            <form className='containerForm'>
                <div class="form-group">
                    <label>Nombre y Apellido</label>
                    <input type="text" className="form-control" id="exampleInputName"/>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail"/>
                </div>
                <div class="form-group">
                    <label>Numero Celular</label>
                    <input type="number" className="form-control" id="exampleInputNumber"/>
                </div>
                <div class="form-group">
                    <label>Numero Fijo</label>
                    <input type="number" className="form-control" id="exampleInputNumber"/>
                </div>
                <div style={{paddingBottom:'15px'}} class="form-group">
                    <label>Mensaje</label>
                    <input type="text" className="form-control" id="exampleInputMessage"/>
                </div>
                <button type="submit" style={{backgroundColor:'rgb(47, 177, 177)',borderColor:'rgb(47, 177, 177)'}} className="btn btn-primary">Enviar</button>
            </form>
        </>
    )
}

export default Contacto;