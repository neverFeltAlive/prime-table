import 'primereact/resources/themes/md-dark-indigo/theme.css';

import { PrimeReactProvider } from 'primereact/api';

import { Default } from './pages';
function App() {
  return (
    <PrimeReactProvider>
      <Default />
    </PrimeReactProvider>
  );
}

export default App;
