import React from "react";

import * as BABYLON from "babylonjs";

//import { bindActionCreators } from "redux";
//import { connect } from "react-redux";
//import { requestApiSkills } from "../actions";
//import SkillsTable from "../components/skillsTable";

import createScene1 from "../components/babylonjs/scene1";
import createScene2 from "../components/babylonjs/scene2";
import createScene3 from "../components/babylonjs/scene3";
import createScene4 from "../components/babylonjs/scene4";
import createScene5 from "../components/babylonjs/scene5";
import createScene6 from "../components/babylonjs/scene6";
import createScene7 from "../components/babylonjs/scene7";

import "./babylonPage.css";

class BabylonPage extends React.Component {
    constructor(props) {
        super(props);

        // this.createScene = this.createScene.bind(this);
    }
    componentDidMount() {
        // this.props.requestApiSkills();
        var canvas = document.getElementById("renderCanvas"); // Get the canvas element
        var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

        /******* Add the create scene function ******/

        /******* End of the create scene function ******/

        var scene = createScene5(engine, canvas); //Call the createScene function
        // scene.clearColor = BABYLON.Color3.Black();
        scene.clearColor = new BABYLON.Color4(0.1, 0.1, 0.1, 1); //RGBA
        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function() {
            scene.render();
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function() {
            engine.resize();
        });
    }
    p;

    render() {
        return (
            <div>
                <canvas
                    id="renderCanvas"
                    className="babylon-canvas"
                    touch-action="none"
                ></canvas>
            </div>
        );

        /* if (this.props.data.success) {
            console.log(
                "BabylonPage.js :: render():: this.props.data.result:",
                //this.props.data.result
            );
            return <SkillsTable data={this.props.data.result}></SkillsTable>;
        } else {
            return <p>loading..........</p>;
        }*/
    }
}

export default BabylonPage;

/*
const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ requestApiSkills }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BabylonPage);
*/

/*
scene.clearColor = new BABYLON.Color3(0.5, 0.8, 0.5);
Or maybe you want to use one of our preset colors and avoid using the new keyword:
scene.clearColor = BABYLON.Color3.Blue();






*/
