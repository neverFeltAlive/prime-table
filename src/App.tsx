import './App.scss';
import 'primereact/resources/themes/md-dark-indigo/theme.css';

import { Table, Title } from 'components';
import { PrimeReactProvider } from 'primereact/api';
function App() {
  return (
    <PrimeReactProvider>
      <Title />
      <Table />
    </PrimeReactProvider>
  );
}

export default App;
