import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import firestore from "../firebaseinit";
import ImgSlider from "./ImgSlider";
import NewDisney from "./newDisney";
import Original from "./Original";
import Recommends from "./Recommends";
import Trending from "./trending";
import Viewrs from "./Viewrs";

interface Props {}

const Home = (props: Props) => {
  const [recommends, setrecommends] = useState<any[]>([]);
  const [newDisney, setnewDisney] = useState<any[]>([]);
  const [originals, setoriginals] = useState<any[]>([]);
  const [trending, settrending] = useState<any[]>([]);

  useEffect(() => {
    getCinema();
  }, []);

  const getCinema = async () => {
    const cinemaCol = collection(firestore, "Cinema");
    const productSnapshot = await getDocs(cinemaCol);
    var tempRecommends: any[] = [];
    var tempNewDisney: any[] = [];
    var tempOriginals: any[] = [];
    var tempTrending: any[] = [];

    productSnapshot.docs.map((doc) => {
      switch (doc.data().type) {
        case "recommends":
          tempRecommends.push({ id: doc.id, ...doc.data() });
          break;

        case "newDisney":
          tempNewDisney.push({ id: doc.id, ...doc.data() });
          break;

        case "originals":
          tempOriginals.push({ id: doc.id, ...doc.data() });
          break;

        case "trending":
          tempTrending.push({ id: doc.id, ...doc.data() });
          break;
      }
    });
    setrecommends(tempRecommends);
    setoriginals(tempOriginals);
    setnewDisney(tempNewDisney);
    settrending(tempTrending);
  };

  return (
    <Container>
      <ImgSlider />
      <Viewrs />
      <Recommends recommends={recommends} />
      <NewDisney newDisney={newDisney} />
      <Original original={originals} />
      <Trending trending={trending} />
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
