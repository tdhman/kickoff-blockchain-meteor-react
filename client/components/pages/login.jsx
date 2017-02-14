import React from 'react';

export default Login = () => (
  <div className="login">
    <div className="login-page ng-scope ui-view"> 
      <div className="row"> 
        <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
          <img src="/flat-avatar.png" className="user-avatar" /> 
          <h1>Ani Theme <br /><small>Free Meteor-React.js Edition</small></h1> 
          <form role="form" className="ng-pristine ng-valid"> 
            <div className="form-content"> 
              <div className="form-group"> 
                <input type="text" className="form-control input-underline input-lg" placeholder="Username" /> 
              </div> 
              <div className="form-group"> 
                <input type="password" className="form-control input-underline input-lg" placeholder="Password" /> 
              </div> 
            </div> 
            <a href="/dashboard/overview" style={{color: '#fff'}}><button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Login</button></a> 
          </form> 
        </div> 
      </div> 
    </div>
  </div>
);