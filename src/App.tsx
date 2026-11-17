import { Header, TabMenuHeader } from './components/ds';
import { OrdenesYOperaciones } from './features/ordenes/OrdenesYOperaciones';

export default function App() {
  return (
    <>
      <Header role="Operativo" userInitials="RP" cartCount={0} />
      <OrdenesYOperaciones />
      <TabMenuHeader tabs={[{ id: 'principal', label: 'Ventana principal' }]} activeId="principal" />
    </>
  );
}
