/* eslint-disable guard-for-in */
import React, {useContext, useState} from 'react';
import {ProductContext} from '../context.js';
import {Col, Row} from 'react-bootstrap';

function Size() {
  const {currentStyle, currentSize, updateSize, currentQuant, updateQuant} =
     useContext(ProductContext);
  const [size, updateTempSize] = useState('');
  const skuArr = [];

  if (currentStyle === undefined) {
    return <center><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div></center>;
  } else {
    if (currentStyle.skus) {
      for (const keys in currentStyle.skus) {
        const newObj = {};
        newObj.sku = keys;
        newObj.size = currentStyle.skus[keys].size;
        newObj.quantity = currentStyle.skus[keys].quantity;
        if (skuArr.indexOf(newObj.size) < 0) {
          skuArr.push(newObj);
        };
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
              }
            `}
          </style>
          <select name='size' id='customDrop' style={{height: '2rem'}}
            onChange={(e) => {
              console.log(e.target.key);
            }}>
            <option>Select A Size</option>
            {skuArr.map((item) => {
              return <option
                key={item.sku}>{item.size}
              </option>;
            })}
          </select>

        </Col>
        <Col>
          <select id='customDrop' style={{height: '2rem'}}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </Col>
      </Row>
    );
  }
}

export default Size;
