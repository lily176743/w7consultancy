// project import
import Routes from "./routes";
import ThemeCustomization from './themes';
import Locales from './components/Locales';
import ScrollTop from './components/ScrollTop';
import Snackbar from './components/Snackbar';
import Notistack from './components/Notistack';

// auth-provider
import { JWTProvider as AuthProvider } from './contexts/JWTContext';

function App() {
  return (
    <ThemeCustomization>
      <Locales>
        <ScrollTop>
          <AuthProvider>
            <>
              <Notistack>
                <Routes />
                <Snackbar />
              </Notistack>
            </>
          </AuthProvider>
        </ScrollTop>
      </Locales>
    </ ThemeCustomization>
  );
}

export default App;
