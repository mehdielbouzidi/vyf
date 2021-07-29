import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { Link, Redirect, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Grid } from "@material-ui/core";
import myContext, { setFilter, setSelectedRow, setRows } from "../MyContext.js";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: "1 1 100%",
    paddingLeft: 0,
    fontSize: 18,
  },

  icon: {
    marginRight: 10,
    marginLeft: 10,
  },

  // root: {
  //   transition: theme.transitions.create("padding", {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   paddingTop: 30,
  //   paddingBottom: 30,
  //   [theme.breakpoints.up("sm")]: {
  //     paddingTop: 10,
  //   },
  // },

  content: {
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 230,
    },
  },
}));

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "Code",
  },
  {
    id: "kostenplaats",
    numeric: true,
    disablePadding: false,
    label: "Kostenplaats",
  },
  {
    id: "grootboek",
    numeric: true,
    disablePadding: false,
    label: "Grootboek",
  },
  {
    id: "omschrijving",
    numeric: true,
    disablePadding: false,
    label: "Omschrijving",
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox color="primary" indeterminate={numSelected > 0 && numSelected < rowCount} checked={rowCount > 0 && numSelected === rowCount} onChange={onSelectAllClick} />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align="left" padding={headCell.disablePadding ? "none" : "normal"} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel active={orderBy === headCell.id} direction={orderBy === headCell.id ? order : "asc"} onClick={createSortHandler(headCell.id)}>
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  const { idSelected } = props;
  const classes = useStyles();

  function removeRow() {
    axios
      .delete("/delete/" + idSelected)
      .then((res) => {
        console.log(numSelected);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <Toolbar className={classes.root}>
      <Grid
        justify="space-between" // Add it here :)
        container
        style={{ margin: "auto", verticalAlign: "bottom" }}
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h6" id="tableTitle" component="div">
            Opleidingstype
          </Typography>
        </Grid>
        <Grid item xs></Grid>
        <Grid item>
          {numSelected > 0 ? (
            <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} size="small" onClick={removeRow}>
              Verwijderen
            </Button>
          ) : (
            <Button variant="contained" disabled color="secondary" startIcon={<DeleteIcon />} component={Link} to={"/aanmaken"} size="small">
              Verwijderen
            </Button>
          )}

          {numSelected == 1 ? (
            <Button variant="contained" color="primary" startIcon={<CreateIcon />} component={Link} to={"/wijzigen"} className={classes.icon} size="small">
              Wijzigen
            </Button>
          ) : (
            <Button variant="contained" disabled color="primary" startIcon={<CreateIcon />} component={Link} to={"/wijzigen"} className={classes.icon} size="small">
              Wijzigen
            </Button>
          )}

          <Button variant="contained" color="primary" startIcon={<AddIcon />} component={Link} to={"/aanmaken"} size="small">
            Aanmaken
          </Button>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  idSelected: PropTypes.array,
};

export default function EnhancedTable() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filter, dispatch] = useContext(myContext);

  const initialRows = useRef();

  useEffect(() => {
    const keyword = filter.filter.expression;
    const contains = filter.filter.contains;
    let results = "";

    if (keyword !== "") {
      switch (contains) {
        case "contains":
          results = rows.filter((row) => {
            return row.omschrijving.toLowerCase().includes(keyword.toLowerCase());
          });
          break;
        case "startsWith":
          results = rows.filter((row) => {
            return row.omschrijving.toLowerCase().startsWith(keyword.toLowerCase());
          });
          break;
        default:
          results = rows.filter((row) => {
            return row.omschrijving.toLowerCase().includes(keyword.toLowerCase());
          });
          break;
      }
      setRows(results);
    } else if (initialRows.current !== undefined) {
      setRows(initialRows.current);
    }
  }, [filter]);

  useEffect(() => {
    axios
      .get("/rest")
      .then((res) => {
        const opleidingen = res.data.map((opleiding) => {
          const opleidingstypes = {};
          Object.keys(opleiding).forEach((key) => {
            opleidingstypes[key] = key === "id" ? opleiding[key] : opleiding[key].trim();
          });
          return opleidingstypes;
        });
        setRows(opleidingen);
        initialRows.current = opleidingen;
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, row) => {
    dispatch(setSelectedRow(row));
    const selectedIndex = selected.indexOf(row.id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row.id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  return (
    <Box sx={{ width: "100%" }} className={classes.content}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} idSelected={selected} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="small">
            <EnhancedTableHead numSelected={selected.length} order={order} orderBy={orderBy} onSelectAllClick={handleSelectAllClick} onRequestSort={handleRequestSort} rowCount={rows.length} />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover onClick={(event) => handleClick(event, row)} role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={row.id} selected={isItemSelected}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.kostenplaats}</TableCell>
                      <TableCell align="left">{row.grootboek}</TableCell>
                      <TableCell align="left">{row.omschrijving}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination rowsPerPageOptions={[10, 20, 30]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage} />
      </Paper>
    </Box>
  );
}
