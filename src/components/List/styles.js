import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    maxHeight: "95vh",
    padding: "25px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    maxHeight: "75vh",
    overflow: "hidden",
  },
}));
