import React, { useContext, useEffect, useState } from 'react';
import DeviceOrder from './DeviceOrder';
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from '../App';

export default function Cart() {
  const {userCart} = useContext(Context);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = userCart.reduce((totalAll, device) => device.price * device.quantity + totalAll, 0);
    setTotal(sum);
  }, [userCart]);

    return (
      <div>
        <div className='d-block'>
          <ListGroup as="ol" numbered>
            {userCart.length ? 
              userCart.map((device) => (
                  <DeviceOrder userCart={userCart} key={device.id} device={device} setTotal={setTotal}/>
                  ))
              :
              <h2>Кошик порожній</h2>
            }
            <b>Загальна сума замовлення: {total} грн.</b>
          </ListGroup>
        </div>
      </div>
    )
}