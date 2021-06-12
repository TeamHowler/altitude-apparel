/* eslint-disable guard-for-in */
import React, {useContext} from 'react';
import {ProductContext} from '../context.js';
<<<<<<< HEAD
import {Dropdown} from 'react-bootstrap';
=======
import {Dropdown, Row} from 'react-bootstrap';
>>>>>>> 8dc56896038f8e69381ac328facd1e3eb78e4825

function Size() {
  const {currentStyle} =
     useContext(ProductContext);
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
        skuArr.push(newObj);
      }
    }
    return (
<<<<<<< HEAD
      <>
        <style type="text/css">
          {`
              #customDrop {
                background-color: #f3f7f0;
                border-color: transparent;
                color: black;
              }
            `}
        </style>
        <Dropdown >
          <Dropdown.Toggle id="customDrop">
                    Select A Size
          </Dropdown.Toggle>
          <Dropdown.Menu m={5}>
            {skuArr.map((item) => {
              return <Dropdown.Item key={item.sku}>{item.size}
              </Dropdown.Item>;
            })}
            {console.log(skuArr)}
            <Dropdown.Item></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> <Dropdown >
          <Dropdown.Toggle id="customDrop">
                        1
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {skuArr.map((item) => {
              return <Dropdown.Item
                key={item.sku}>{item.quantity}
              </Dropdown.Item>;
            })}
            {console.log(skuArr)}
            <Dropdown.Item></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
=======
      <Row >
        <>
          <style type="text/css">
            {`
              #customDrop {
                background-color: transparent;
                border-color: black;
                color: black;
              }
            `}
          </style>
          <Dropdown >
            <Dropdown.Toggle id="customDrop">
                    Select A Size
            </Dropdown.Toggle>
            <Dropdown.Menu m={5}>
              {skuArr.map((item) => {
                return <Dropdown.Item key={item.sku}>{item.size}
                </Dropdown.Item>;
              })}
              {console.log(skuArr)}
              <Dropdown.Item></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown >
            <Dropdown.Toggle id="customDrop">
                        1
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {skuArr.map((item) => {
                return <Dropdown.Item
                  key={item.sku}>{item.quantity}
                </Dropdown.Item>;
              })}
              {console.log(skuArr)}
              <Dropdown.Item></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      </Row>
>>>>>>> 8dc56896038f8e69381ac328facd1e3eb78e4825
    );
  }
}

export default Size;
