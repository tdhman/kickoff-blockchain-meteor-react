import React from 'react';

function logout(event) {
  event.preventDefault();
  // Reset session
  Session.keys = {};
  FlowRouter.go('Login');
}

export const Dashboard = ({content}) => (
  <div className="dashboard">
    <div className="dashboard-page ui-view"> 
      <div className="container-fluid"> 
        <div className="row"> 
          <div className="col-sm-3 col-md-2 sidebar"> 
            <div className="text-center"> 
              <h2 className="brand">Ethereum <br /><small>Blocks and Smart Contract Explorer</small></h2> 
              <img src="/flat-avatar.png" className="user-avatar" />
              <br /> 
              <a onClick={logout} className="btn btn-white btn-outline btn-rounded btn-sm">Logout</a> 
            </div> 

            <ul className="nav nav-sidebar"> 
              <li>
                <a href="/dashboard/overview">Overview</a>
              </li>
              <li>
                <a href="/dashboard/reports">Reports</a>
              </li>
            </ul> 
          </div>

          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main ng-scope ui-view">
            {React.cloneElement(<div id="body-container" className="ui-view">{content}</div> || <div />)}
          </div>
        </div> 
      </div> 
    </div>
  </div>
);