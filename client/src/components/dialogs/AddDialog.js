import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Box,
  Snackbar
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { CourseContext } from "../../CourseContext";

const AddDialog = props => {
  const { addDialog, closeAddDialog, addCourse } = useContext(CourseContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Choose File");

  const handleSubmit = async () => {
    const data = {
      title,
      price,
      duration,
      description,
      file,
      fileName
    };

    const res = await addCourse(data);
    if (res === "err") return window.alert("Add New Course Failed");

    setTitle("");
    setPrice("");
    setDuration("");
    setDescription("");
    setFileName("");
    setFile(null);
    closeAddDialog();
  };

  return (
    <>
      <Dialog open={addDialog} onClose={closeAddDialog}>
        <DialogTitle>
          <center>Add Course</center>
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Course Title"
            variant="standard"
            margin="normal"
            fullWidth
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            label="Price"
            type="number"
            variant="standard"
            margin="normal"
            fullWidth
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <TextField
            label="Duration"
            variant="standard"
            margin="normal"
            fullWidth
            value={duration}
            onChange={e => setDuration(e.target.value)}
          />
          <TextField
            label="Description"
            variant="standard"
            multiline
            rows="3"
            margin="normal"
            fullWidth
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Box style={{ marginRight: "auto" }}>
            <IconButton component="label">
              <PhotoCamera />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={e => {
                  setFile(e.target.files[0]);
                  setFileName(e.target.files[0].name);
                }}
              />
            </IconButton>
            {fileName}
          </Box>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddDialog;