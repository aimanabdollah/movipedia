const Footer = () => {
  return (
    <footer id="main-footer" className="text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p className="lead mb-0">MoviPedia</p>
            <p>
              All data provided by The Movie Database (TMDb) API © {""}{" "}
              {new Date().getFullYear()} All Rights Reserved | Aiman Abdollah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
