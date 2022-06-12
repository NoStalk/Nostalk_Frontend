import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";

function DropDown() {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          {" "}
          <Avatar alt="Remy Sharp" src="./logo192.png" />
          <h3 style={{ margin: "-2rem 0rem 0rem 4rem" }}>HI, ZEUS</h3>
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default DropDown;
