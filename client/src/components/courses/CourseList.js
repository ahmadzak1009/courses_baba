import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import CourseItem from "./CourseItem";

const CourseList = props => {
  return (
    <>
      <Container>
        <Typography variant="h5" style={{ padding: "30px 0px" }}>
          Semua <span style={{ color: "blue" }}>Kursus</span>
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3, 4, 5].map(course => (
            <CourseItem key={course} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CourseList;
