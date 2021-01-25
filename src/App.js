import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      number3: 0,
      total: 0,
      data: [],
    };
  }
  onJumlah() {
    if(this.state.data.length < 2 ) {
      alert("you must be check 2 or more")
    } else {
      // kasih kondisi apabia chexbox dicentang atau tidak dicentang
      this.setState({
        total:
          parseInt(this.state.data.includes("number1") ? this.state.number1 : 0) +
          parseInt(this.state.data.includes("number2") ? this.state.number2 : 0) +
          parseInt(this.state.data.includes("number3") ? this.state.number3 : 0),
      });
    }
  }
  onKali() {
    if(this.state.data.length < 2 ) {
      alert("you must be check 2 or more")
    } else {
      // kasih kondisi apabia chexbox dicentang atau tidak dicentang
      this.setState({
        total:
          parseInt(this.state.data.includes("number1") ? this.state.number1 : 1) *
          parseInt(this.state.data.includes("number2") ? this.state.number2 : 1) *
          parseInt(this.state.data.includes("number3") ? this.state.number3 : 1),
      });
    }
  }
  onBagi() {
    if(this.state.data.length < 2 ) {
      alert("you must be check 2 or more")
    } else {
      // kasih kondisi apabia chexbox dicentang atau tidak dicentang
      const number1 = this.state.data.includes("number1")
      const number2 = this.state.data.includes("number2")
      const number3 = this.state.data.includes("number3")
      if(number1 && number2 && number3) {
          this.setState({
          total:
            parseInt(this.state.number1 ) /
            parseInt( this.state.number2) /
            parseInt( this.state.number3),
        });
      } else if(!number1) {
          this.setState({
          total:
            parseInt(this.state.number2) /
            parseInt(this.state.number3),
        });
      } else if(!number2) {
         this.setState({
           total: parseInt(this.state.number1) / parseInt(this.state.number3),
         });
      } else if(!number3) {
         this.setState({
           total: parseInt(this.state.number1) / parseInt(this.state.number2),
         });
      }
     
    }
  }
  onKurang() {
    if(this.state.data.length < 2 ) {
      alert("you must be check 2 or more")
    } else {
      // kasih kondisi apabia chexbox dicentang atau tidak dicentang
      const number1 = this.state.data.includes("number1")
      const number2 = this.state.data.includes("number2")
      const number3 = this.state.data.includes("number3")
      if(number1 && number2 && number3) {
          this.setState({
          total:
            parseInt(this.state.number1) -
            parseInt(this.state.number2) -
            parseInt(this.state.number3),
        });
      } else if(!number1) {
          this.setState({
          total:
            parseInt(this.state.number2) -
            parseInt(this.state.number3),
        });
      } else if(!number2) {
         this.setState({
           total: parseInt(this.state.number1) - parseInt(this.state.number3),
         });
      } else if(!number3) {
         this.setState({
           total: parseInt(this.state.number1) - parseInt(this.state.number2),
         });
      }
     
    }
  }

  handlecheck1 (number) {
    if(this.state.data.includes(number)) {
     var data = [...this.state.data].filter((e) => e !== number);
     this.setState({
       data: data
     })
    } else {
      this.setState({
        data: [...this.state.data, number]
      })
    }
  }
  render() {
    return (
      <div className="wrap-clc">
        <div className="text-center mt-3">
          <h1 className="font-weight-bold text-secondary">KalKulator App</h1>
          <div className="container input-clc  mt-5 ">
            <div className="ml-3">
              <input
                onChange={() => this.handlecheck1("number1")}
                type="checkbox"
              />
            </div>
            <input
              onChange={(e) => this.setState({ number1: e.target.value })}
              type="number"
              className=" inpt form-control"
              id="exampleFormControlInput1"
              placeholder="input number"
            />
          </div>
          <div className="container input-clc  mt-3 ">
            <div className="ml-3">
              <input
                onChange={() => this.handlecheck1("number2")}
                type="checkbox"
              />
            </div>
            <input
              onChange={(e) => this.setState({ number2: e.target.value })}
              type="number"
              className=" inpt form-control"
              id="exampleFormControlInput1"
              placeholder="input number"
            />
          </div>
          <div className="container input-clc  mt-3 ">
            <div className="ml-3">
              <input
                onChange={() => this.handlecheck1("number3")}
                type="checkbox"
              />
            </div>
            <input
              onChange={(e) => this.setState({ number3: e.target.value })}
              type="number"
              className=" inpt form-control"
              id="exampleFormControlInput1"
              placeholder="input number"
            />
          </div>
        </div>
        {/* operator */}
        <div className="container clc-operator mt-5 ">
          <div onClick={() => this.onJumlah()} className="plus">
            <h1 className="font-weight-bold text-white">+</h1>
          </div>
          <div onClick={() => this.onKurang()} className="plus">
            <h1 className="font-weight-bold text-white">-</h1>
          </div>
          <div onClick={() => this.onKali()} className="plus">
            <h1 className="font-weight-bold text-white">x</h1>
          </div>
          <div onClick={() => this.onBagi()} className="plus">
            <h1 className="font-weight-bold text-white">/</h1>
          </div>
        </div>
        {/* hasil */}
        <div className="container clc-resultt mt-5">
          <div className="font-weight-bold">{this.state.total}</div>
          <div>Hasil</div>
        </div>
      </div>
    );
  }
}
