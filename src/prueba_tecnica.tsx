import { Link, Outlet } from "react-router-dom";
import useStyles from "./styles/styles/styles_material";

const PruebaTecnica = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container_layout}>
        <Link to="inventario" className={classes.link}>Inventario</Link>
        <Link to="formulario" className={classes.link}>Formulario</Link>
        <Link to="respuesta_api" className={classes.link}>Respuesta API</Link>
      </div>

      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
};

export default PruebaTecnica;