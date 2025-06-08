import { AuthProvider } from "./context/userContext";
import LoginPage from "./LoginPage";

function App() {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
}

export default App;
