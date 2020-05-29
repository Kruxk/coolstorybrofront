import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSinglePage } from "../../store/homePages/selectors";
import { Jumbotron } from "react-bootstrap";

function Homepage() {
  const { id } = useParams();
  const homepage = useSelector(selectSinglePage(id));
  console.log(id, homepage);
  return <Jumbotron></Jumbotron>;
}

export default Homepage;
