import { BrowserRouter } from "react-router";
import Router from "./router/Router";
import { AuthProvider } from "./contexts/AuthContext/AuthProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Router />
          <Toaster />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
