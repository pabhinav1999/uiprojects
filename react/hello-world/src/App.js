import logo from './logo.svg';
import './App.css';
import FunctionalComponent1 from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import JSX from './components/JSX';
import FunctionalProps from './components/FunctionalProps';
import ClassProps from './components/ClassProps';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import StateEx from './components/StateEx';
import SetStateEx from './components/SetStateEx';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">

      {/* <FunctionalComponent1 /> */}

      {/* <ClassComponent></ClassComponent> */}

      {/* <JSX></JSX> */}

      {/* <FunctionalProps name="Abhinav"></FunctionalProps>
      <FunctionalProps name="Abhinav" place="Hyd">
        <p>This is children content </p>
      </FunctionalProps> */}

      {/* <ClassProps day="thursday" month="september"></ClassProps>
      <ClassProps></ClassProps> */}

      {/* <StateEx /> */}

      {/* <SetStateEx></SetStateEx> */}

      {/* <ConditionalRendering /> */}

      {/* <ListRendering /> */}

      {/* <FunctionClick /> */}

      {/* <ClassClick /> */}

      {/* <EventBinding /> */}

      <ParentComponent /> 

    </div>
  );
}

export default App;
