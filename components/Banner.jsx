import './Banner.css'
import n1 from './images.jpg'

const Bannner = () => {
  return (
    <div className="container-fluid mb-5">
      <div className='container position-relative mt-5 pb-5'>
        <div className="positon-relative">
          <p className='text-dark fw-medium position-absolute text-overlay1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur cum dicta, quos, sint delectus voluptates sapiente quasi illum itaque ab! Asperiores optio, sunt non iusto voluptatum quo tenetur perferendis!</p>
        </div>
        <img src={n1} className="img-fluid img3 ms-auto d-flex" alt="Responsive image"/>
      </div>
      <div className='container'>
        <div className='text-overlay2'>
        <p className='text-dark w-100 pb-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae cum debitis quisquam deleniti dolorem totam magnam expedita. Officia veritatis minima officiis incidunt asperiores alias repudiandae dignissimos consequatur cupiditate facilis.
            </p>
            <a href='#' className='btn button2 text-light' style={{backgroundColor:'rgba(253,143,106,255)'}}>Learn more</a>
        </div>
      </div>
    </div>
  )
}

export default Bannner