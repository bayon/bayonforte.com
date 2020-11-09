import React from "react";
import Typical from "react-typical";

function Typing() {
    const sayingStart =
        "Yesterday I was clever, so I wanted to change the world.";
    const sayingFinish =
        "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself. ― Rumi";

    return (
        <div className="Typing">
            <Typical
                steps={[sayingStart, 500, sayingFinish, 250]}
                loop={Infinity}
                wrapper="h3"
            />
        </div>
    );
}

export default Typing;
