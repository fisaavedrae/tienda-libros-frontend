import '../assets/css/admin.css'
import jsonLibros from "../assets/libros.json";

const AdmVisor = () => {

  const libros = jsonLibros;
  console.log(libros);

  const editarLibro = () => {

  };

  const borrarLibro = () => {

  };


  return (
    <div className="container">

      <table className="table table-striped table-hover table-sm mt-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Titulo</th>
            <th scope="col">Autor</th>
            <th scope="col">Stock</th>
            <th scope="col">Accion</th>
            <th scope="col">Accion</th>            
          </tr>
        </thead>
        <tbody>
          {libros.map(libro => (
            <tr key={libro.id}>
            <th scope="row">{libro.id}</th>
            <td>{libro.titulo}</td>
            <td>{libro.autor}</td>
            <td>{libro.stock}</td>
            <td>
              <button 
                type="submit" 
                className="btn btn-secondary" 
                onClick={editarLibro}>Editar</button>
            </td>
            <td>
              <button 
                type="submit" 
                className="btn btn-danger" 
                onClick={borrarLibro}>Borrar</button>              
            </td>
          </tr>
          ))}                    
        </tbody>
      </table>
      
    </div>
  );
};

export default AdmVisor;