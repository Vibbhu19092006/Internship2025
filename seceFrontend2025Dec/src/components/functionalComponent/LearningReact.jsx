import { Routes, Route } from "react-router-dom";
import UseState from "./Hooks/UseState.jsx";
import UseEffect from "./Hooks/UseEffect.jsx";
import UseEffectAPI from "./Hooks/UseEffectAPI.jsx";
import UseRef from "./Hooks/UseRef.jsx";
import UseMemo from "./Hooks/UseMemo.jsx";
import UseCallback from "./Hooks/UseCallback.jsx";

const LearningReact = () => {
  return (
    <div>
      <h1>Learning React Hooks</h1>

      <Routes>
        <Route path="usestate" element={<UseState />} />
        <Route path="useeffect" element={<UseEffect />} />
        <Route path="useeffect-api" element={<UseEffectAPI />} />
        <Route path="useref" element={<UseRef />} />
        <Route path="usememo" element={<UseMemo />} />
        <Route path="usecallback" element={<UseCallback />} />
      </Routes>
    </div>
  );
};

export default LearningReact;
