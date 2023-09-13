import React, { useContext } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddProducts = () => {
    const {user} = useContext(AuthContext)

    const handleAddItems = event =>{
        event.preventDefault();

        const form = event.target;
        const title = form.productName.value;
        const price = form.price.value;
        const description = form.description.value;
        const img = form.url.value;
        const category = form.category.value;
        const condition = form.condition.value;
        const location = form.location.value;
        const year = form.year.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const postAddItems = {
            title,
             price, 
            description,
            img ,
            category,
            condition,
            location,
            year,
            phone,
            email
        }

        fetch('https://beauty-bin-server.vercel.app/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(postAddItems),

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
              toast.success('Product is added')
                form.reset();
            }
        })
        .catch(err => console.error(err))

    }

    

    return (
        <div>
        <h1 className='taxt-3xl md:3xl lg:text-5xl lg:mt-16 mb-5 text-center text-[#965a3e]' style={{ fontFamily: 'Playfair Display',   }}>Add Your Poducts</h1>

        <form onSubmit={handleAddItems} className="card-body">
                   <div className="form-control grid grid-cols-2 gap-5">
                      
                       <input type="text" name='productName' placeholder="Product Name" className="input input-bordered" required/>
                       <input type="text" name='price' placeholder="price" className="input input-bordered" required/>
                   </div>
                   <div className="form-control grid grid-cols-2 gap-5">
                      
                       <input type="text" name='category' placeholder="Product Category" className="input input-bordered" required/>
                       <input type="text" name='condition' placeholder="Product Condition" className="input input-bordered" required/>
                   </div>
                   <div className="form-control grid grid-cols-2 gap-5">
                       
                       <input type="text" name='url' placeholder="Image URL" className="input input-bordered" required/>
                       <input type="text" name='location' placeholder="Location" className="input input-bordered" required/>
                      
                   </div>
                   <div className="form-control grid grid-cols-2 gap-5">
                       
                       <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered" required/>
                       <input type="text" name='year' placeholder="Year Of Purchase" className="input input-bordered" required/>
                      
                   </div>
                   
                   <div className="form-control grid grid-cols-2 gap-5">
                       
                       <input type="text" name='description' placeholder="Description" className="input input-bordered"required />
                       <input type="email" name='email' placeholder="Email" value={user?.email} className="input input-bordered"required />
                      
                   </div>
                  
                   
                   <div className="form-control mt-6">
                       <input className="btn bg-[#965a3e]" type="submit" value="add your products" />

                   </div>
               </form>
   </div>
    );
};

export default AddProducts;