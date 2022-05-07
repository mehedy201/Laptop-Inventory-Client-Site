import React from 'react';

const Add = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-8 mx-auto shadow py-5 px-4 rounded">
                <h3 className='pb-3'>Add Your Items</h3>
                    <form className='border rounded px-3 py-4 bg-light'>
                        <input className='form-control mb-3' type="text" placeholder='Item Title'/>
                        <input className='form-control mb-3' type="email" placeholder='Your Email'/>
                        <input className='form-control mb-3' type="text" placeholder='Short Description'/>
                        <input className='form-control mb-3' type="text" placeholder='Image Link'/>
                        <input className='form-control mb-3' type="number" placeholder='Price'/>
                        <button className='btn btn-sm mt-3 py-2 w-50 d-block mx-auto bg-primary fw-bold text-white' type='submit'>Add Items</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Add;