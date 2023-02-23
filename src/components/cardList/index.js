import { Card, Col, Row, Image } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { closeCards, turnCard } from "../../redux/CardsSlice/cardsSlice";

function CardList() {

  const [disable,setDisable] = useState(0)


  const cards = useSelector((state) => state.cards.items);

  console.log(cards);

  const selected = useSelector((state) => state.cards.selected);
  console.log(selected);

  const dispatch = useDispatch();





  let onClickHandler =  (id) => {
    
    dispatch(turnCard(id));
    setDisable(2)
     setTimeout(() => {
      dispatch(closeCards());
      setDisable(0)
    }, 500);



    

  };  



  return (
    <div className="cardList">
      <Row gutter={4} className={`Row-${disable}`}>
        {cards.map((card) => (
          <Col className="gutter-row" span={4} key={card.id}>
            <Card key={card.id} onClick={() => onClickHandler(card.id)} className="card">
              {card.IsItTurned ? (
                <Image
                  src={card.img}
                  alt={card.name}
                  className="img"
                  preview={false}
                ></Image>
              ) : (
                <Image
                  src="https://www.keyifli.net/wp-content/uploads/2022/12/falda-soru-isareti-gormek.png"
                  preview={false}
                ></Image>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardList;
