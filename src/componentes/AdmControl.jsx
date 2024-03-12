import React, { useState } from 'react';

const AdmControl = (props) => {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [editorial, setEditorial] = useState('');
  const [resena, setResena] = useState('');
  const [urlimg, setUrlimg] = useState('');
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);

  const crearLibro = (e) => {
    //e.preventDefault();

  }; 

  return (
  
    <div className="container boxadd">    
      <form className="row" onSubmit={crearLibro}>            
        <div className="col-md-6">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label col-form-label-sm">Titulo</label>
            <div className="col-sm-10">
              <input 
              type="text" 
              className="form-control form-control-sm"
              onChange={(e) => setTitulo(e.target.value)}
              value={titulo}/>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label col-form-label-sm">Autor</label>
            <div className="col-sm-10">
              <input 
              type="text" 
              className="form-control form-control-sm"
              onChange={(e) => setAutor(e.target.value)}
              value={autor}/>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label col-form-label-sm">Genero</label>
            <div className="col-sm-10">
              <select id="" class="form-select form-select-sm"
                onChange={(e) => setGenero(e.target.value)}
                value={genero}>
                <option selected>Seleccione...</option>
                <option>...</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label col-form-label-sm">Editorial</label>
            <div className="col-sm-10">
              <select id="" class="form-select form-select-sm"
                onChange={(e) => setEditorial(e.target.value)}
                value={editorial}>
                <option selected>Seleccione...</option>
                <option>...</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-md-12 mb-3">
          <label  className="form-label col-form-label-sm">Reseña</label>
          <textarea 
            class="form-control form-control-sm" 
            rows="2"
            onChange={(e) => setResena(e.target.value)}
            value={resena}></textarea>
        </div>
        <div className="col-md-6">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label col-form-label-sm">URL imagen</label>
            <div className="col-sm-10">
              <input 
              type="text" 
              className="form-control form-control-sm"
              onChange={(e) => setUrlimg(e.target.value)}
              value={urlimg}/>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label col-form-label-sm">Precio</label>
            <div className="col-sm-10">
            <input 
                  type="Number" 
                  className="form-control form-control-sm" 
                  onChange={(e) => setPrecio(e.target.value)}
                  value={precio}/>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label col-form-label-sm">Stock</label>
            <div className="col-sm-10">
            <input 
                  type="Number" 
                  className="form-control form-control-sm" 
                  onChange={(e) => setStock(e.target.value)}
                  value={stock}/>
            </div>
          </div>
        </div>                              
        <div class="col-6">
          <div class="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
              <label className="form-check-label" for="gridCheck">
                Destacado
              </label>
          </div>
        </div>
        <div className="col-6">
          <button type="submit" className="btn btn-primary mb-3">Agregar</button>
        </div>
      </form>
    </div>

  );
};
  
export default AdmControl;