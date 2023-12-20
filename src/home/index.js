import React, { Component } from "react";
import styled, { css } from "styled-components";

function Homepage(props) {
  return (
    <>
  );
}

const Rect = styled.div`
  height: 89px;
  background-color: rgba(178,145,186,0.63);
  shadow-radius: 0px;
  overflow: scroll;
  flex-direction: row;
  display: flex;
  box-shadow: 3px 3px 0px  0.28px rgba(0,0,0,1) ;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Image = styled.img`
  width: 100%;
  height: 68px;
  margin-left: 51px;
  margin-top: 14px;
  object-fit: contain;
`;

const Home = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  transform: rotate(1.00deg);
  font-size: 28px;
  right: 206px;
`;

const Series = styled.span`
  font-family: Roboto;
  top: 1px;
  left: 107px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  transform: rotate(1.00deg);
  font-size: 28px;
  right: 99px;
`;

const Fixtures = styled.span`
  font-family: Roboto;
  top: 1px;
  left: 206px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  transform: rotate(1.00deg);
  font-size: 28px;
  right: 0px;
`;

const HomeStack = styled.div`
  top: 60px;
  left: 717px;
  height: 20px;
  position: absolute;
  right: 326px;
`;

const StatsCorner = styled.span`
  font-family: Roboto;
  top: 61px;
  left: 1041px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  transform: rotate(1.00deg);
  font-size: 28px;
  right: 161px;
`;

const ImageFiller = styled.div`
  flex: 1 1 0%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Button = styled.div`
  height: 420px;
  background-color: rgba(234,228,228,1);
  flex-direction: column;
  display: flex;
  margin-top: 47px;
  margin-left: 11px;
  margin-right: 11px;
  border: none;
`;

const NewsHeading = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 32px;
  flex: 1 1 0%;
  margin-right: 258px;
  display: flex;
  flex-direction: column;
`;

const LoremIpsum6 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 25px;
  text-decoration-line: underline;
  flex: 1 1 0%;
  margin-left: 258px;
  display: flex;
  flex-direction: column;
`;

const NewsHeadingRow = styled.div`
  height: 53px;
  flex-direction: row;
  display: flex;
  margin-top: 33px;
  margin-left: 16px;
  margin-right: 33px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 40px;
`;

const LoremIpsum3 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 28px;
  margin-top: 36px;
`;

const LoremIpsumColumn = styled.div`
  width: 750px;
  flex-direction: column;
  display: flex;
  margin-left: 554px;
`;

const Image2 = styled.img`
  height: 300px;
  opacity: 0.5;
  flex: 1 1 0%;
  margin-right: 784px;
  margin-left: -1304px;
  width: 100%;
  object-fit: contain;
  display: flex;
  flex-direction: column;
`;

const LoremIpsumColumnRow = styled.div`
  height: 313px;
  flex-direction: row;
  display: flex;
  margin-top: 12px;
  margin-left: 16px;
  margin-right: 23px;
`;

export default Homepage;
