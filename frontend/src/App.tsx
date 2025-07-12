import { BrowserRouter } from "react-router";
import Router from "./router/Router";
import { AuthProvider } from "./contexts/AuthContext/AuthProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
