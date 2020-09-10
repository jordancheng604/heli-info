import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import '../styles/AboutPage.scss';

export default function About() {
    return (
        <div >
            <NavBar/>
            <div className='about'>
            <h1>About Us</h1>
            <div className='about__us'>
            <p>
                The original intent of this is to help share and spread information about Aviation Helicopters and saying Thank-You to those that serve and have served.</p>

                <p> Thank you for the sacrifices that you and your family have made. </p>

                <p>We believe that there could be more appreciation for those that serve and have served; therefore, please consider our Veterans if you are looking into volunteering or donating.</p>

                <p>This project started with Canadian Military Helicopters, and we would like to slowly grow and add more Military Aircraft and Equipment to the website. It is dependant on a lot of factors so please bear with us if adding new content is slow.</p>

                <p>Also, we are a small team, so please be patient with us if you do not see the aircraft you are looking for.</p>

                <p>Our goal is to eventually have all NATO military equipment listed on our website.</p>

                <p>There have been unforeseen difficulties in collecting appropriate information and content as to not break any copyright laws, so please be patient if you do not see any new equipment on here.</p>

                <p>If you would like to see your favorite Aircraft listed on our website. Feel free to use the Contact page and let us know. And if you have a favorite picture, that you own, and would like to have it on our website please kindly reach out to us and we'll see what can be done.</p>
            </div>
            </div>
        </div>
    )
}
