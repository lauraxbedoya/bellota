import { useEffect, useState } from "react";
import Button from "../components/buttons";
import { StyledTable, StyledTableTd, StyledTableTh, StyledTableTr } from "../styles/styles/styled_components";
import useStyles from "./res-styles";

const limite = 10;

const RespuestaAPI = () => {
  const classes = useStyles();
  const [usuarios, setUsuarios] = useState<any>([]);
  const [pag, setPag] = useState<number>(1);
  const [totalUsuarios, setTotalUsuarios] = useState<number>(0);

  const obtenerUsuario = async () => {
    try{
      const resStream = await fetch(`https://dummyapi.io/data/v1/user?page=${pag}&limit=${limite}`, {
        method: 'GET',
        headers: { 'app-id': '622f717a40df4c6dd967f1bf' }
      })
      const res = await resStream.json();
      setUsuarios(res.data);
      setTotalUsuarios(res.total)
    } catch(error) {
      console.error(error)
    }
  };

  const cambiarPagina = (sum: number) => setPag(pag + sum)

  useEffect(() => {
    obtenerUsuario();
  }, [pag])
  
  return(
    <div>
      <StyledTable>
        <thead>
          <StyledTableTh>Id</StyledTableTh>
          <StyledTableTh>Nombre</StyledTableTh>
          <StyledTableTh>Apellido</StyledTableTh>
          <StyledTableTh>Correo</StyledTableTh>
          <StyledTableTh>Titulo</StyledTableTh>
          <StyledTableTh>Foto</StyledTableTh>
        </thead>

        <tbody>
          {usuarios.map((u: any) => (
            <StyledTableTr key={u.id}>
              <StyledTableTd>{u.id}</StyledTableTd>
              <StyledTableTd>{u.firstName}</StyledTableTd>
              <StyledTableTd>{u.lastName}</StyledTableTd>
              <StyledTableTd>{u.email}</StyledTableTd>
              <StyledTableTd>{u.title}</StyledTableTd>
              <StyledTableTd>{u.picture}</StyledTableTd>
            </StyledTableTr>
          ))}
        </tbody>
      </StyledTable>
      <div className={classes.container_buttons}>
        <Button
          onClick={() => cambiarPagina(-1)}
          text="Anterior"
          disabled={pag === 1}
        />
        <Button
          onClick={() => cambiarPagina(1)}
          text="Siguiente"
          disabled={Math.floor(totalUsuarios / limite) === pag}
        />
      </div>
    </div>
  );
};

export default RespuestaAPI;