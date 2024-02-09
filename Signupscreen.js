import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./Signupscreen.css";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  requiredStar: {
    color: "red",
    marginLeft: theme.spacing(0.5), // Adjust the spacing as needed
  },
}));

function Signupscreen() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className="signupscreen-body">
      <div className="signupscreen-innerbody">
        <h1>
          Create your <br />
          PopX account
        </h1>

        <Box
          className="box"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label={
              <>
                Full Name
                <span className={classes.requiredStar}>*</span>
              </>
            }
            color="grey"
            fullWidth
            value="Marry Doe"
            InputLabelProps={{
              style: { color: "rgba(102, 29, 161, 0.792)", fontWeight: "bold" },
            }}
            focused
            disabled
          />
          <TextField
            label={
              <>
                Phone number
                <span className={classes.requiredStar}>*</span>
              </>
            }
            color="grey"
            value="Marry Doe"
            InputLabelProps={{
              style: { color: "rgba(102, 29, 161, 0.792)", fontWeight: "bold" },
            }}
            focused
            disabled
          />
          <TextField
            label={
              <>
                Email Address
                <span className={classes.requiredStar}>*</span>
              </>
            }
            color="grey"
            value="Marry Doe"
            InputLabelProps={{
              style: { color: "rgba(102, 29, 161, 0.792)", fontWeight: "bold" },
            }}
            focused
            disabled
          />
          <TextField
            label={
              <>
                Password
                <span id={classes.requiredStar}>*</span>
              </>
            }
            color="grey"
            value="Marry Doe"
            disabled
            InputLabelProps={{
              style: { color: "rgba(102, 29, 161, 0.792)", fontWeight: "bold" },
            }}
            focused
          />
          <TextField
            label="Company name"
            color="grey"
            InputLabelProps={{
              style: { color: "rgba(102, 29, 161, 0.792)", fontWeight: "bold" },
            }}
            placeholder="Enter email address"
            focused
            value="Marry Doe"
            disabled
          />
        </Box>

        <FormControl
          style={{
            marginLeft: "15px",
            marginTop: "10px",
          }}
        >
          <FormLabel id="demo-form-control-label-placement">
            {
              <>
                Are you an Agency?
                <span className={classes.requiredStar}>*</span>
              </>
            }
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value="Yes"
              control={<Radio />}
              label="Yes"
              checked
            />
            <FormControlLabel
              value="No"
              control={<Radio />}
              label="No"
              disabled
            />
          </RadioGroup>
        </FormControl>
        <button
          className="signup-button"
          onClick={() => {
            navigate("/profilescreen");
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Signupscreen;
