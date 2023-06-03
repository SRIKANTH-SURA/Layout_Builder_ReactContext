import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-container">
              <h1 className="left-heading">Left Navbar Menu</h1>
              <ul className="left-nav-list">
                <li className="left-nav-item">Item 1</li>
                <li className="left-nav-item">Item 2</li>
                <li className="left-nav-item">Item 3</li>
                <li className="left-nav-item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="body-content">
              <h1 className="content-heading">Content</h1>
              <p className="content-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque dignissim laoreet ipsum, vitae congue sapien tempus
                a.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-container">
              <h1 className="right-heading">Right Navbar</h1>
              <ul className="adds-container">
                <li className="add-item">
                  <p className="add-text">Ad 1</p>
                </li>
                <li className="add-item">
                  <p className="add-text">Ad 2</p>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
