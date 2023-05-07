import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
        <div className='col mb-3'>
          <a className=''>
            <img src='img/logo.png' className='bi me-2' width={150} height={150}>
            </img>
          </a>
          <p>
            Лучшие путешествия
          </p>
        </div>
        <div className='col mb-3'>
        </div>
        <div className='col mb-3'>
        </div>
          <div className='col mb-4'>
            <h5>О нас</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Блог</a>
              </li>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Документы</a>
              </li>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Наши офисы</a>
              </li>
            </ul>
          </div>
          <div className='col mb-4'>
            <h5>Социальные сети</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>В контакте</a>
              </li>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Одноклассники</a>
              </li>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Facebook</a>
              </li>
            </ul>
          </div>
      </footer>
    </div>
  )
}

export default Footer