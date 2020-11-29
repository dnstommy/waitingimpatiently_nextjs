import Container from '../components/container'
import HeaderLogo from '../components/header-logo'
import HeaderNavigation from '../components/header-navigation'
import HeaderSocial from '../components/header-social'

export default function Header() {
  return (
    <div className="header center dark">
        <Container>
            <HeaderLogo />
            <HeaderNavigation />
            <HeaderSocial />
            <button className="header-toggle">
                <span></span>
            </button>
        </Container>
    </div>
  )
}