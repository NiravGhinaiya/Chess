import React from 'react'

const Error404 = () => {
  return (
    <section className="not_found">
      <div className='not_found_content'>
        <div className='not_content'>
          <h1 className="404_text">404</h1>
          <p className="subtitle has-text-centered has-text-danger">
            Error 404 - Page Not Found
            The page you requested could not be found.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Error404
