import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typing from "./animations/typing";
import ParticlesBg from "particles-bg";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {"Copyright © "}
            <Link color="inherit" href="https://bayonforte.com/">
                bayonforte.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        maxHeight: "30vh",
        padding: "0px 0px",
        margin: "0px 0px 0px 0px",
        minHeight: "100vh"
    },
    main: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(2)
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto"

        /* backgroundColor:
            theme.palette.type === "dark"
                ? theme.palette.grey[800]
                : theme.palette.grey[200]*/
    }
}));

export default function Footer() {
    const classes = useStyles();
    let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        // body: "./img/icon.png", // Whether to render pictures
        // rotate: [0, 20],
        alpha: [0.6, 0],
        scale: [1, 0.1],
        position: "center", // all or center or {x:1,y:1,width:100,height:100}
        color: ["random", "#ff0000"],
        cross: "dead", // cross or bround
        random: 15, // or null,
        g: 5, // gravity
        // f: [2, -1], // force
        onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(
                particle.p.x,
                particle.p.y,
                particle.radius * 2,
                particle.radius * 2
            );
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
        }
    };
    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <div
                    style={{
                        height: "100px",
                        maxHeight: "100px",
                        overflow: "hidden !important",
                        margin: "0px 0px"
                    }}
                >
                    <ParticlesBg type="circle" config={config} bg={false} />
                </div>

                <Container maxWidth="lg">
                    <div style={{ fontWeight: "normal", color: "#444" }}>
                        <Typing></Typing>
                    </div>

                    <Copyright />

                </Container>
            </footer>
        </div>
    );
}
