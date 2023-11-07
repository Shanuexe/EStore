import React from 'react';


const Content = () => {
  return (
    <>
    <div className='imglanding'>
    <div className='decorLandingPage'>
    <h6>Big Offer 50% Off</h6>
    <h3>New Collection</h3>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
    <button className='btnshop'>Shop Now</button>
    </div>
    </div>
    
    <div className="agileits-services">
        <div className="no-gutters agileits-services-row row">
            <div className="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3 payment">
                <span className="fas fa-sync-alt p-4 fa-2xl"></span>
                <h4 className="mt-2 mb-3">30 days replacement</h4>
            </div>
            <div className="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3 gift">
                <span className="fas fa-gift p-4 fa-2xl"></span>
                <h4 className="mt-2 mb-3">Gift Card</h4>
            </div>

            <div className="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3 payment">
                <span className="fas fa-lock p-4 fa-2xl"></span>
                <h4 className="mt-2 mb-3">secure payments</h4>
            </div>
            <div className="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3 gift">
                <span className="fas fa-shipping-fast p-4 fa-2xl"></span>
                <h4 className="mt-2 mb-3">free shipping</h4>
            </div>
        </div>
    </div>

    <div class="row no-gutters pb-5">
        <div class="col-sm-4">
            <div class="hovereffect">
                <div class="overlay">
                    <h5>women's fashion</h5>
  
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="hovereffect">
                <div class="overlay">
                    <h5>men's fashion</h5>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="hovereffect">
                <div class="overlay">
                    <h5>kid's fashion</h5>
  
                </div>
            </div>
        </div>
    </div>

    </>
    
  )
}
 

export default Content