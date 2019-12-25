import React, { useContext, useState, useEffect } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import CourseItem from "./CourseItem";
import { CourseContext } from "../../CourseContext";

const CourseList = props => {
  const { courses } = useContext(CourseContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (courses) {
      setLoading(false);
    }
  }, [courses]);

  return (
    <>
      <Container>
        <Typography variant="h5" style={{ padding: "30px 0px" }}>
          Semua <span style={{ color: "blue" }}>Kursus</span>
        </Typography>
        <Grid container spacing={3}>
          {loading ? (
            <center>Loading...</center>
          ) : courses.length > 0 ? (
            courses.map(course => <CourseItem key={course._id} course={course} />)
          ) : (
            <center>No Courses Found</center>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default CourseList;
