import "bootstrap/dist/css/bootstrap.min.css";
import RoutesApp from "./navigation/routes/RoutesApp";
import LoginProvider from "./providers/login-provider/LoginProvider";

const App = () => {
  return (
    <>
      <LoginProvider>
        <RoutesApp />
      </LoginProvider>
    </>
  );
};

export default App;
