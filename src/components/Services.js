import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Adipisicing est irure cillum deserunt laborum sint ipsum.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Adipisicing est irure cillum deserunt laborum sint ipsum.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Adipisicing est irure cillum deserunt laborum sint ipsum.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Adipisicing est irure cillum deserunt laborum sint ipsum.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
