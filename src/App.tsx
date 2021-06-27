import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/GlobalStyles";
import { useTheme } from './styles/Hook/theme';

import Home from "./pages/Home";
import NewRoom from './pages/NewRoom.tsx';
import Room from './pages/Room';
import RoomAdmin from './pages/RoomAdmin';


function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={ theme }>
      <AuthContextProvider>
      <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={RoomAdmin} />
          </Switch>
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
