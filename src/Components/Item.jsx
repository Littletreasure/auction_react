import React, { Component } from "react";
import { auctionItems } from "../data/data";
import { Link } from "@reach/router";
import "../css/styles.css";

class Item extends Component {
  state = {
    lotNo: "",
    name: "",
    image: "",
    description: "",
    bid: "",
    loading: true,
  };

  componentDidMount() {
    const { num } = this.props;
    const auctionItem = auctionItems.filter((item) => item.lotNo == num);
    this.setState({
      lotNo: auctionItem[0].lotNo,
      name: auctionItem[0].name,
      image: auctionItem[0].image,
      description: auctionItem[0].description,
      bid: auctionItem[0].bid,
      loading: false,
    });
  }
  render() {
    const { lotNo, name, image, description, bid, loading } = this.state;

    return (
      <div>
        {loading ? (
          <p>loading ...</p>
        ) : (
          <div className="itemMain">
            <h2>{name}</h2>
            <img
              className="mainImage"
              src={require(`../images/${image}.jpg`).default}
              alt={name}
            />
            <p>Lot No: {lotNo}</p>
            <p>{description}</p>
            <p>Current bid: {bid}</p>
            <Link className="back" to="/">
              Back
            </Link>
          </div>
        )}
      </div>
    );
  }
}
export default Item;
