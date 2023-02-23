import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {ArrowRightOutlined} from "@ant-design/icons"
import "./styles.css"
import { Button } from "antd";
import { mixAgain } from "../../redux/CardsSlice/cardsSlice";

function Informations() {
    const dispatch = useDispatch()

  const score = useSelector((state) => state.cards.score);
  return (
    <div>
      <h1 className="score"> Score  <ArrowRightOutlined /> {score}</h1>

      <Button onClick={()=> dispatch(mixAgain())} className="mix-button">mix again</Button>
    </div>
  );
}

export default Informations;
