import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    if (id) {
      axios
        .get("http://localhost:3000/featuredMovieData/" + id)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {});
    }
  }, [id]);
  return (
    <>
      {data ? (
        <div
          style={{
            color: "white",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              padding: "1rem 3rem",
              fontSize: "2rem",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            {data?.title}
          </h1>
          <div
            style={{
              display: "flex",
              gap: "4rem",
              width: "100%",
              paddingLeft: "2rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <img style={{ height: "300px" }} src={data?.image} />
            </div>
            <div
              style={{
                maxWidth: "50%",
                width: "400px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Details;
