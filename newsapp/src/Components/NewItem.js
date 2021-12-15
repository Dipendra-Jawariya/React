import React, { Component } from "react";

export class NewItem extends Component {


  render() {
    let { title, description,imageUrl,newsUrl } = this.props;
    // Extracting something with the help of destructuring with the help  of props 
    return (
      <div className="my-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            {/* <h5 className="card-title">{this.props.title}</h5>  we can also use this kind for defining props */}
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail/" className="btn btn-sm btn-primary">
            Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
// with the help of react and its component we can reflect changes on component which we want to change in every use only in one shot
