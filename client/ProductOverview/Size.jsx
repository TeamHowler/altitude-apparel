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
      };
    }
    return (
      <Row className='mb-3'>
        {console.log('hello')}
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
          <select name='size' id='customDrop'
            onChange={(e) => {
              const sizeItem = document.getElementById('sizeItem');
              updateSize(Number(sizeItem.getAttribute('sku')));
            }}>
            <option>Select A Size</option>
            {skuArr.map((item) => {
              return <option id='sizeItem' sku={item.sku}
                key={item.sku}>{item.size}
                {console.log(item.sku)}
              </option>;
            })}
          </select>
        </Col>
        <Col>
          <select id="customDrop">
            {currentSize ? <option>
              {currentStyle.skus[currentSize].quantity}</option> :
           <option>select a size</option>}
          </select>
        </Col>
      </Row>
    );
  }
}

export default Size;
