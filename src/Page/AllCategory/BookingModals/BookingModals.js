import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookingModals = ({ book, setBook }) => {

    const { book_title, resale_price, image_url, saler_name } = book;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            book_title: book_title,
            resale_price: resale_price,
            image_url: image_url,
            saler_name:saler_name,
            name,
            email,
            phone,
            location
        }
        console.log(booking);
        setBook(null)

        fetch('https://beauty-bin-server.vercel.app/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.acknowledged) {
          setBook(null);
          toast.success('Booking confirmed');
        }


      })




    }

    return (
        <React.Fragment>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-center text-green-500 font-bold">{book_title}</h3>


                    <form onSubmit={handleBooking} className='  grid grid-cols-1 gap-5 mt-10 justify-center items-center'>
                        <input type="" value={book_title} disabled className="input input-bordered input-success w-full " />
                        <input type="" value={image_url} disabled className="input input-bordered input-success w-full " />
                        <input type="email" name='email' value={user?.email} disabled placeholder='Email' className="input input-bordered input-success w-full " />
                        <input type="text" name="name" value={user?.displayName} disabled placeholder='Name' className="input input-bordered input-success w-full " />

                        <input type="" disabled value={resale_price} className="input input-bordered input-success w-full " />
                        <input type="text" required placeholder='Phone no' name='phone' className="input input-bordered input-success w-full " />
                        <input type="text" required placeholder='Location' name='location' className="input input-bordered input-success w-full " />
                        <input className='w-full  btn bg-pink-600 ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default BookingModals;