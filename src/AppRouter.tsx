import { Routes, Route } from 'react-router-dom'
import Formulario from './formulario/formulario';
import Inventario from './programacion/inventario';
import PruebaTecnica from './prueba_tecnica';
import RespuestaAPI from './respuestaAPI/respuestaAPI';

const AppRouter = () => {
  return(
    <Routes>
      <Route path="/" element={ <PruebaTecnica /> }>
        <Route path="inventario" element={ <Inventario /> }/>
        <Route path="formulario" element={ <Formulario /> }/>
        <Route path="respuesta_api" element={ <RespuestaAPI /> }/>
      </Route>
    </Routes>
  )
};

export default AppRouter;