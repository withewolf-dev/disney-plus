import { collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";
import firestore from "../firebaseinit";

interface Props {}

const AddCinema = (props: Props) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [titleImg, settitleImg] = useState("");
  const [subTitle, setsubTitle] = useState("");
  const [backgroundImg, setbackgroundImg] = useState("");
  const [cardImg, setcardImg] = useState("");
  const [type, settype] = useState("");

  const onSubmit = async () => {
    try {
      const newDocRef = doc(collection(firestore, "Cinema"));
      await setDoc(newDocRef, {
        title,
        description,
        titleImg,
        subTitle,
        backgroundImg,
        type,
        cardImg,
      });
      settitle("");
      setdescription("");
      settitleImg("");
      setsubTitle("");
      setbackgroundImg("");
      setcardImg("");
      settype("");
      alert("Submited");
    } catch (e) {
      alert("Error adding document: ");
    }
  };

  return (
    <Container>
      <Input
        value={backgroundImg}
        type={"url"}
        placeholder="background Img url"
        onChange={(e) => {
          setbackgroundImg(e.target.value);
        }}
      />
      <Input
        value={cardImg}
        type={"url"}
        placeholder="Card Img url"
        onChange={(e) => {
          setcardImg(e.target.value);
        }}
      />
      <Input
        value={description}
        type={"text"}
        placeholder="description"
        onChange={(e) => {
          setdescription(e.target.value);
        }}
      />

      <Input
        value={subTitle}
        type={"text"}
        placeholder="sub title"
        onChange={(e) => {
          setsubTitle(e.target.value);
        }}
      />
      <Input
        value={title}
        type={"text"}
        placeholder="title"
        onChange={(e) => {
          settitle(e.target.value);
        }}
      />

      <Input
        value={titleImg}
        type={"url"}
        placeholder="Title Img url"
        onChange={(e) => {
          settitleImg(e.target.value);
        }}
      />
      <Select
        value={type}
        onChange={(e) => {
          settype(e.target.value);
        }}
      >
        <option hidden>choose type</option>

        <option value={"newDisney"}>New Disney</option>
        <option value={"originals"}>Originals</option>
        <option value="recommends">Recommends</option>
        <option value="trending">Trending</option>
      </Select>
      <Submit onClick={onSubmit}>submit</Submit>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Input = styled.input`
  height: 40px;
  width: 500px;
  margin: 10px 10px;
  padding: 5px 5px;
`;
const Select = styled.select`
  height: 40px;
  width: 500px;
  margin: 10px 10px;
  padding: 5px 5px;
`;
const Submit = styled.button`
  width: 200px;
  height: 40px;
  background-color: whitesmoke;
  color: black;
  cursor: pointer;
`;
export default AddCinema;
