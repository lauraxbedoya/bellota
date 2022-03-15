import { useState } from "react";
import Button from "../components/buttons";
import { StyledMainInput, StyledTable, StyledTableTd, StyledTableTh, StyledTableTr } from "../styles/styles/styled_components";
import useStyles from "./formulario-styles";
import MockPrecios from './mockData';

type PreciosType = {
  listaPrecio: string,
  incremento: number | '',
}

const ListaPrecios = () => {
  const classes = useStyles();
  const [form, setForm] = useState<PreciosType>({ listaPrecio: "", incremento: '' });
  const [listaPrecios, setListaPrecios] = useState<any>(MockPrecios);

  const onChangeFormulario = (ev: any) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value,
    });
  };

  const incrementarPorcentaje = () => {
    let cont = 0;
    const nuevaLista = listaPrecios.map((lp: any) => {
      if (lp.lista_precios === form.listaPrecio) {
        lp.precio += (lp.precio / 100) * (+form.incremento);
        cont++;
      }
      return lp;
    });
    setListaPrecios(nuevaLista);
    alert(`Se han actualizado ${cont} precios de ${form.listaPrecio} `)
  };

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <StyledMainInput
          type=""
          name="listaPrecio"
          placeholder="Lista Precios"
          value={form.listaPrecio}
          onChange={onChangeFormulario}
        />

        <StyledMainInput
          type=""
          name="incremento"
          placeholder="Incremento en %"
          value={form.incremento}
          onChange={onChangeFormulario}
        />
        <Button
          onClick={incrementarPorcentaje}
          text="Enviar"
          disabled={false}
        />
      </div>

      <StyledTable>
        <thead>
          <StyledTableTh>Id Lista Precios</StyledTableTh>
          <StyledTableTh>Lista Precios</StyledTableTh>
          <StyledTableTh>Código Producto</StyledTableTh>
          <StyledTableTh>Precio</StyledTableTh>
        </thead>

        <tbody>
          {listaPrecios.map((lp: any) => (
            <StyledTableTr key={lp.id_lista_precios}>
              <StyledTableTd>{lp.id_lista_precios}</StyledTableTd>
              <StyledTableTd>{lp.lista_precios}</StyledTableTd>
              <StyledTableTd>{lp.cod_producto}</StyledTableTd>
              <StyledTableTd>{lp.precio}</StyledTableTd>
            </StyledTableTr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default ListaPrecios;