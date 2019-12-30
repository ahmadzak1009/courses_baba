import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
// import Liputan from "./components/Liputan";
import CourseList from "./components/courses/CourseList";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3} preventDuplicate>
        <Navbar />
      </SnackbarProvider>

      <Jumbotron />
      {/* <Liputan /> */}
      <CourseList />

      <Footer />
    </>
  );
}

export default App;
