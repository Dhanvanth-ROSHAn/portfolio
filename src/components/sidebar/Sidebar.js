import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import photo from'../images/photo.jpg';
class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'> <h2>Portfolio</h2>
        <div style={{ color: 'black', fontWeight: 'bold' }} className='tagtop'>
          # programing
        </div>
        <div style={{ color: 'black', fontWeight: 'bold' }} className=''>
          # hello_world
        </div>
        <div style={{ color: 'black', fontWeight: 'bold' }} className=''>
          # coding
        </div>
        <h1>
          <Link smooth to='/#start' className='h1_links'>
            DHANVANTH ROSHAN
          </Link>
        </h1>

        <img src={photo} />
        <p style={{ color: 'black', fontWeight: 'bold' }} className='gmail'>
          <a
            href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL'
            rel='opener noreferrer'
            target='_blank'
            className='fa fa-envelope'
          ></a>{' '}
          imdhanvanthroshan@gmail.com
        </p>

        <ul className='sidebar-nav'>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#projects' className='links'>
              Projects
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#about' className='links'>
              About
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#interest' className='links'>
              Interest
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#education' className='links'>
              Education
            </Link>
          </li>
          {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
        </ul>

        <div className='flip-card-back'>
          <ul className='sidebar-nav'>
            <li className='sidebar-nav-icons'>
              <a
                href='https://github.com/Dhanvanth-ROSHAn'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-github fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='https://www.linkedin.com/in/dhanvanth-roshan-p-9597b9262/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bj%2FZrYO7ySnqWAPgfwFh7Wg%3D%3D'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-linkedin fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='https://twitter.com/DhanvanthRoshan?t=t__aQFx4QRp33tonLHixIA&s=08'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-twitter fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='https://www.instagram.com/im_r_o_s_h_a_n/?next=%2F/'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-instagram fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='imdhanvanthroshan@gmail.com'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-envelope fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='https://www.facebook.com/lovely.dhanvanth'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-facebook fa-lg'
              ></a>
            </li>
          </ul>
        </div>
        <div
          style={{
            color: 'black',
            fontWeight: 'bold',
            paddingTop: '30%'
          }}
          className='tagtop'
        >
          Made with{' '}
          <a href='#' style={{ textDecoration: 'none' }} className='fa fas fa-heart fa-lg'></a> by
          me.
        </div>
      </div>
    );
  }
}

export default Sidebar;
