import React, { useState } from 'react';
import {Paper, FormControl, TextField, Button, Typography} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import standardViewStyles from "./assets/jss/standardViewStyles";

const useStyles = makeStyles(standardViewStyles);

function App() {
	const classes = useStyles();

  const [variantInput, setVariantInput] = useState("");
  const [variantInputIsPhunk, setVariantInputIsPhunk] = useState(false);
  const [imgURL, setIMGURL] = useState("");
  const [showNFT, setShowNFT] = useState(false);

  const handleVariantInput = (event) => {
      (event.target.value > 0 && event.target.value < 10000) ? setVariantInputIsPhunk(true) : setVariantInputIsPhunk(false);  

      setVariantInput(event.target.value);
  };

  const ClickOpen = () => {
    let cleanNumber = "0001";

    switch (variantInput.length) {
      case 1:
        cleanNumber = `000${variantInput}`
        break;
      case 2:
        cleanNumber = `00${variantInput}`
        break;
      case 3:
        cleanNumber = `0${variantInput}`
        break;
      case 4:
        cleanNumber = `${variantInput}`
        break;
      default:
        break;
    }

    const imgURL = `https://nll-backend-9qj3q.ondigitalocean.app/static/phunk${cleanNumber}.png`;

    setIMGURL(imgURL);
    setShowNFT(true);
  };
  
  return (
    <>
        <Paper className={classes.lowerPaper}>
            <FormControl className={classes.spacer}>
                <TextField 
                    id="phunk-variant" 
                    label="Enter Phunk Number"
                    variant="filled"
                    color="secondary"
                    value={variantInput} 
                    onChange={handleVariantInput}
                    required={true}
                />
            </FormControl>
            <br/>
            <Button className={classes.spacer} color="primary" variant="contained" disabled={!variantInputIsPhunk} onClick={ClickOpen}>Open</Button>        
        </Paper>
        {showNFT && <Paper className={classes.lowerPaper}>
            <Paper className={classes.previewCard}>
                <img className={classes.wideIMG} alt={"alt"} src={imgURL}></img>
            </Paper>
        </Paper>}
    </>
  );
}

export default App;
