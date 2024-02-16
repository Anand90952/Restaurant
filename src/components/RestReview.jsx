import React from 'react';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function RestReview({selectedRest}) {
  console.log("==1===");
  console.log(selectedRest);
  const reviews = selectedRest?.reviews;


  const [open, setOpen] = useState(false);
  return (
    <>
      <button className='btn btn-warning ms-3' onClick={() => setOpen(!open)}>Click here to see Reviews</button>
      <Collapse in={open}>
        <div className='my-2'>
          < hr />
          <div className='mt-5'>

            <h6>Name & date</h6>
            <h6>Rating</h6>
            <p>Description</p>

          </div>
        </div >
      </Collapse>
    </>
  )
}

export default RestReview