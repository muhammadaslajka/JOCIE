const Footer = () => {
    return (
      <footer className="bg-warning text-light text-center p-4">
        <div className="container">
          <h3>JOCIE</h3>
          <p className="m-0">© Beaver Builder. All rights reserved.</p>
          <div className="d-flex justify-content-center mt-3">
            <a href="#" className="text-light mx-2"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light mx-2"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-light mx-2"><i className="bi bi-instagram"></i></a>
          </div>
          <div className="mt-4">
            <input type="email" className="form-control d-inline-block w-auto" placeholder="Email Address" />
            <button className="btn btn-light ml-2">SUBSCRIBE</button>
          </div>
          <div className="mt-4">
            <a href="#" className="text-light">Privacy Policy</a> | <a href="#" className="text-light">Cookie Policy</a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;  