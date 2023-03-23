import '../../../css/contacto.css'

const Contacto = () => {
    
    return(
        <>
            <form className='containerForm'>
                <div class="form-group">
                    <label style={{fontFamily:'bold'}}>* Nombre y Apellido</label>
                    <input type="text" className="form-control" id="exampleInputName"/>
                </div>
                <div class="form-group">
                    <label style={{fontFamily:'bold'}}>* Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail"/>
                </div>
                <div class="form-group">
                    <label style={{fontFamily:'bold'}}>* Numero Celular </label>
                    <input type="number" className="form-control" id="exampleInputNumber"/>
                </div>
                <div class="form-group">
                    <label style={{fontFamily:'bold'}}>Numero Fijo</label>
                    <input type="number" className="form-control" id="exampleInputNumber" />
                </div>
                <div style={{paddingBottom:'15px'}} class="form-group">
                    <label style={{fontFamily:'bold'}}>* Mensaje</label>
                    <input type="text" className="form-control" id="exampleInputMessage"/>
                </div>
                <div>
                    <h4 style={{fontSize:'16px',paddingBottom:'15px',fontFamily:'bold'}}>* Campos obligatorios</h4>
                </div>
                <button type="submit" style={{backgroundColor:'rgb(47, 177, 177)',borderColor:'rgb(47, 177, 177)'}} className="btn btn-primary">Enviar</button>
            </form>
        </>
    )
}

export default Contacto;