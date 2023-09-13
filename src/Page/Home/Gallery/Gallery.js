// import React, { useState } from 'react';
// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";


// import img2 from '../../../images/gallery2.webp'
// import img3 from '../../../images/gallery4.jpg'
// import img4 from '../../../images/gallery5.jpg'
// import img5 from '../../../images/gallery6.webp'
// import img6 from '../../../images/gallery7.jpg'
// import img7 from '../../../images/gallery8.png'

// const images = [
//                 img2,
//                 img3,
//                 img4,
//                 img5,
//                 img6,
//                 img7]

// const Gallery = () => {
//     const [data, setData] = useState({img: '', i: 0})

//     const viewImage = (img, i)=>{
//         console.log(img, i)
//         setData({img, i})

//     }

//     return (
//         <>
//         {
//             data.img && 
//             <div  style = {{
//                 width:'100%',
//                 height: '100vh',
//                 background: 'black',
//                 position: 'fixed',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 overflow: 'hidden'
//             }}>
//                 <img src={data.img} alt="" style = {{width: 'auto', maxWidth: '90%', maxHeight: '90%'}} />
               
//             </div>
//         }
//         <div className='p-10 max-h-min'>
//             <ResponsiveMasonry
//                 columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
//             >
//                 <Masonry gutter= "20px">
//                     {images.map((image, i) => (
//                         <img
//                             key={i}
//                             src={image}
//                             style={{width: "100%", display: "block", cursor: "pointer"}}
//                             alt=""
//                             onClick={()=> viewImage(image, i)}
//                         />
//                     ))}
//                 </Masonry>
//             </ResponsiveMasonry>
//         </div>
//         </>
//     );
// };

// export default Gallery;

import React, { useEffect, useState } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

import img2 from '../../../images/gallery2.webp';
import img3 from '../../../images/gallery4.jpg';
import img4 from '../../../images/gallery5.jpg';
import img5 from '../../../images/gallery6.webp';
import img6 from '../../../images/gallery7.jpg';
import img7 from '../../../images/gallery8.png';

const images = [img2, img3, img4, img5, img6, img7];

const Gallery = () => {
  const [data, setData] = useState({ img: '', i:0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  useEffect(() => {
    const imageElements = document.querySelectorAll('.masonry-image');
    let maxHeight = 0;

    imageElements.forEach((element) => {
      const height = element.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    // Set the height of all images to match the tallest image
    imageElements.forEach((element) => {
      element.style.height = `${maxHeight}px`;
    });
  }, [data.img]);

  return (

    
    <>

<h1 className='text-3xl md:text-3xl lg:text-5xl text-center ' style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>Follow Our Trending Items</h1>
<h1 className='text-center text-xl md:text-xl lg:text-3xl text-gray-700 font-semibold pt-3 pb-6'>Buy And Get Discount</h1>

      {data.img && (
        <div
          style={{
            width: '100%',
            height: '100vh',
            background: 'black',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >


           

          <img
            src={data.img}
            alt=""
            style={{ width: 'auto', maxWidth: '90%', maxHeight: '90%' }}
          />
        </div>
      )}
      <div className="p-10 " style={{ position: 'relative' }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: '100%', display: 'block', cursor: 'pointer' }}
                alt=""
                onClick={() => viewImage(image)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Gallery;