import React, { Component } from 'react';
import {CCard, CCardBody, CCardHeader} from "@coreui/react";

class DanhBa extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <CCard>
        <CCardHeader>
          Card title
        </CCardHeader>
        <CCardBody>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCardBody>
      </CCard>
    )
  }
}

export default DanhBa;
