import React, { Component } from "react";
import { auctionItems } from "../data/data";
import { Link } from "@reach/router";
import "../css/styles.css";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <p>Welcome to the Southport Salvation Army Lockdown Silent Auction.</p>
        <p>
          These are the lots available in the auction. Please click on the photo
          for more information.
        </p>
        <p>
          To bid on an item please send a private message on{" "}
          <a
            href="https://www.facebook.com/SouthportSA"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook
          </a>{" "}
          stating name, contact number, lot number, description and bid amount.
        </p>
        <p>Closing date for bids is 2nd December 12pm.</p>
        <div className="lots">
          {auctionItems.map((item) => {
            return (
              <Link
                className="singleItem"
                to={`/item/${item.lotNo}`}
                key={item.lotNo}
              >
                <div className="itemInfo">
                  <p>Lot No: {item.lotNo}</p>
                  <p>{item.name}</p>
                  <div className="imageDiv">
                    <img
                      className="singleImage"
                      src={require(`../images/${item.image}.jpg`).default}
                      alt={item.name}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Main;
