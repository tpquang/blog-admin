import React, { Component } from 'react';
import {CBadge, CCard, CCardBody, CCardHeader, CDataTable, CPagination} from "@coreui/react";
import usersData from "../views/users/UsersData";
const fields = ['name','registered', 'role', 'status'];
const page = 1;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <CCard>
        <CCardHeader>
          <h3>DANH SÁCH NHÂN VIÊN TRONG PHÒNG BAN/TRUNG TÂM NGHỈ HÔM NAY</h3>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={usersData}
            fields={[
              { key: 'name', _classes: 'font-weight-bold' },
              'registered', 'role', 'status'
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
            // onRowClick={(item) => history.push(`/users/${item.id}`)}
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    {/*/!*<CBadge color={getBadge(item.status)}>*!/*/}
                    {/*  {item.status}*/}
                    {/*</CBadge>*/}
                  </td>
                )
            }}
          />
          <CPagination
            activePage={page}
            // onActivePageChange={pageChange}
            pages={5}
            doubleArrows={false}
            align="center"
          />
        </CCardBody>
      </CCard>
    )
  }
}

export default Home;
