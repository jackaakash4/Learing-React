import React from 'react'

function PortalDemo() {
  return ReactDOM.createPortal(
    <div>PortalDemo</div>,
    document.getElementById('portal-demo')
  )
}

export default PortalDemo