import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Box from '@material-ui/core/Box';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    table: {
        [theme.breakpoints.down("sm")]: {
            minWidth: 300
        },
        [theme.breakpoints.up("md")]: {
            minWidth: 450
        },
        [theme.breakpoints.up("lg")]: {
            minWidth: 650
        }
    },
    tableCell: {
        padding: "15px",
        [theme.breakpoints.down("sm")]: {
            fontSize: ".7em",
            padding: "3px"
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1em"
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "1.3em"
        },
        borderBottom: "none",
        width: "100%"
    },
    tableCellImage: {
        textAlign: "right",
        [theme.breakpoints.down("sm")]: {
            height: "50px",
            maxHeight: "50px",
            width: "auto"
        },
        [theme.breakpoints.up("md")]: {
            height: "75px",
            maxHeight: "75px",
            width: "auto"
        },
        [theme.breakpoints.up("lg")]: {
            height: "100px",
            maxHeight: "100px",
            width: "auto"
        }
    },
    textDescriptions: {
        padding: theme.spacing(3, 2),
        height: 50,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: ".7em"
        },
        [theme.breakpoints.up("md")]: {
            fontSize: ".8em"
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: ".9em"
        },
    }

}));

export default function ThisSiteTable(props) {
    const classes = useStyles();
    //props.data.length ?
    // cut from tableContainer attributes:  component={Paper}
    // className={classes.tableCell}
    return props.data.length ? (
        <TableContainer>


            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell className={classes.tableCell} align="left">
                            <h4>A simple example and explanation of the tech stack behind this web app.</h4>
                            <Typography variant="caption" display="block" gutterBottom>
                                As well as a few interesting links to my experience and skill set.
                                </Typography>

                        </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <React.Fragment>
                            <TableRow key={row.id + "_title"} style={{ border: "none" }}>
                                <Box className="tableRowBox" style={{ marginBottom: "5px", padding: "3px", width: "100%" }}>
                                    <TableCell
                                        className={classes.tableCell}
                                        align="left"
                                    >
                                        <h5 style={{ margin: "none", padding: "none" }}>{row.title}</h5>
                                    </TableCell>


                                </Box>
                            </TableRow>
                            <TableRow key={row.id} style={{ border: "none" }}>
                                <Box className="tableRowBox" style={{ marginBottom: "15px", padding: "3px", width: "100%" }}><Paper>

                                    <TableCell
                                        className={classes.tableCell}
                                        align="left"
                                    >
                                        <Box
                                            display="flex"
                                            alignItems="flex-start"
                                            p={1}
                                            m={1}
                                            bgcolor="background.paper"
                                            css={{ height: "auto" }}

                                        >
                                            <Typography variant="body2" className={classes.textDescriptions} display="block" gutterBottom>
                                                {row.description}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableCell}
                                        align="right"
                                    >
                                        <Box
                                            display="flex"
                                            alignItems="flex-start"
                                            p={1}
                                            m={1}
                                            bgcolor="background.paper"
                                            css={{ height: 70 }}

                                        >
                                            <img
                                                src={row.image}
                                                className={classes.tableCellImage}
                                            />

                                        </Box>

                                    </TableCell>
                                </Paper></Box>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>


        </TableContainer>
    ) : (
            <p>~</p>
        );
}
