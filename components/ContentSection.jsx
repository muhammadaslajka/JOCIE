const ContentSection = () => {
  return (
    <section className="container my-5 content-section">
      <div className="row align-items-center">
        {/* Left side image */}
        <div className="col-md-6">
          <img
            src="https://www.ziflow.com/hs-fs/hubfs/april_hero.jpg?width=2160&height=1224&name=april_hero.jpg" // Replace with the actual image URL
            alt="Office"
            className="img-fluid"
          />
        </div>
        {/* Right side text content */}
        <div className="col-md-6 text-content">
          <h6 className="text-uppercase">Accommodare</h6>
          <h2 className="mb-4">Facilisi partem</h2>
          <p>
            Cu qui sed at legere summo mel summo populo inciderint omittantur
            vel everi no. Id nam possim corrumpit qui admodum vis nec complectitur
            nostro mea vis insolens. Gubergren nec in minim commune modus
            principes ponderum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
