import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer>
      <div className="section bg-dark">
        <Container>
          <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <h3>mono</h3>
                  <ul className="list-inline-dash margin-top-30">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                  <p className="margin-top-10">&copy; 2020 Flatheme, All Rights Reserved.</p>
                </div>
                <div className="col-12 col-md-6 text-md-right">
                  <ul className="list-unstyled">
                    <li>121 King St, Melbourne VIC 3000</li>
                    <li>contact@example.com</li>
                    <li>+(123) 456 789 01</li>
                  </ul>
                  <ul className="list-inline-sm icon-sm margin-top-20">
                    <li><a className="button-circle button-circle-sm button-circle-outline-white" href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a className="button-circle button-circle-sm button-circle-outline-white" href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a className="button-circle button-circle-sm button-circle-outline-white" href="#"><i className="fab fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
        </Container>
      </div>
    </footer>
  )
}
