import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>
            {this.props.schoolName}
            <a
              href={this.props.educationHref}
              rel="noopener noreferrer"
              target="_blank"
              style={{ paddingLeft: ".5em" }}
            >
              <i className="fa fa-university" aria-hidden="true" />
            </a>
          </h4>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
