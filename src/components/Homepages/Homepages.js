import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectHomepages,
  selectHomePagesloading,
} from "../../store/homePages/selectors";
import { fetchHomepages } from "../../store/homePages/actions";
import { Jumbotron } from "react-bootstrap";
import Loading from "../Loading";
import { Link } from "react-router-dom";

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
        <Jumbotron>
          {homepages.map((homepage) => (
            <div
              style={{
                color: homepage.color,
                background: homepage.backgroundColor,
                width: "500px",
                margin: "10px auto 10px auto",
                textAlign: "left",
                padding: "15px",
              }}
              key={homepage.id}
            >
              <h3>{homepage.title}</h3>
              <p>{homepage.description}</p>
              <Link to={`/homepages/${homepage.id}`}>
                <button>Visit page</button>
              </Link>
            </div>
          ))}
        </Jumbotron>
      )}
    </div>
  );
}

export default Homepages;
