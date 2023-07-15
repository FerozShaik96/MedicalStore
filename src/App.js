import "bootstrap/dist/css/bootstrap.min.css";
import MedicoFrom from "./MedicoForm/MedicoForm";
import NavBar from "./Nav Bar/NavBar";
import MedContextProvider from "./Store/MedStore/MedContextPRovider";
function App() {
  return (
    <MedContextProvider>
      <NavBar />
      <MedicoFrom />
    </MedContextProvider>
  );
}

export default App;
