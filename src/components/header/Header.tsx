import './Header.scss';
import Logo from '../../personio_logo.svg'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="" height="36"/>
                {/*talents<span>Picker</span>*/}
            </div>
            <div className="user-info">
                Welcome Maria
                <div className="user-image">
                    <img src="https://randomuser.me/api/portraits/women/28.jpg" width="100%" alt=""/>
                </div>
            </div>

        </header>
    )
}

export default Header;
