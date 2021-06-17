/* eslint-disable guard-for-in */
import React, {useContext} from 'react';
import {ProductContext} from '../context.js';
import {Col, Row} from 'react-bootstrap';

function Size() {
  const {currentStyle, currentSize, updateSize} =
     useContext(ProductContext);
  const skuArr = [];
  const quantArr = [];

  if (currentStyle === undefined) {
    return <center><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div></center>;
  } else if (currentStyle.skus) {
    for (const keys in currentStyle.skus) {
      const newObj = {};
      newObj.sku = keys;
      newObj.size = currentStyle.skus[keys].size;
      newObj.quantity = currentStyle.skus[keys].quantity;
      if (skuArr.indexOf(newObj.size) < 0) {
        skuArr.push(newObj);
      };
    };
    if (currentStyle.skus[currentSize]) {
      const tempQuant = currentStyle.skus[currentSize].quantity;
      for (let i = 1; i < tempQuant; i++) {
        quantArr.push(i);
      }
    }
    return (
      <Row className='mb-3'>
        <Col>
          <style type="text/css">
            {`
              #customDrop {
                background-color: #f3f7f0;
                border-color: transparent;
                color: black;
                height: 2rem
              }
            `}
          </style>
          <select id='customDrop'
            onChange={(e) => {
              e.preventDefault();
              updateSize(e.target.value);
            }}>
            <option>Select A Size</option>
            {skuArr.map((item) => {
              return <option key={item.sku} value={item.sku}>{item.size}
              </option>;
            })}
          </select>
        </Col>
        <Col>
          <select id="customDrop">
            <option>Select A Quantity</option>
            {currentSize ? quantArr.map((quant) => {
              return (<option key={quant}>{quant}</option>);
            }) : <option>choose a size first</option>
            }

          </select>
        </Col>
      </Row>
    );
  }
}

export default Size;
