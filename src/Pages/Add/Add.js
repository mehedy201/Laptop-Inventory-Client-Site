import React, { useRef } from 'react';

const Add = () => {
// Get Input value
    const titleRef = useRef('');
    const emailRef = useRef('');
    const desRef = useRef('');
    const imgRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');
// Add product server handle
    const addProduct = event =>{
        event.preventDefault()
        const name = titleRef.current.value;
        const email = emailRef.current.value;
        const des = desRef.current.value;
        const img = imgRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const product = {name, email, des, img, price, quantity};
        console.log(product);
        
        // Send Product data
        const url = `http://localhost:4000/products`;
        fetch( url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(result => {
            console.log('succes', result);
        })
    };

    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-8 mx-auto shadow py-5 px-4 rounded">
                <h3 className='pb-3'>Add Your Items</h3>
                    <form onSubmit={addProduct} className='border rounded px-3 py-4 bg-light'>
                        <input ref={titleRef} className='form-control mb-3' type="text" placeholder='Item Title' required/>
                        <input ref={emailRef} className='form-control mb-3' type="email" placeholder='Your Email' required/>
                        <input ref={desRef} className='form-control mb-3' type="text" placeholder='Short Description' required/>
                        <input ref={imgRef} className='form-control mb-3' type="text" placeholder='Image Link' required/>
                        <input ref={priceRef} className='form-control mb-3' type="number" placeholder='Price' required/>
                        <input ref={quantityRef} className='form-control mb-3' type="number" placeholder='Quantity' required/>
                        <button className='btn btn-sm mt-3 py-2 w-50 d-block mx-auto bg-primary fw-bold text-white' type='submit'>Add Items</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Add;