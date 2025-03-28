import { Toaster } from "react-hot-toast"
import RouterConfig from "../Configs/Router/RouterConfigs"

function App() {

    return (
      <div className="font-iranSans">
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        <RouterConfig />
        
   </div>
    )
  }
  
  export default App