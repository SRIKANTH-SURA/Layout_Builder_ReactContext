import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller">
          <h1 className="layout-text">Layout</h1>
          <ul className="configuration-list">
            <li className="configuration-item">
              <input
                className="input-type"
                type="checkbox"
                defaultChecked={showContent}
                id="content"
                onChange={onChangeContent}
              />
              <label className="label-text" htmlFor="content">
                Content
              </label>
            </li>
            <li className="configuration-item">
              <input
                className="input-type"
                type="checkbox"
                defaultChecked={showLeftNavbar}
                id="leftNavbar"
                onChange={onChangeLeftNavbar}
              />
              <label className="label-text" htmlFor="leftNavbar">
                Left Navbar
              </label>
            </li>
            <li className="configuration-item">
              <input
                className="input-type"
                type="checkbox"
                defaultChecked={showRightNavbar}
                id="rightNavbar"
                onChange={onChangeRightNavbar}
              />
              <label className="label-text" htmlFor="rightNavbar">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
