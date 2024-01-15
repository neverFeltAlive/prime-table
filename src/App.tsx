import 'primereact/resources/themes/md-dark-indigo/theme.css';
import 'primeicons/primeicons.css';

import { PrimeReactProvider } from 'configs';

import { Default } from './pages';

function App() {
  return (
    <PrimeReactProvider>
      <Default />
    </PrimeReactProvider>
  );
}

export default App;
