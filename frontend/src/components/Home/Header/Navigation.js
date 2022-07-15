import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <div className="APP">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
        <div className="container-fluid">
          <Link
            to="/all-products"
            className="navbar-brand font-weight-bold d-block d-lg-none "
          >
            Shop
          </Link>
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
                <Link to="/all-products" className="nav-link font-weight-bold text-uppercase">
                    All
                </Link>
              </li>
              <li className="nav-item dropdown megamenu dropdown-hover px-3">
                <Link to="/"
                  id="megamneu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="nav-link dropdown-toggle font-weight-bold text-uppercase "
                >
                  New Arrivals
                </Link>
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
                                  <Link
                                    to="/free-style"
                                    className="nav-link text-small pb-0"
                                  >
                                    Free Style
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/men-shirt"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Shirts
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/hoodies"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Sweatshirts & Hoodies
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Jackets
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Unisex
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Trousers
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Shorts
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Suits & Tailoring
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Coats
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Women
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <Link
                                    to="/women-bags"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Bags
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Essentials
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Personal Styling
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Special Occasions
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Children
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Underpants
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Boxer shorts
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Undershirts
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Pyjamas
                                  </Link>
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
                <Link
                  id="megamneu"
                  to="/menCategory"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"
                >
                  Men
                </Link>
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
                                  <Link
                                    to="/men-t-shirt"
                                    className="nav-link text-small pb-0 "
                                  >
                                    T-shirts & Polos
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Shorts
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/hoodies"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Sweatshirts & Hoodies
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Jackets
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Officials
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Coats
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Trousers
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/men-shirt"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Shirts
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Suits & Tailoring
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Highlights
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Unisex
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Essentials
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Personal Styling
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Special Occasions
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Shoes
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Designer shoes
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Outdoor shoes
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Loafers
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Sneaker
                                  </Link>
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
                <Link
                  id="megamneu"
                  to="/womenCategory"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"
                >
                  Women
                </Link>
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
                                  <Link
                                    to="/womenCategory"
                                    className="nav-link text-small pb-0"
                                  >
                                    Dresses
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    T-shirts & tops
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Shirts & Blouses
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Jackets & Blazers
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                CASUALS
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Jumpsuits
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Shorts
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Jeans
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Skirts
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Highlights
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Unisex
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    More Sustainable Fashion
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Plus Size
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Swimwear
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Shoes
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    High heels
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Pumps
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Trainers
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Sandals
                                  </Link>
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
                <Link
                  id="megamneu"
                  to="kidsCategory"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"
                >
                  Kids
                </Link>
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
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0"
                                  >
                                    Dresses
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    T-Shirts & Tops
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Trousers & Jeans
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Sets
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Boys
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Trousers & Jeans
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Trousers & Jeans
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Shirts
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Shorts
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Girls Shoes
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Sandals
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Ballet pumps
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Ankle boots
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Trainers
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                Boys Shoes
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Loafers
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Lace-up shoes
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Trainers
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    Boots
                                  </Link>
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
