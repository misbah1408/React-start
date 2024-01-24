import React from 'react'

export default function NavBar() {
  return (
    <header>
    <div className="nav-bar">
        <div className="logo">

        </div>
        <div className="add">
            <span>Other</span>
            <p>Mangaluru,Karnataka 575001,India</p>
            <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Search</span>
        </div>
        <div className="off">
            <img width="20" src="https://img.icons8.com/external-jumpicon-line-ayub-irawan/32/external-badge-e-commerce-jumpicon-line-jumpicon-line-ayub-irawan.png" alt="external-badge-e-commerce-jumpicon-line-jumpicon-line-ayub-irawan"/>
            <span>Offers<sup>NEW</sup></span>
        </div>
        <div className="help">
            <img width="20" src="https://img.icons8.com/ios/50/web-help.png" alt="web-help"/>
            <span>Help</span>
        </div>
        <div className="sign">
            <img width="20" src="https://img.icons8.com/metro/26/guest-male.png" alt="guest-male"/>
            <span>Sign In</span>
        </div>
        <div className="cart">
            <img width="20" height="20" src="https://img.icons8.com/material-outlined/20/shopping-cart--v1.png" alt="shopping-cart--v1"/>
            <span>Cart</span>
        </div>
    </div>
</header>
  )
}
