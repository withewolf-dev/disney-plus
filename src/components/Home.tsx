import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import styled from "styled-components";
import firestore from "../firebaseinit";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import Viewrs from "./Viewrs";

interface Props {}

const Home = (props: Props) => {
  useEffect(() => {
    getCinema();
  }, []);

  let recommends: any[] = [];
  let newDisneys: any[] = [];
  let originals: any[] = [];
  let trending: any[] = [];

  const getCinema = async () => {
    const cinemaCol = collection(firestore, "Cinema");
    const productSnapshot = await getDocs(cinemaCol);
    productSnapshot.docs.map((doc) => {
      switch (doc.data().type) {
        case "recommends":
          recommends = [...recommends, { id: doc.id, ...doc.data() }];
          break;

        case "newDisney":
          newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
          break;

        case "originals":
          originals = [...originals, { id: doc.id, ...doc.data() }];
          break;

        case "trending":
          trending = [...trending, { id: doc.id, ...doc.data() }];
          break;
      }
    });
  };

  console.log(recommends);

  return (
    <Container>
      <ImgSlider />
      <Viewrs />
      <Recommends recommends={recommends} />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  background: url("/images/home-background.png") center center / cover no-repeat
    fixed;
  /* &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  } */
`;
export default Home;
