import "bootstrap/dist/css/bootstrap.min.css";
import RoutesApp from "./navigation/routes/RoutesApp";
import CustomerBagProvider from "./providers/customer-bag-provider/CustomerBagProvider";
import LoginProvider from "./providers/login-provider/LoginProvider";

const App = () => {
  return (
    <>
      <LoginProvider>
        <CustomerBagProvider>
          <RoutesApp />
        </CustomerBagProvider>
      </LoginProvider>
    </>
  );
};

export default App;
