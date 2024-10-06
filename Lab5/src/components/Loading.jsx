import React from 'react'

const LoadLogo = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 left-0 right-0"
      style={{ zIndex: 10, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
    >
      <div class="spinner-border" role="status"></div>
      <span class="sr-only"></span>
    </div>
  )
}

const Loading = ({ isLoading, children }) => {
  return (
    <React.Fragment>
      {isLoading && <LoadLogo />}

      {children}
    </React.Fragment>
  )
}

export default Loading
