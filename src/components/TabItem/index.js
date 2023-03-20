// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, TabSelect, activeTabId} = props
  const {tabId, displayText} = tabDetails

  const clicking = () => {
    TabSelect(tabId)
  }

  return (
    <li
      className={`singleTab ${activeTabId === tabId ? 'active-tab-btn' : ''} `}
    >
      <button className="button" type="button" onClick={clicking}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
