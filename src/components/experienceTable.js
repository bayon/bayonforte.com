import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
        [theme.breakpoints.down("sm")]: {
            fontSize: ".7em"
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1em"
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "1.3em"
        }
    },
    tableCellImage: {
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
    }
}));

export default function ExperienceTable(props) {
    const classes = useStyles();
    //props.data.length ?
    // cut from tableContainer attributes:  component={Paper}
    return props.data.length ? (
        <TableContainer>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell} align="left">
                            Experience
                        </TableCell>
                        <TableCell
                            className={classes.tableCell}
                            align="center"
                        ></TableCell>
                        <TableCell
                            className={classes.tableCell}
                            align="right"
                        ></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell
                                className={classes.tableCell}
                                align="left"
                            >
                                {row.company}
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                align="left"
                            >
                                {row.position}
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                align="left"
                            >
                                {row.notes}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    ) : (
        <p>ooo</p>
    );
}
