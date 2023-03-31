import '../../../css/contacto.css'

const Contacto = () => {
    
    return(
        <>
            <form className='containerForm'>
                <div class="form-group">
                    <label className='labelContacto'><span id='idAsterisco'>*</span> Nombre y Apellido</label>
                    <input type="text" className="form-control" id="exampleInputName"/>
                </div>
                <div class="form-group">
                    <label className='labelContacto'><span id='idAsterisco'>*</span> Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail"/>
                </div>
                <div class="form-group">
                    <label className='labelContacto'><span id='idAsterisco'>*</span> Numero Celular </label>
                    <input type="number" className="form-control" id="exampleInputNumber"/>
                </div>
                <div class="form-group">
                    <label className='labelContacto'>Numero Fijo</label>
                    <input type="number" className="form-control" id="exampleInputNumber" />
                </div>
                <div class="form-group">
                    <label className='labelContacto'><span id='idAsterisco'>*</span> Mensaje</label>
                    <input type="text" className="form-control" id="exampleInputMessage"/>
                </div>
                <div>
                    <h4 className='h4Contacto'>* Campos obligatorios</h4>
                </div>
                <button type="submit" id='btnEnviar' className="btn btn-primary">Enviar</button>
            </form>
        </>
    )
}

export default Contacto;