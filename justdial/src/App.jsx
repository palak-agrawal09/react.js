
import './App.css'

  <div>
    function App() {'{'}
    return (
    &lt;&gt;
    <div className="vertical-buttons" aria-label="Side vertical action buttons">
      <button className="side-button advertise" type="button" aria-label="Advertise">Advertise</button>
      <button className="side-button free-listing" type="button" aria-label="Free Listing">Free Listing</button>
    </div>
    <div className="container-fluid p-4 pt-0 pb-0 p_tbdr">
      <header className="p_tbdr bg-white fixed-top position-fixed">
        <div className="col-12 p-0 p_tbdr d-flex align-items-center justify-content-end">
          <div className="row m-0 h-100 ">
            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg" alt="Website Banner" />
          </div>
          <ul className="nav p_dropdown p_wearehiring d-flex">
            <li className="nav-item ">
              <div className="dropdown p_dropdown2">
                {/* Input outside the dropdown toggle */}
                <button className="btn btn-drop dropdown-toggle w-20 n_dropdown2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-location-dot n_dropdown2"> </i>
                  <input type="text" placeholder="Select Location" />
                </button>
                {/* Dropdown menu */}
                <ul className="dropdown-menu p_dropdown2" id="locationDropdown">
                  <li><a className="dropdown-item" href="#">Mira Road East,Thane</a></li>
                  <li><a className="dropdown-item" href="#">Kandivali,Mumbai</a></li>
                  <li><a className="dropdown-item" href="#">Malad West,Mumbai</a></li>
                  <li><a className="dropdown-item" href="#">Kandivali West,Mumbai</a></li>
                  <li><a className="dropdown-item" href="#">Thane West,Thane</a></li>
                  <li><a className="dropdown-item" href="#">Nalasopara East,Palghar</a></li>
                  <li><a className="dropdown-item" href="#">Mumbai Central,Mumbai</a></li>
                </ul>
                <button className="btn p_dropdown2" type="button" aria-expanded="false">
                  <i className="fa-solid fa-magnifying-glass" />
                  <input type="text" defaultValue="Search anywhere" />
                  <i className="fa-solid fa-microphone" />
                </button>
                <div className="dropdown ">
                  <button className="btn dropdown-toggle text-primary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-language text-primary" /> En
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">English-EN</a></li>
                    <li><a className="dropdown-item" href="#">हिंदी - HI</a></li>
                    <li><a className="dropdown-item" href="#">मराठी - MR</a></li>
                    <li><a className="dropdown-item" href="#">বেঙ্গলি - BN</a></li>
                  </ul>
                </div>
              </div></li><li className="nav-item">
              <a href="#" className="btn nav-link text-black p_wearehiering d-flex">We Are Hiring</a>
            </li>
            <li className="nav-item">
              <a href="#" className="btn nav-link text-black p_wearehiering d-flex">Investor Relations</a>
            </li>
            <li className="nav-item">
              <a href="#" className="btn nav-link text-black p_wearehiering d-flex">Advertise</a>
            </li>
            <li className="nav-item">
              <a href="#" className="btn nav-link text-black p_wearehiering d-flex">Free Listing</a>
            </li>
            <li className="nav-item p_bell btn btn-lg" type="button">
              <a className="nav-link text-black" href="#">
                <i className="fa-regular fa-bell" />
              </a>
            </li>
            <li className="nav-item p_dropdown">
              <button className="btn btn-primary btn-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-label="Log in or sign up">
                Log-In / Sign-Up <i className="fa-regular fa-circle-user ms-1" />
              </button>
            </li>
          </ul>
        </div>
      </header>
      <main className="p_tbdr mt-5" id="mainContent" style={{paddingTop: 50}}>
        {/* Search Title */}
        <div className="container mb-4">
          <h2 className="home_input_title font26 fw700 color111 mb-3">
            Search across 
            <span className="content__list__count ps-2">
              ‘4.7 Crore+’ <span className="color007">Businesses</span> and 
              ‘5.9 Crore+’ <span className="color007">Products &amp; Services</span>
            </span>
          </h2>
        </div>
        {/* Search Inputs */}
        <div id="searchLocationWrapper" className="container d-flex gap-2 align-items-center py-2 flex-wrap">
          {/* 📍 Select Location Input */}
          <div className="input-group location-box">
            <span className="input-group-text">
              <i className="fas fa-location-dot text-primary" />
            </span>
            <input type="text" className="form-control" placeholder="Select Location" />
          </div>
          {/* 🔍 Search For Input */}
          <div className="input-group search-box flex-grow-1">
            <span className="input-group-text bg-white border-end-0">
              <i className="fas fa-search text-primary" />
            </span>
            <input type="text" id="searchInput" className="form-control border-start-0" placeholder="Search for Restaurants" />
          </div>
          {/* 📱 App Download Button */}
          <a href="/JD-ON-MOBILE" className="btn btn-outline-dark d-flex align-items-center ms-auto px-3 py-2 shadow-sm text-decoration-none">
            <div className="getapp_button fw500 font13 color111">Download App</div>
            <div className="getapp_icon jdicon ms-2" />
          </a>
        </div>
        {/* Banner Carousel and Categories */}
        <div className="container mt-3">
          <div className="row g-3">
            {/* Carousel */}
            <div className="col-md-6">
              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_loans_2024.webp" className="d-block w-100 h-100 object-fit-cover" alt="Loans" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_hotels_2024.webp" className="d-block w-100 h-100 object-fit-cover" alt="Hotels" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_cctv_2024.webp" className="d-block w-100 h-100 object-fit-cover" alt="CCTV" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_webflight_2024.webp" className="d-block w-100 h-100 object-fit-cover" alt="Flights" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            {/* Category Cards */}
            <div className="col-md-6">
              <div className="d-flex gap-3  overflow-auto flex-nowrap">
                {/* Category Card Template */}
                <div className="category-card p_cards text-white text-center position-relative overflow-hidden" style={{background: 'url("https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/b2b_square_hotkey.webp?w=2048&q=75") no-repeat right center / cover', backgroundColor: '#0076D7'}}>
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: 'rgba(14, 119, 205, 0.6)'}} />
                  <div className="position-relative">
                    <h6>B2B</h6>
                    <small>Quick Quotes</small>
                  </div>
                </div>
                <div className="category-card p_cards text-white text-center position-relative overflow-hidden" style={{background: 'url("https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/repair_square_hotkey.webp?w=2048&q=75") no-repeat right center / cover', backgroundColor: '#0056b3'}}>
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: 'rgba(14, 119, 205, 0.6)'}} />
                  <div className="position-relative">
                    <h6>REPAIRS &amp; SERVICES</h6>
                    <small>Get Nearest Vendor</small>
                  </div>
                </div>
                <div className="category-card p_cards text-white text-center position-relative overflow-hidden" style={{background: 'url("https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/realestate_square_hotkey.webp?w=2048&q=75") no-repeat right center / cover', backgroundColor: 'purple'}}>
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: 'rgba(14, 119, 205, 0.6)'}} />
                  <div className="position-relative">
                    <h6>REAL ESTATE</h6>
                    <small>Finest Agents</small>
                  </div>
                </div>
                <div className="category-card p_cards text-white text-center position-relative overflow-hidden" style={{background: 'url("https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/doctor_square_hotkey.webp?w=2048&q=75") no-repeat right center / cover', backgroundColor: 'green'}}>
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: 'rgba(14, 119, 205, 0.6)'}} />
                  <div className="position-relative">
                    <h6>DOCTORS</h6>
                    <small>Book Now</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="container mt-5">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
          {/* Restaurants */}
          <div className="col">
            <a href="restaurant_listing.html" className="text-decoration-none text-center d-block">
              <div className="category-item p-3 border rounded-3 h-100 shadow-sm">
                <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/restaurant-2022.svg?w=48&q=75" alt="Restaurants" className="mb-2" />
                <p className="mb-0 text-dark fw-semibold">Restaurants</p>
              </div>
            </a>
          </div>
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hotel-2022.svg?w=48&q=75" alt="Hotels" className="mb-2" />
              <p className="mb-0 fw-semibold">Hotels</p>
            </div>
          </div>
          {/* Beauty Spa */}
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/beauty.svg?w=48&q=75" alt="Beauty Spa" className="mb-2" />
              <p className="mb-0 fw-semibold">Beauty Spa</p>
            </div>
          </div>
          {/* Home Decor */}
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/homedecor.svg?w=48&q=75" alt="Home Decor" className="mb-2" />
              <p className="mb-0 fw-semibold">Home Decor</p>
            </div>
          </div>
          {/* Wedding Planning */}
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hotkey_wedding_icon.gif?w=48&q=75" alt="Wedding Planning" className="mb-2" />
              <p className="mb-0 fw-semibold">Wedding Planning</p>
            </div>
          </div>
          {/* Education */}
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/education.svg?w=48&q=75" alt="Education" className="mb-2" />
              <p className="mb-0 fw-semibold">Education</p>
            </div>
          </div>
          {/* Rent & Hire */}
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/renthire.svg?w=48&q=75" alt="Rent & Hire" className="mb-2" />
              <p className="mb-0 fw-semibold">Rent &amp; Hire</p>
            </div>
          </div>
          {/* Hospitals */}
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hospital_2023.svg?w=48&q=75" alt="Hospitals" className="mb-2" />
              <p className="mb-0 fw-semibold">Hospitals</p>
            </div>
          </div>
          {/* Contractors */}
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/contractor-2022.svg?w=48&q=75" alt="Contractors" className="mb-2" />
              <p className="mb-0 fw-semibold">Contractors</p>
            </div>
          </div>
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75" alt="pet shops" className="mb-2" />
              <p className="mb-0 fw-semibold">Pet Shops</p>
            </div>
          </div>
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pg,hostelsandrooms.svg" alt="PG/Hostals" className="mb-2" />
              <p className="mb-0 fw-semibold">PG/Hostals</p>
            </div>
          </div>
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/estate-agent.svg?w=48&q=75" alt="Estate Agents" className="mb-2" />
              <p className="mb-0 fw-semibold">Estate Agents</p>
            </div>
          </div>
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/dentist_2023.svg?w=48&q=75" alt="Dentists" className="mb-2" />
              <p className="mb-0 fw-semibold">Dentists</p>
            </div>
          </div>
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/gym_2023.svg?w=48&q=75" alt="GYM" className="mb-2" />
              <p className="mb-0 fw-semibold">GYM</p>
            </div>
          </div>
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newhotkey/loans.svg?w=48&q=75" alt="Loans" className="mb-2" />
              <p className="mb-0 fw-semibold">Loans</p>
            </div>
          </div>
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/eventorganizers.svg?w=48&q=75" alt="Event Organizers" className="mb-2" />
              <p className="mb-0 fw-semibold">Event Organizers</p>
            </div>
          </div>
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/driving_school_2023.svg?w=48&q=75" alt="Driving schools" className="mb-2" />
              <p className="mb-0 fw-semibold">Driving schools</p>
            </div>
          </div>
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/packers_movers_2023.svg?w=48&q=75" alt="Packers & Movers" className="mb-2" />
              <p className="mb-0 fw-semibold">Packers &amp; Movers</p>
            </div>
          </div>
          <div className="col">
            <div className="category-item p-3 border rounded-3 text-center h-100 shadow-sm">
              <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/courier_2023.svg?w=48&q=75" alt="Courier Service" className="mb-2" />
              <p className="mb-0 fw-semibold">Courier Service</p>
            </div>
          </div>
        </div>
      </section>
      <button id="backToTopBtn" className="btn position-fixed" style={{bottom: 20, right: 20, display: 'block', zIndex: 999, backgroundColor: 'white', color: 'black', border: '1px solid black'}}>
        ⮝
      </button>
      <div className="vertical-buttons" aria-label="Side vertical action buttons">
        <button className="side-button advertise" type="button" aria-label="Advertise">Advertise</button>
        <button className="side-button free-listing" type="button" aria-label="Free Listing">Free Listing</button>
      </div>
      <div className="container my-4 gap-2">
        <div className="row overflow-hidden p_slide rounded-2 img-fluid">
          <div className="col-md-6">
            {/* Wedding Requisites */}
            <div className="category-section ">
              <div className="category-title ">Wedding Requisites</div>
              <div className="row text-center justify-content-center">
                <div className="col-6 col-md-3 category-item">
                  <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banquethalls_rectangle_2024.webp?w=640&q=75" alt="Banquet Halls" />
                  <p>Banquet Halls</p>
                </div>
                <div className="col-6 col-md-3 category-item">
                  <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bridalrequisite_rectangle_2024.webp?w=640&q=75" alt="Bridal Requisite" />
                  <p>Bridal Requisite</p>
                </div>
                <div className="col-6 col-md-3 category-item">
                  <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/caterers_rectangle_2024.webp?w=640&q=75" alt="Caterers" />
                  <p>Caterers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {/* Beauty & Spa */}
            <div className="category-section">
              <div className="category-title">Beauty &amp; Spa</div>
              <div className="row text-center justify-content-center">
                <div className="col-6 col-md-3 category-item">
                  <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/beautyparlours_rectangle_2024.webp?w=640&q=75" alt="Beauty Parlours" />
                  <p>Beauty Parlours</p>
                </div>
                <div className="col-6 col-md-3 category-item">
                  <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/spamassages_rectangle_2024.webp?w=640&q=75" alt="Spa & Massages" />
                  <p>Spa &amp; Massages</p>
                </div>
                <div className="col-6 col-md-3 category-item">
                  <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/salons_rectangle_2024.webp?w=640&q=75" alt="Salons" />
                  <p>Salons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-4">
          <div className="row overflow-hidden p_slide rounded-2 img-fluid">
            <div className="col-md-6">
              {/* Repairs & Services */}
              <div className="category-section">
                <div className="category-title">Repairs &amp; Services</div>
                <div className="row text-center justify-content-center">
                  <div className="col-6 col-md-3 category-item">
                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_acrepair.png?w=640&q=75" alt="AC Service" />
                    <p>AC Service</p>
                  </div>
                  <div className="col-6 col-md-3 category-item">
                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/carservice_rectangle_2024.webp?w=640&q=75" alt="Car Service" />
                    <p>Car Service</p>
                  </div>
                  <div className="col-6 col-md-3 category-item">
                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bikeservice_rectangle_2024.webp?w=640&q=75" alt="Bike Service" />
                    <p>Bike Service</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Daily Needs */}
            <div className="col-md-6">
              <div className="category-section">
                <div className="category-title">Daily Needs</div>
                <div className="row text-center justify-content-center">
                  <div className="col-6 col-md-3 category-item">
                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_movies.png?w=640&q=75" alt="Movies" />
                    <p>Movies</p>
                  </div>
                  <div className="col-6 col-md-3 category-item">
                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/grocery_rectangle_2024.webp?w=640&q=75" alt="Grocery" />
                    <p>Grocery</p>
                  </div>
                  <div className="col-6 col-md-3 category-item">
                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/electricians_rectangle_2024.webp?w=640&q=75" alt="Electricians" />
                    <p>Electricians</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="container py-4">
              {/* Bills & Recharge */}
              <div className="service-box">
                <div className="row">
                  <div className="col-md-4">
                    <h5><strong>Bills &amp; Recharge</strong></h5>
                    <p className="text-muted">Pay your bills &amp; recharge instantly with Justdial</p>
                    <a href="#" className="text-primary fw-semibold">Explore More</a>
                  </div>
                  <div className="col-md-8">
                    <div className="row text-center">
                      <div className="col-4 col-md-2">
                        <div className="icon-box">
                          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_mobile.svg?w=128&q=75" alt="Mobile" />
                        </div>
                        <p className="fw-medium">Mobile</p>
                      </div>
                      <div className="col-4 col-md-2">
                        <div className="icon-box">
                          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_electricity.svg?w=128&q=75" alt="Electricity" />
                        </div>
                        <p className="fw-medium">Electricity</p>
                      </div>
                      <div className="col-4 col-md-2">
                        <div className="icon-box">
                          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_dth.svg?w=128&q=75" alt="DTH" />
                        </div>
                        <p className="fw-medium">DTH</p>
                      </div>
                      <div className="col-4 col-md-2">
                        <div className="icon-box">
                          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_water.svg?w=128&q=75" alt="Water" />
                        </div>
                        <p className="fw-medium">Water</p>
                      </div>
                      <div className="col-4 col-md-2">
                        <div className="icon-box">
                          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_gas.svg?w=128&q=75" alt="Gas" />
                        </div>
                        <p className="fw-medium">Gas</p>
                      </div>
                      <div className="col-4 col-md-2">
                        <div className="icon-box">
                          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_insurance.svg?w=128&q=75" alt="Insurance" />
                        </div>
                        <p className="fw-medium">Insurance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Travel Bookings */}
              <div className="service-box">
                <div className="row">
                  <div className="col-md-4">
                    <h5><strong>Travel Bookings</strong></h5>
                    <p className="text-muted">Instant ticket bookings for your best travel experience</p>
                    <a href="#" className="text-primary fw-semibold">Explore More</a>
                  </div>
                  <div className="col-md-8">
                    <div className="row text-center">
                      <div className="col-4 col-md-2">
                        <div className="icon-box">
                          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_flight.svg?w=128&q=75" alt="Flight" />
                        </div>
                        <p className="fw-medium">Flight</p>
                        <small className="highlight-green">Powered by Easemytrip.com</small>
                      </div>
                      <div className="col-4 col-md-2">
                        <div className="icon-box">
                          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_bus.svg?w=128&q=75" alt="Bus" />
                        </div>
                        <p className="fw-medium">Bus</p>
                        <small className="highlight-green">Affordable Rides</small>
                      </div>
                      <div className="col-4 col-md-2">
                        <div className="icon-box">
                          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_train.svg?w=128&q=75" alt="Train" />
                        </div>
                        <p className="fw-medium">Train</p>
                      </div>
                      <div className="col-4 col-md-2">
                        <div className="icon-box">
                          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_hotels.svg?w=128&q=75" alt="Hotel" />
                        </div>
                        <p className="fw-medium">Hotel</p>
                        <small className="highlight-green">Budget-friendly Stay</small>
                      </div>
                      <div className="col-4 col-md-2">
                        <div className="icon-box">
                          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_carhire.svg?w=128&q=75" alt="Car" />
                        </div>
                        <p className="fw-medium">Car Rentals</p>
                        <small className="highlight-green">Drive Easy Anywhere</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container my-5">
              {/* Title */}
              <div className="d-flex align-items-center mb-3">
                <h4 className="fw-bold mb-0">Trending Searches Near You</h4>
                <span className="badge bg-danger text-white ms-2">NEW</span>
              </div>
              <p className="text-muted mb-4">Stay updated with the latest local trends.</p>
              {/* Card List */}
              <div className="row g-3 flex-nowrap overflow-auto" style={{scrollSnapType: 'x mandatory'}}>
                {/* Card 1 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                  <div className="card h-100">
                    <div className="row g-0 align-items-center">
                      <div className="col-5">
                        <img src="./img/archery-classes-1-archery-classes-1-l95om.avif" className="img-fluid rounded-start" alt="Archery Classes" />
                      </div>
                      <div className="col-7">
                        <div className="card-body">
                          <h6 className="card-title fw-bold">Archery Classes</h6>
                          <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                  <div className="card h-100">
                    <div className="row g-0 align-items-center">
                      <div className="col-5">
                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10948367.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Digital Marketing" />
                      </div>
                      <div className="col-7">
                        <div className="card-body">
                          <h6 className="card-title fw-bold">Digital Marketing Services</h6>
                          <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                  <div className="card h-100">
                    <div className="row g-0 align-items-center">
                      <div className="col-5">
                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10059338.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                      </div>
                      <div className="col-7">
                        <div className="card-body">
                          <h6 className="card-title fw-bold">Building Contractors</h6>
                          <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Card 4 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                  <div className="card h-100">
                    <div className="row g-0 align-items-center">
                      <div className="col-5">
                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10104727.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                      </div>
                      <div className="col-7">
                        <div className="card-body">
                          <h6 className="card-title fw-bold">Coffee Shops</h6>
                          <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Card 5 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                  <div className="card h-100">
                    <div className="row g-0 align-items-center">
                      <div className="col-5">
                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10925563.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                      </div>
                      <div className="col-7">
                        <div className="card-body">
                          <h6 className="card-title fw-bold">Polytechnic Colleges</h6>
                          <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Card 6 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                  <div className="card h-100">
                    <div className="row g-0 align-items-center">
                      <div className="col-5">
                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11250059.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                      </div>
                      <div className="col-7">
                        <div className="card-body">
                          <h6 className="card-title fw-bold">Android Application Developers</h6>
                          <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Card 7 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                  <div className="card h-100">
                    <div className="row g-0 align-items-center">
                      <div className="col-5">
                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10080172.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                      </div>
                      <div className="col-7">
                        <div className="card-body">
                          <h6 className="card-title fw-bold">Cardiologists</h6>
                          <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Card 8 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                  <div className="card h-100">
                    <div className="row g-0 align-items-center">
                      <div className="col-5">
                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11123333.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                      </div>
                      <div className="col-7">
                        <div className="card-body">
                          <h6 className="card-title fw-bold">Playgrounds</h6>
                          <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Card 9 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                  <div className="card h-100">
                    <div className="row g-0 align-items-center">
                      <div className="col-5">
                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10128276.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                      </div>
                      <div className="col-7">
                        <div className="card-body">
                          <h6 className="card-title fw-bold">Construction Contractors</h6>
                          <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Card 10 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                  <div className="card h-100">
                    <div className="row g-0 align-items-center">
                      <div className="col-5">
                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11123333.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                      </div>
                      <div className="col-7">
                        <div className="card-body">
                          <h6 className="card-title fw-bold">Playgrounds</h6>
                          <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section></div>
        <section>
          <div className="container my-5">
            <h4 className="fw-bold mb-3">Latest Movies &amp; Review</h4>
            <div className="d-flex overflow-auto gap-3 pb-3">
              {/* Movie Card 1 */}
              <div className="position-relative" style={{minWidth: 180}}>
                <img src="https://images.jdmagicbox.com/movies/centralized_161987892025_06_06_05_14_13_220.jpg?w=2048&q=75" alt="movie img" className="img-fluid movie-card" />
                <div className="rating-badge">👍 80%</div>
                <p className="fw-semibold mt-2 mb-0">Sitaare Zameen Par</p>
                <small className="text-muted">Hindi • 2D</small>
              </div>
              {/* Movie Card 2 */}
              <div className="position-relative" style={{minWidth: 180}}>
                <img src="https://images.jdmagicbox.com/movies/centralized_161833792025_06_12_01_40_24_220.jpg?w=2048&q=75" alt="movie img" className="img-fluid movie-card" />
                <div className="rating-badge">👎 20%</div>
                <p className="fw-semibold mt-2 mb-0">Maa (2025)</p>
                <small className="text-muted">Hindi • 2D</small>
              </div>
              {/* Movie Card 3 */}
              <div className="position-relative" style={{minWidth: 180}}>
                <img src="https://images.jdmagicbox.com/movies/centralized_161391492024_11_27_06_32_12_220.jpg?w=2048&q=75" alt="movie img" className="img-fluid movie-card" />
                <div className="rating-badge">👍 80%</div>
                <p className="fw-semibold mt-2 mb-0">F1</p>
                <small className="text-muted">English • 2D</small>
              </div>
              {/* Movie Card 4 */}
              <div className="position-relative" style={{minWidth: 180}}>
                <img src="https://images.jdmagicbox.com/movies/centralized_161212992025_04_15_07_45_57_220.jpg?w=2048&q=75" alt="movie img" className="img-fluid movie-card" />
                <div className="rating-badge">👍 80%</div>
                <p className="fw-semibold mt-2 mb-0">Kannappa</p>
                <small className="text-muted">Tamil • 2D</small>
              </div>
              {/* Movie Card 5 */}
              <div className="position-relative" style={{minWidth: 180}}>
                <img src="https://images.jdmagicbox.com/movies/centralized_161999222025_05_23_04_22_20_220.jpg?w=2048&q=75" alt="movie img" className="img-fluid movie-card" />
                <div className="rating-badge">👍 60%</div>
                <p className="fw-semibold mt-2 mb-0">Jarann</p>
                <small className="text-muted">Marathi • 2D</small>
              </div>
              {/* Movie Card 6 */}
              <div className="position-relative" style={{minWidth: 180}}>
                <img src="https://images.jdmagicbox.com/movies/centralized_161710302025_02_28_01_05_51_220.jpg?w=2048&q=75" alt="movie img" className="img-fluid movie-card" />
                <div className="rating-badge">👍 70%</div>
                <p className="fw-semibold mt-2 mb-0">Jurassic World</p>
                <small className="text-muted">English • 2D</small>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container my-5">
            {/* Title */}
            <div className="d-flex align-items-center mb-3">
              <h4 className="fw-bold mb-0">Rainy Day Essentials</h4>
              <span className="badge bg-danger text-white ms-2">SEASONAL</span>
            </div>
            <p className="text-muted mb-4">Discover wide range of rainy collection</p>
            {/* Card List */}
            <div className="row g-3 flex-nowrap overflow-auto" style={{scrollSnapType: 'x mandatory'}}>
              {/* Card 1 */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                <div className="card h-100">
                  <div className="row g-0 align-items-center">
                    <div className="col-5">
                      <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10378025.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Archery Classes" />
                    </div>
                    <div className="col-7">
                      <div className="card-body">
                        <h6 className="card-title fw-bold">Plumbers</h6>
                        <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                <div className="card h-100">
                  <div className="row g-0 align-items-center">
                    <div className="col-5">
                      <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10533854.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Digital Marketing" />
                    </div>
                    <div className="col-7">
                      <div className="card-body">
                        <h6 className="card-title fw-bold">Waterproofing Contractors</h6>
                        <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                <div className="card h-100">
                  <div className="row g-0 align-items-center">
                    <div className="col-5">
                      <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10472227.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                    </div>
                    <div className="col-7">
                      <div className="card-body">
                        <h6 className="card-title fw-bold">Tarpaulin Dealers</h6>
                        <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Card 4 */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                <div className="card h-100">
                  <div className="row g-0 align-items-center">
                    <div className="col-5">
                      <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10274634.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                    </div>
                    <div className="col-7">
                      <div className="card-body">
                        <h6 className="card-title fw-bold">Inverter Dealers</h6>
                        <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Card 5 */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                <div className="card h-100">
                  <div className="row g-0 align-items-center">
                    <div className="col-5">
                      <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10925563.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                    </div>
                    <div className="col-7">
                      <div className="card-body">
                        <h6 className="card-title fw-bold">Polytechnic Colleges</h6>
                        <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Card 6 */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                <div className="card h-100">
                  <div className="row g-0 align-items-center">
                    <div className="col-5">
                      <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11250059.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                    </div>
                    <div className="col-7">
                      <div className="card-body">
                        <h6 className="card-title fw-bold">Android Application Developers</h6>
                        <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Card 7 */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                <div className="card h-100">
                  <div className="row g-0 align-items-center">
                    <div className="col-5">
                      <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10080172.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                    </div>
                    <div className="col-7">
                      <div className="card-body">
                        <h6 className="card-title fw-bold">Cardiologists</h6>
                        <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Card 8 */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                <div className="card h-100">
                  <div className="row g-0 align-items-center">
                    <div className="col-5">
                      <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11123333.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                    </div>
                    <div className="col-7">
                      <div className="card-body">
                        <h6 className="card-title fw-bold">Playgrounds</h6>
                        <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Card 9 */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                <div className="card h-100">
                  <div className="row g-0 align-items-center">
                    <div className="col-5">
                      <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10128276.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                    </div>
                    <div className="col-7">
                      <div className="card-body">
                        <h6 className="card-title fw-bold">Construction Contractors</h6>
                        <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Card 10 */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
                <div className="card h-100">
                  <div className="row g-0 align-items-center">
                    <div className="col-5">
                      <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11123333.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                    </div>
                    <div className="col-7">
                      <div className="card-body">
                        <h6 className="card-title fw-bold">Playgrounds</h6>
                        <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section></div>
      <section>
        <div className="container my-5">
          {/* Title */}
          <div className="d-flex align-items-center mb-3">
            <h4 className="fw-bold mb-0">Explore Top Tourist Places</h4>
            <span className="badge bg-danger text-white ms-2">NEW</span>
          </div>
          {/* Card List */}
          <div className="row g-3 flex-nowrap overflow-auto" style={{scrollSnapType: 'x mandatory'}}>
            {/* Card 1 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
              <div className="card h-100">
                <div className="row g-0 align-items-center">
                  <div className="col-5">
                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/Explorecities_Udaipur.png?t=1?w=256&q=75" className="img-fluid rounded-start" alt="Udaipur" />
                  </div>
                  <div className="col-7">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Udaipur</h6>
                      <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
              <div className="card h-100">
                <div className="row g-0 align-items-center">
                  <div className="col-5">
                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/Explorecities_Ahmedabad.png?t=1?w=256&q=75" className="img-fluid rounded-start" alt="Ahemdabad" />
                  </div>
                  <div className="col-7">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Ahemdabad</h6>
                      <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
              <div className="card h-100">
                <div className="row g-0 align-items-center">
                  <div className="col-5">
                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/Explorecities_Jaipur.png?t=1?w=256&q=75" className="img-fluid rounded-start" alt="jaipur" />
                  </div>
                  <div className="col-7">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Jaipur</h6>
                      <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Card 4 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
              <div className="card h-100">
                <div className="row g-0 align-items-center">
                  <div className="col-5">
                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/Explorecities_Agra.png?t=1?w=256&q=75" className="img-fluid rounded-start" alt="Agra" />
                  </div>
                  <div className="col-7">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Agra</h6>
                      <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Card 5 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
              <div className="card h-100">
                <div className="row g-0 align-items-center">
                  <div className="col-5">
                    <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10925563.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                  </div>
                  <div className="col-7">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Polytechnic Colleges</h6>
                      <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Card 6 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
              <div className="card h-100">
                <div className="row g-0 align-items-center">
                  <div className="col-5">
                    <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11250059.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                  </div>
                  <div className="col-7">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Android Application Developers</h6>
                      <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Card 7 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
              <div className="card h-100">
                <div className="row g-0 align-items-center">
                  <div className="col-5">
                    <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10080172.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                  </div>
                  <div className="col-7">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Cardiologists</h6>
                      <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Card 8 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
              <div className="card h-100">
                <div className="row g-0 align-items-center">
                  <div className="col-5">
                    <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11123333.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                  </div>
                  <div className="col-7">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Playgrounds</h6>
                      <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Card 9 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
              <div className="card h-100">
                <div className="row g-0 align-items-center">
                  <div className="col-5">
                    <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10128276.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                  </div>
                  <div className="col-7">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Construction Contractors</h6>
                      <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Card 10 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{minWidth: 250}}>
              <div className="card h-100">
                <div className="row g-0 align-items-center">
                  <div className="col-5">
                    <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11123333.jpg?w=256&q=75" className="img-fluid rounded-start" alt="Building Contractors" />
                  </div>
                  <div className="col-7">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Playgrounds</h6>
                      <a href="#" className="card-link text-primary">Explore <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>{/* <i class="fa-solid fa-angle-right"></i> Font Awesome fontawesome.com */}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="p_tbdr">
        <div>
          <p>
          </p><div>
            <div className="social-icons">
              <span>Follow us on</span>
              <a href="https://www.facebook.com/JustDial"><i className="fab fa-facebook-f" /></a>
              <a href="https://www.youtube.com/user/justdialind"><i className="fab fa-youtube" /></a>
              <a href="https://www.instagram.com/jd_justdial"><i className="fab fa-instagram" /></a>
              <a href="https://www.linkedin.com/company/justdial"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <h1>One-Stop for All Local Businesses, Services, &amp; Stores Nearby Across India</h1> 
          <p>Welcome to Justdial, your 'one stop shop' where you are assisted with day-to-day and exclusive planning and purchasing activities. We take pride in our iconic customer support number, 8888888888 and the fact that we own a strong hold on local business information pan India.</p>
          <p>Our service extends from providing address and contact details of business establishments around the country, to making orders and reservations for leisure, medical, financial, travel and domestic purposes. We enlist business information across varied sectors like Hotels, Restaurants, Auto Care, Home Decor, Personal and Pet Care, Fitness, Insurance, Real Estate, Sports, Schools, etc. from all over the country. Holding information right from major cities like Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Ahmedabad and Pune our reach stretches out to other smaller cities across the country too.</p>
          <p>Our 'Free Listing' feature gives a platform to showcase varied specialities. We then furnish you with the information via phone, SMS, web, App and WAP as well as, create a space for you to share your experiences through our 'Rate &amp; Review' feature. Through the 'Best Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you are offered the best bargains in the market.</p>
        </div>
        <div className="container my-5 p_foot">
          <h5 className="mb-4 fw-semibold">Some of our services that will prove useful to you on a day-to-day basis are :</h5>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* B2B */}
            <div className="col text-center">
              <div className="service-box">
                <i className="fa-solid fa-handshake" />
                <h6 className="mt-2">B2B</h6>
                <p className="mb-0">Experience the ultimate B2B portal by Justdial. You can explore countless diverse categories, innumerable top-quality vendors, and an unmatched wholesale experience. You'll find everything you need for B2B requirements on this exclusive platform. Our interactive interface allows you to apply relevant filters, ascertain the best rates, and get instant assistance via chat.</p>
              </div>
            </div>
            {/* All India */}
            <div className="col text-center">
              <div className="service-box">
                <i className="fa-solid fa-globe-asia" />
                <h6 className="mt-2">All India</h6>
                <p className="mb-0">Elevate your search for B2B requisites. From lead generation to promoting and selling products/services, Justdial enables enterprises to reach vast audiences all across India. Embracing digital strategies, Justdial India encompasses manufacturers, dealers, suppliers, vendors, wholesalers, and more, offering convenience in the B2B market space and empowering businesses nationwide.</p>
              </div>
            </div>
            {/* Packers and Movers */}
            <div className="col text-center">
              <div className="service-box">
                <i className="fa-solid fa-truck-moving" />
                <h6 className="mt-2">Packers and Movers</h6>
                <p className="mb-0">If you’re relocating to another place, or even if you just want to send some belongings elsewhere, find the best deals on the most reliable packers and movers for your location. Get quotes from multiple agencies, read reviews from previous customers, and check ratings before making a selection for a hassle-free experience.</p>
              </div>
            </div>
            {/* Order Food Online */}
            <div className="col text-center">
              <div className="service-box">
                <i className="fa-solid fa-utensils" />
                <h6 className="mt-2">Order Food Online</h6>
                <p className="mb-0">You are just three clicks away from placing an order and exploring a wide range of exotic cuisines. Order food online with Justdial and get your favourite food delivered at your doorstep. Search for restaurants, view reviews and ratings, avail discounts and order your food.</p>
              </div>
            </div>
            {/* Jobs */}
            <div className="col text-center">
              <div className="service-box">
                <i className="fa-solid fa-briefcase" />
                <h6 className="mt-2">Jobs</h6>
                <p className="mb-0">Providing pertinent jobs to job seekers and relevant profiles to employers, this service will help you reach out to employers and vice-versa across industry verticals, experience levels and geographies.</p>
              </div>
            </div>
            {/* Movies */}
            <div className="col text-center">
              <div className="service-box">
                <i className="fa-solid fa-film" />
                <h6 className="mt-2">Movies</h6>
                <p className="mb-0">This gives you access to book tickets and keep updated with the latest movies. With the provision of a synopsis, cast, crew and trailer, you can make a better choice in the movie you would like to watch.</p>
              </div>
            </div>
            {/* Spa & Salon */}
            <div className="col text-center">
              <div className="service-box">
                <i className="fa-solid fa-spa" />
                <h6 className="mt-2">Spa &amp; Salon</h6>
                <p className="mb-0">Skip the wait to get pampered at a spa or a salon. In a few clicks, 'Book an Appointment' online through Justdial before your next visit.</p>
              </div>
            </div>
            {/* Repair & Services */}
            <div className="col text-center">
              <div className="service-box">
                <i className="fa-solid fa-screwdriver-wrench" />
                <h6 className="mt-2">Repair &amp; Services</h6>
                <p className="mb-0">Find the 'Best Deal', be it for repairing your air-conditioner, getting your car serviced or cleaning your water purifier and drive your utility problems away.</p>
              </div>
            </div>
            {/* Doctor Appointment */}
            <div className="col text-center">
              <div className="service-box">
                <i className="fa-solid fa-user-doctor" />
                <h6 className="mt-2">Doctor Appointment</h6>
                <p className="mb-0">Find the suitable medical specialist to take care of your health and well-being. Healthcare made easy.</p>
              </div>
            </div>
          </div>
          <p>Some of the other services that can be of assistance to you for leisure, health and home convenience are - Pest Control, Skin Care Clinics, Painters, Laundry Services, Interior Designers, Mobile Phone Repair, Vaccination Centres, Internet Service Providers, etc. With an endless number of things under the sun, you can be sure this will be your 'One Stop Shop' to find everything and more.</p>
        </div>
        <p>Copyrights 2008-25.  All Rights Reserved.PrivacyTermsInfringement</p>
      </footer>
      )
      {'}'}
      export default App
    </div></div>
