
import React, {useState} from 'react'
import './App.css';
import {CSSTransition} from "react-transition-group";

function App() {
    const [inProp, setInProp] = useState(false);

       return (
        <div>

            <CSSTransition
                in={inProp}
                timeout={200}
                classNames="my-node"
                unmountOnExit

            >
                <div>
                    {"I'll receive my-node-* classes"}
                </div>
            </CSSTransition>


            <button type="button" onClick={() => setInProp(true)}>
                Click to Enter
            </button>

            <button type="button" onClick={() => setInProp(false)}>
                Click to Exit
            </button>
        </div>
    );
}

export default App;
