import "./App.css";
import { BellRing, Ban } from "lucide-react";

import Alert from "./components/ui/alert/Alert";
function App() {
  return (
    <>
      <div style={{ margin: "2rem" }}>
        <Alert
          type="alert-error"
          icon={<BellRing size={20} />}
          title="Something went wrong"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error commodi minus ea iusto quidem obcaecati laudantium, dolor cum incidunt? Consequuntur."
        />
        <Alert
          type="alert-info"
          icon={<Ban size={20} />}
          title="Something went wrong"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error commodi minus ea iusto quidem obcaecati laudantium, dolor cum incidunt? Consequuntur."
        />
        <Alert
          type="alert-warning"
          icon={<BellRing size={20} />}
          title="Something went wrong"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error commodi minus ea iusto quidem obcaecati laudantium, dolor cum incidunt? Consequuntur."
          }
        />
        <Alert
          type="alert-default"
          icon={<Ban size={20} />}
          title="Something went wrong"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error commodi minus ea iusto quidem obcaecati laudantium, dolor cum incidunt? Consequuntur."
        />
        <Alert
          type="alert-success"
          icon={<BellRing size={20} />}
          title="Something went wrong"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error commodi minus ea iusto quidem obcaecati laudantium, dolor cum incidunt? Consequuntur."
        />
      </div>
    </>
  );
}

export default App;
