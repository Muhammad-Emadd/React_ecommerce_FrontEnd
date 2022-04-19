import React, { Component } from "react";

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: 0,
    };
    this.onChangingImg = this.onChangingImg.bind(this);
  }
  onChangingImg(e) {
    const { imagesLength } = this.props;
    const { activeImg } = this.state;
    const offset = e.target.getAttribute("button") === "next" ? 1 : -1;

    const newIndex = activeImg + offset;
    newIndex < 0 || newIndex > imagesLength - 1
      ? this.setState({ activeImg: 0 })
      : this.setState({ activeImg: newIndex });
  }
  render() {
    const { gallery } = this.props;

    return (
      <div className="carousel">
        <button
          className="carousel-button prev"
          onClick={this.onChangingImg}
          button="prev"
        >
          &#8249;
        </button>
        <button
          className="carousel-button next"
          onClick={this.onChangingImg}
          button="next"
        >
          &#8250;
        </button>
        <ul data-slides>
          {gallery.map((img, i) => {
            return (
              <li
                key={i}
                className={
                  this.state.activeImg === i ? "slide-active" : "slide "
                }
              >
                <img className="img" src={img} alt={`Product Image #${i}`} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
