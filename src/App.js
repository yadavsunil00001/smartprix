import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const mobile_best = ['apple x10', 'honor', 'micromax', 'samsung', 'z10', 'zenz', 'sasa', 'apple x10', 'honor'];


class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">SmartPrix</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
              <form className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </header>
        <br />
        <br />
        <br />
        <div className="jumbotron">
          <div className="pull-left">
          <img  height="70px" src="https://data4.smartprix.com/img/sprite/logo.png" />
          <p className="lead">We Beleive in best</p>

          </div>
        </div>

        <div className="row">
          <div class="card-group">
            <div class="card">
              <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/4165q-3lMbL._SX425_.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Laptops</h5>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8llsjlBw4DUvEC04lKx7DBSZ3rri0bePr4h-W3bsM57Lh9kJ" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Mobiles</h5>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://www.lenovo.com/medias/lenovo-thinkpad-x1-tablet-front.png?context=bWFzdGVyfGltYWdlc3wxNjE2MnxpbWFnZS9wbmd8aW1hZ2VzL2hjMS9oMzIvOTE2NjgyNjMwNzYxNC5wbmd8MGMwYTZkZmZkOTBmYzU4NmJlZDYwZjAzZjc0ZjYwMjg5NDJhOWQxZGE0YjAzMjA1NDY0ZTJhYTNmYWFiZDM5YQ" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Tablets</h5>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO54uvE2K3H-ZOdzQZuu9e8MQRhmBw270TZSMv50uAhPvW01UY" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Televisions</h5>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="http://www.energysavingtrust.org.uk/sites/default/files/blog/images/iStock-157585315%20Home%20appliance%20-%20web.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Appliances</h5>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>

        </div>

        <div className="row">
          <p className="lead">Best Smatphones</p>
          <div class="card-group">
            {mobile_best.map(item => {
              return (
                <div className="card">
                  <img className="card-img-top" src="https://s4827.pcdn.co/wp-content/uploads/2018/02/iPhone-X-Plus-2018-5_top-1024x793.jpg" alt="Card image cap " />
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
