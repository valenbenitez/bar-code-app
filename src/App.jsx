import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Auth from "./screens/Auth/Auth";
import Dashboard from "./screens/Dashboard/Dashboard";
import { AuthProvider } from "./hooks/AuthContext";
import RegisterProduct from "./screens/RegisterProduct/RegisterProduct";
import RegisterSell from "./screens/RegisterSell/RegisterSell";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register-product" element={<RegisterProduct />} />
        <Route path="/register-sell" element={<RegisterSell />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
