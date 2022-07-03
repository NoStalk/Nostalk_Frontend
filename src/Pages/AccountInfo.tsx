import "../styles/AccountPageGlobal.css"
import { useRef, useState } from 'react'
import { Button, createTheme, TextField, ThemeProvider } from '@mui/material'
import { useBeforeunload } from 'react-beforeunload';



export default function AccountInfo() {

  const setIsEditingGlobal = (val: boolean) => {
    isEditingRef.current = val
    setIsEditing(val)
  }

  const [isEditing, setIsEditing] = useState(false)
  const isEditingRef = useRef(isEditing);




  useBeforeunload((event: any) => {
    if (isEditing) {
      console.log("hmm?")
      event.preventDefault();
      return "Noob"
    }
  });



  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  /**
   * Function to do all jobs before saving
   */
  const preSaveJobs = async () => {
    return true;
  }

  const toggleEditState = async () => {
    try {
      if (isEditing) {
        await preSaveJobs()
      }
      setIsEditingGlobal(!isEditing)
    }
    catch (e) {
      console.error(e)
    }
  }



  return (
    <ThemeProvider theme={darkTheme}>
      {/* <NavigationPrompt when={isEditing} /> */}

      <div style={{ display: "grid", placeItems: "center", width: "100%" }}>
        <Button
          variant={(isEditing) ? "outlined" : "contained"}
          onClick={toggleEditState}
        >
          {(isEditing) ? "Save" : "Edit"}
        </Button>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          defaultValue="Ronak Sanpui"
          disabled={!isEditing} />
      </div>
    </ThemeProvider >
  )
}
