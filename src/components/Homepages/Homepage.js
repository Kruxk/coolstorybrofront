import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSinglePage } from "../../store/homePages/selectors";
import { Jumbotron } from "react-bootstrap";
import Loading from "../Loading";
import StyledDiv from "./StyledDiv";

function Homepage() {
  const { id } = useParams();
  const homepage = useSelector(selectSinglePage(id));

  return (
    <div>
      {!homepage ? (
        <Loading />
      ) : (
        <Jumbotron>
          <StyledDiv
            color={homepage.color}
            background={homepage.backgroundColor}
            title={homepage.title}
            key={homepage.id}
          />
        </Jumbotron>
      )}
    </div>
  );
}

export default Homepage;
