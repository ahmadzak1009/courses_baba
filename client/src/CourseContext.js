import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CourseContext = createContext();

export const CourseProvider = props => {
  const [courses, setCourses] = useState(null);
  const token = localStorage.getItem("token");

  // Get Course
  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get("/courses", { cancelToken: source.token })
      .then(res => res.data)
      .then(data => setCourses(data))
      .catch(error => {
        console.log(error);
        if (axios.isCancel(error)) {
          console.log("cleanup");
        } else {
          throw error;
        }
      });

    return () => source.cancel();
  }, [setCourses]);

  // Add Course
  const [addDialog, setAddDialog] = useState(false);
  const openAddDialog = () => setAddDialog(true);
  const closeAddDialog = () => setAddDialog(false);

  const addCourse = async ({ title, price, duration, description, file, fileName }) => {
    const newCourse = new FormData();
    newCourse.append("title", title);
    newCourse.append("price", price);
    newCourse.append("duration", duration);
    newCourse.append("description", description);
    newCourse.append("file", file);
    newCourse.append("image", fileName);

    try {
      const res = await axios.post("/courses", newCourse, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" }
      });
      const data = await res.data;

      setCourses(prevCourses => [data, ...prevCourses]);
      return "ok";
    } catch (err) {
      console.log(err);
      return "err";
    }
  };

  return (
    <CourseContext.Provider
      value={{ courses, setCourses, addDialog, openAddDialog, closeAddDialog, addCourse }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};
