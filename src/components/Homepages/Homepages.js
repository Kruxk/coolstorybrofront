import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectHomepages,
  selectHomePagesloading,
} from "../../store/homePages/selectors";
import { fetchHomepages } from "../../store/homePages/actions";
import { Jumbotron } from "react-bootstrap";
import Loading from "../Loading";
import StyledDiv from "./StyledDiv";

function Homepages() {
  const isLoading = useSelector(selectHomePagesloading);
  const homepages = useSelector(selectHomepages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomepages);
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Jumbotron style={{ background: "#bca7b5" }}>
          {homepages.map((homepage) => (
            <StyledDiv
              color={homepage.color}
              background={homepage.backgroundColor}
              width={"500px"}
              title={homepage.title}
              description={homepage.description}
              key={homepage.id}
              id={homepage.id}
            />
          ))}
        </Jumbotron>
      )}
    </div>
  );
}

export default Homepages;
