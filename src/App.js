import {
  Header,
  AbautMe,
  Information,
  Works,
  Contact,
  Loader,
} from "./components";
import { motion } from "framer-motion";
import "./styles/App.css";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Header />
        <main>
          <AbautMe />
          <Information />
          <Works />
          <Contact />
          <footer>
            <h4>Gracias por la visita.</h4>
            <p>--Diego Nieves--</p>
          </footer>
        </main>
      </motion.div>
    </>
  );
}

export default App;
