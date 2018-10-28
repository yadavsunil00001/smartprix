import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const mobile_best = ['apple x10', 'honor', 'micromax', 'samsung', 'z10', 'zenz', 'sasa', 'apple x10', 'honor'];


class App extends Component {
  render() {
    return (
      <div className="container">
          <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">SmartPrix</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
    <br />
    <br />
    <br />


        <div className="row">
        <p className="lead">Best Smatphones</p>
          <div class="card-group">
            {mobile_best.map(item => {
              return (
                <div className="card">
                  <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap " />
                  <div className="card-body">
                    <h5 className="card-title">{item}</h5>
                    <p className="card-text"><small class="text-muted">Rs 12,000</small></p>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
        <div className="row">
        <p className="lead">Budget Smartphone</p>
          <div class="card-group">
            {mobile_best.map(item => {
              return (
                <div className="card">
                  <img className="card-img-top" src="https://www.yaphone.com/1552-tm_large_default/huawei-honor-10-64gb-dual-sim-blue.jpg" alt="Card image cap " />
                  <div className="card-body">
                    <h5 className="card-title">{item}</h5>
                    <p className="card-text"><small class="text-muted">Rs 7,000</small></p>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
        <div className="row">
        <p className="lead">Cheap Smatphones</p>
          <div class="card-group">
            {mobile_best.map(item => {
              return (
                <div className="card">
                  <img className="card-img-top" src="https://static.toiimg.com/photo/60829407/Micromax-Selfie-3-E460.jpg" alt="Card image cap " />
                  <div className="card-body">
                    <h5 className="card-title">{item}</h5>
                    <p className="card-text"><small class="text-muted">Rs 5,000</small></p>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
        <div className="row">
        <p className="lead">Premium</p>
          <div class="card-group">
            {mobile_best.map(item => {
              return (
                <div className="card">
                  <img className="card-img-top" src="https://www.ispyprice.com/static/nwprd_model/apple-iphone-x-64gb-7953.jpg" alt="Card image cap " />
                  <div className="card-body">
                    <h5 className="card-title">{item}</h5>
                    <p className="card-text"><small class="text-muted">1,10,000</small></p>
                  </div>
                </div>
              )
            })}

          </div>
        </div>

      </div>

    );
  }
}

export default App;
