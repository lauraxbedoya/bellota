import { useMemo, useState } from "react";
import Button from "../components/buttons";
import { StyledMainInput, StyledTable, StyledTableTd, StyledTableTh, StyledTableTr } from "../styles/styles/styled_components";
import useStyles from "./inventario-styles";


type InventarioType = {
  codigo: number | '',
  producto: string,
  instalacion: string,
  bodega: string,
  inventario: number | '',
  costoUnitario: number | '',
}

const Inventario = () => {
  const classes = useStyles();
  const [form, setForm] = useState<InventarioType>({ codigo: '', producto: '', instalacion: '', bodega: '', inventario: '', costoUnitario: '' });
  const [instalacionACostear, setInstalacionACostear] = useState('');
  const [inventarioBodegas, setInventarioBodegas] = useState<InventarioType[]>([
    { codigo: 155882, producto: 'PALA 5560-2', instalacion: 'IC', bodega: '01', inventario: 1000, costoUnitario: 41.70 },
    { codigo: 155882, producto: 'PALA 5560-2', instalacion: 'IC', bodega: 'EX', inventario: 500, costoUnitario: 41.70 },
    { codigo: 155882, producto: 'PALA 5560-2', instalacion: 'DI', bodega: 'DI', inventario: 1300, costoUnitario: 36.00 },
    { codigo: 155882, producto: 'PALA 5560-2', instalacion: 'DI', bodega: 'CD', inventario: 1000, costoUnitario: 36.00 },
    { codigo: 352425, producto: 'Cuchilla 25”', instalacion: 'IC', bodega: '01', inventario: 2000, costoUnitario: 8.3 },
    { codigo: 352425, producto: 'Cuchilla 25”', instalacion: 'IC', bodega: 'EX', inventario: 500, costoUnitario: 8.3 },
  ]);

  const costoMedio = useMemo(() => {
    const [inventarioValorado, inventario] = inventarioBodegas
      .filter((ib) => instalacionACostear ? ib.instalacion === instalacionACostear : true)
      .reduce((acc, val) => {
        return [
          acc[0] + ((+val.inventario) * (+val.costoUnitario)),
          acc[1] + (+val.inventario)
        ]
      }, [0, 0]);

    return inventarioValorado / inventario;
  }, [inventarioBodegas.length]);

  const onChangeFormulario = (ev: any) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value,
    });
  }

  const agregarCompra = () => {
    setInstalacionACostear(form.instalacion);
    setInventarioBodegas([...inventarioBodegas, form]);
    setForm({ codigo: 0, producto: '', instalacion: '', bodega: '', inventario: 0, costoUnitario: 0 });
  }

  return (
    <div className={classes.container}>
      <StyledTable>
        <thead>
          <StyledTableTh>Codigo</StyledTableTh>
          <StyledTableTh>Producto</StyledTableTh>
          <StyledTableTh>Instalacion</StyledTableTh>
          <StyledTableTh>Bodega</StyledTableTh>
          <StyledTableTh>Inventario</StyledTableTh>
          <StyledTableTh>Costo Unitario</StyledTableTh>
        </thead>

        <tbody>
          {inventarioBodegas.map(ib => (
            <StyledTableTr key={ib.codigo}>
              <StyledTableTd>{ib.codigo}</StyledTableTd>
              <StyledTableTd>{ib.producto}</StyledTableTd>
              <StyledTableTd>{ib.instalacion}</StyledTableTd>
              <StyledTableTd>{ib.bodega}</StyledTableTd>
              <StyledTableTd>{ib.inventario}</StyledTableTd>
              <StyledTableTd>{ib.costoUnitario}</StyledTableTd>
            </StyledTableTr>
          ))}
        </tbody>
      </StyledTable>

      <div className={classes.form}>
        <span className={classes.add_new_product}>Ingresar Nuevo Producto</span>
        <StyledMainInput
          placeholder="código"
          type='text'
          name="codigo"
          onChange={onChangeFormulario}
          value={form.codigo}
        />
        <StyledMainInput
          placeholder='Producto'
          type='text'
          name="producto"
          onChange={onChangeFormulario}
          value={form.producto}
        />
        <StyledMainInput
          placeholder='Instalación'
          type='text'
          name="instalacion"
          onChange={onChangeFormulario}
          value={form.instalacion}
        />
        <StyledMainInput
          placeholder='Bodega'
          type='text'
          name="bodega"
          onChange={onChangeFormulario}
          value={form.bodega}
        />
        <StyledMainInput
          placeholder='Inventario'
          type='text'
          name="inventario"
          onChange={onChangeFormulario}
          value={form.inventario}
        />
        <StyledMainInput
          placeholder='Costo Unitario'
          type='text'
          name="costoUnitario"
          onChange={onChangeFormulario}
          value={form.costoUnitario}
        />
        <Button
          onClick={agregarCompra}
          text="Crear"
          disabled={false}
        />
        <h3 className={classes.total_cost}>Costo Medio {instalacionACostear}: {costoMedio.toFixed(2)}</h3>
      </div>


    </div>
  );
};

export default Inventario;