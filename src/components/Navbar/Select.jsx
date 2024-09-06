import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { useState } from "react";

function GenericSelect() {
    const [lang, setLang] = useState("uzbek");

    const handleChange = (e) => {
      setLang(e.target. value);
    }

  return (
    <FormControl fullWidth sx={{m:1, minWidth: 120, width: 150}}>
    <InputLabel id="demo-simple-select-label">Age</InputLabel>
    <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={lang}
        label="Language"
        onChange={handleChange}
        style={{width: "150px", height: "40px"}}
    >
        <MenuItem value={"uzbek"}>Uzbek</MenuItem>
        <MenuItem value={"arabic"}>Arabic</MenuItem>
        <MenuItem value={"turkish"}>Turkish</MenuItem>
        <MenuItem value={"english"}>English</MenuItem>
        <MenuItem value={"russian"}>Russian</MenuItem>
    </Select>
    </FormControl>
  )
}

export default GenericSelect

// 47:11