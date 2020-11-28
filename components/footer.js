import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer>
      <div class="section bg-dark">
        <Container>
          <div class="row align-items-center">
                <div class="col-12 col-md-6">
                  <h3>mono</h3>
                  <ul class="list-inline-dash margin-top-30">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                  <p class="margin-top-10">&copy; 2020 Flatheme, All Rights Reserved.</p>
                </div>
                <div class="col-12 col-md-6 text-md-right">
                  <ul class="list-unstyled">
                    <li>121 King St, Melbourne VIC 3000</li>
                    <li>contact@example.com</li>
                    <li>+(123) 456 789 01</li>
                  </ul>
                  <ul class="list-inline-sm icon-sm margin-top-20">
                    <li><a class="button-circle button-circle-sm button-circle-outline-white" href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a class="button-circle button-circle-sm button-circle-outline-white" href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a class="button-circle button-circle-sm button-circle-outline-white" href="#"><i class="fab fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
        </Container>
      </div>
    </footer>
  )
}
