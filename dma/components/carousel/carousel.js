const Carousel = () => {
  return (
<div id="home-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel"  data-bs-interval="2000" >
  <div className="carousel-inner">
    <div className="carousel-item active " >
      <img src="/home1.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item bg-body" >
      <img src="/home2.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item " >
      <img src="/home3.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#home-carousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#home-carousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
};

export default Carousel;
