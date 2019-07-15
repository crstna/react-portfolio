import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Welcome to my portfolio"
        };
    }
    portfolioItems() {
        const data = ["Quip", "Eventbrite", "Ministry Safe", "SwingAway"];
        return data.map(item => {
            return <PortfolioItem title={item} />;
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                {this.portfolioItems()}
            </div>
        )
    }
}