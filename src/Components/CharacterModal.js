import React from 'react';


export default class CharacterModal extends React.Component {
  render() {
    let modelStyle= {
      display: 'block',
      backgroundColor: 'rgba(0,0,0,0.8',
    }
  
  return (
    <div className="modal show fade" style={modelStyle}>
      <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
              <button type="button" className="btn-close" onClick={this.props.hide}></button>
            </div>
            <div className="modal-body">
              <img src={this.props.lgimg} className="img-fluid" alt="large character"/>
              <p>{this.props.info}</p>
            </div>
          </div>   
      </div>
    </div>
  );
}
}
