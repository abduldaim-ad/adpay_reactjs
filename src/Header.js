import React from 'react'

const Header = ()=> {
  return (
    <>
        <header>
            <section className='container main-hero-container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 header-left-side d-flex
                    justify-content-center flex-column align-items-start'>
                        <h1 className='display-2'>Online Payment Made <br/> Easy For You.</h1>
                        <p className='main-hero-para'>
                            This is paragraph
                        </p>
                        <h3>
                            Get early access for you
                        </h3>
                        <div className='input-group mt-3'>
                            <input 
                                type='text' 
                                className='rounded-pill w-75 me-3 p-2 form-control-text'
                                placeholder='Enter Your Email'/>
                    <div className='input-group-button'>
                        Get it now
                    </div>
                        </div>
                    </div>
{/* ------------- main header right side -------------------*/}
                        <div className='col-12 col-lg-6 header-right-side d-flex
                        justify-content-center align-items-center main-herosection-images'>
                            <img src='https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/the-top-10-most-popular-online-payment-solutions-5e9978d564973-1520x800.png' alt='image'
                            className='img-fluid img'/>
                            <img src='https://i.dawn.com/primary/2021/07/60f2565aba75e.png' alt='image'
                            className='img-fluid main-hero-img2'/>
                        </div>
                </div>
            </section>
        </header>
    </>
  )
}

export default Header