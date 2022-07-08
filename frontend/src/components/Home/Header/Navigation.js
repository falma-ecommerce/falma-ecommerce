import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Navigation.css";
function Navigation() {
  return (
    <div className="APP">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
        <div className="container-fluid">
          <a
            href="#"
            className="navbar-brand font-weight-bold d-block d-lg-none "
          >
         Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
            <li className="nav-item px-3">
                <a href="/all-products" className="nav-link font-weight-bold text-uppercase">
                 All 
                </a>
              </li>
              <li className="nav-item dropdown megamenu dropdown-hover px-3">
                <a
                  id="megamneu"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="nav-link dropdown-toggle font-weight-bold text-uppercase "
                >
                New Arrivals
                </a>
                <div
                  aria-labelledby="dropdownMenuButton1"
                  className="dropdown-menu border-0 p-0 m-0"
                >
                  <div className="">
                    <div className="row bg-white rounded-0 m-0 shadow-sm">
                      <div className="col-lg-7 col-xl-8">
                        <div className="p-4">
                          <div className="row menu2">
                            <div className="col-lg-6 mb-">
                              <h6 className="font-weight-bold text-uppercase">
                               Men
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0"
                                  >
                                   
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Shirts
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                               Sweatshirts & Hoodies
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Jackets
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              {/* <h6 className="font-weight-bold text-uppercase">
                              
                              </h6> */}
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Trousers
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                 Shorts
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                Suits & Tailoring
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Coats
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                               Women
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                  Unisex
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Essentials
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Personal Styling
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Special Occasions
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                            Children
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Underpants
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Boxer shorts
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Undershirts
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                Pyjamas
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5 col-xl-4 px-5 d-none d-lg-block megaimaga1"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown megamenu dropdown-hover px-3">
                <a
                  id="megamneu"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"
                >
                 Men
                </a>
                <div
                  aria-labelledby="dropdownMenuButton1"
                  className="dropdown-menu border-0 p-0 m-0"
                >
                  <div className="">
                    <div className="row bg-white rounded-0 m-0 shadow-sm ">
                      <div className="col-lg-7 col-xl-8 ">
                        <div className="p-4">
                          <div className="row menu2">
                            <div className="col-lg-6 mb-4 ">
                              <h6 className="font-weight-bold text-uppercase ">
                               Category
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    T-shirts & Polos
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                     Shirts
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Sweatshirts & Hoodies
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Jackets
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              {/* <h6 className="font-weight-bold text-uppercase">
                                MegaMenu heading
                              </h6> */}
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                               Coats
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Trousers
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Shorts
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Suits & Tailoring
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                              Highlights
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Unisex
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Essentials
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Personal Styling
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Special Occasions
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                              Shoes
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Designer shoes
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Outdoor shoes
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                Loafers
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                 Sneaker 
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5 col-xl-4 px-5 d-none d-lg-block megaimaga"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown megamenu dropdown-hover px-3">
              <a
                  id="megamneu"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"
                >
                  Women
                </a>
                <div
                  aria-labelledby="dropdownMenuButton1"
                  className="dropdown-menu border-0 p-0 m-0"
                >
                  <div className="">
                    <div className="row bg-white rounded-0 m-0 shadow-sm">
                      <div className="col-lg-7 col-xl-8">
                        <div className="p-4">
                          <div className="row menu2">
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Category
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0"
                                  >
                                    Dresses
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   T-shirts & tops 
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Shirts & Blouses 
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                  Jackets & Blazers
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              {/* <h6 className="font-weight-bold text-uppercase">
                             
                              </h6> */}
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Jumpsuits
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Shorts
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Jeans
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                  Skirts 
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Highlights
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Unisex
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                 More Sustainable Fashion
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Plus Size
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Swimwear
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Shoes
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   High heels
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Pumps
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Trainers
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                  Sandals
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5 col-xl-4 px-5 d-none d-lg-block megaimage"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown megamenu dropdown-hover px-3">
                <a
                  id="megamneu"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"
                >
                  Kids
                </a>
                <div
                  aria-labelledby="dropdownMenuButton1"
                  className="dropdown-menu border-0 p-0 m-0"
                >
                  <div className="">
                    <div className="row bg-white rounded-0 m-0 shadow-sm">
                      <div className="col-lg-7 col-xl-8">
                        <div className="p-4">
                          <div className="row menu2">
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                              Girls
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0"
                                  >
                                    Dresses
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    T-Shirts & Tops
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                               Trousers & Jeans
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Sets
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Boys
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Trousers & Jeans
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Trousers & Jeans
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Shirts
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Shorts
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                              Girls Shoes 
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Sandals
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Ballet pumps
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Ankle boots
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                Trainers
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                               Boys Shoes
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Loafers

                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Lace-up shoes
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                    Trainers
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0 "
                                  >
                                   Boots
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5 col-xl-4 px-5 d-none d-lg-block megaimagakids"></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
    </div>
  );
}
export default Navigation;