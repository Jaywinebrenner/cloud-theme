"use client"
import React from "react";
import Slider from "react-slick";

export default function Portfolio() {

    const portfolioData = [

        {
            image: "/portfolio/jake-mockup.png",
            text: "Drummer Website",
            url: "https://www.jakemorrisdrums.com"
        },
        {
            image: "/portfolio/ericcrespo-mockup.png",
            text: "Music Engineer Website",
            url: "https://www.ericcrespo.com"
        },
        {
            image: "/portfolio/landing-page.png",
            text: "Cumulus Landing Page Template",
            url: "https://landing-page-template-tau.vercel.app/"
        },
        {
            image: "/portfolio/jay-mockup.png",
            text: "Web Developer Website",
            url: "https://www.jaywinebrenner.com"
        },
    ]


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156 156" width="156" height="156">
            <title>next-arrow-svg</title>
            <defs>
                <image  width="155" height="153" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACZAQMAAAACZ9rEAAAAAXNSR0IB2cksfwAAAAZQTFRFAAAA/pgB1KLXkQAAAAJ0Uk5TAP9bkSK1AAABsUlEQVR4nJWXsXHCQBBFdaNAoehALdCBWrIrECXQijtQCdABCh14fM4IGMTuMjDM/kdgRZoXwNPd3u6/0jyeTX2+lufb9gDwYw+wbhSWX4DtD8DuG2C/AByOAMcvgNMnwPVPYbkCbC8AuzPAvgIcTgDHGeC0A7g2CssVYHsB2J0B9hXgcAI4zgCnHcC1UWiaCk1ToWkqNE2FpqnQNBWapkLTFOiaAl1ToGsKdE2BrinQNQW6pkDXzDA0MwzNl2cpD80M+wowNDMMzQxDM8O1UXjXTDBrBsyaAbNmwKwZMGsGzJoBs6ZD0XQomg5F06FoOhRNh6LpUDQdiqZB1TSomgZV06BqGlRNg6ppUDUNqua/IP4m/jt64hfht+Mq4XriyvMe4W7ivmOFYC1h1WF9YiVzzePpwHOEJw7PJp5iPO/YGbiHYLfBvoQdDHsddsUsurzttNyTsXtjn8eJgLMDpwzOI5xcPONwGuLcxAmLsxinNs53TAKcGTBdYA7BxILZBlMQ5iVMVpzBMK1hrsMEiFkRUyXmT0yqnGkx/WJOxkSN2RtTOuZ5TP58R8DbxMu94wZGcBSph+WmZAAAAABJRU5ErkJggg=="/>
            </defs>
            <style>
            </style>
            <g id="Layer">
                <g id="Layer">
                    <use id="Layer 1" href="#img1" x="0" y="3"/>
                </g>
            </g>
        </svg>
        
      ),
  
      prevArrow: (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156 156" width="156" height="156">
            <title>next-arrow-svg</title>
            <defs>
                <image  width="155" height="153" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACZAQMAAAACZ9rEAAAAAXNSR0IB2cksfwAAAAZQTFRFAAAA/pgB1KLXkQAAAAJ0Uk5TAP9bkSK1AAABsUlEQVR4nJWXsXHCQBBFdaNAoehALdCBWrIrECXQijtQCdABCh14fM4IGMTuMjDM/kdgRZoXwNPd3u6/0jyeTX2+lufb9gDwYw+wbhSWX4DtD8DuG2C/AByOAMcvgNMnwPVPYbkCbC8AuzPAvgIcTgDHGeC0A7g2CssVYHsB2J0B9hXgcAI4zgCnHcC1UWiaCk1ToWkqNE2FpqnQNBWapkLTFOiaAl1ToGsKdE2BrinQNQW6pkDXzDA0MwzNl2cpD80M+wowNDMMzQxDM8O1UXjXTDBrBsyaAbNmwKwZMGsGzJoBs6ZD0XQomg5F06FoOhRNh6LpUDQdiqZB1TSomgZV06BqGlRNg6ppUDUNqua/IP4m/jt64hfht+Mq4XriyvMe4W7ivmOFYC1h1WF9YiVzzePpwHOEJw7PJp5iPO/YGbiHYLfBvoQdDHsddsUsurzttNyTsXtjn8eJgLMDpwzOI5xcPONwGuLcxAmLsxinNs53TAKcGTBdYA7BxILZBlMQ5iVMVpzBMK1hrsMEiFkRUyXmT0yqnGkx/WJOxkSN2RtTOuZ5TP58R8DbxMu94wZGcBSph+WmZAAAAABJRU5ErkJggg=="/>
            </defs>
            <style>
            </style>
            <g id="Layer">
                <g id="Layer">
                    <use id="Layer 1" href="#img1" x="0" y="3"/>
                </g>
            </g>
        </svg>
      ),
  };
  return (
    <div className="portfolio">
        <div className="container">
            <h2>Portfolio</h2>
            <div className="portfolio-wrapper">
                <Slider {...settings}>
 
                    {
                        portfolioData && portfolioData.map((card, i)=> {
                            return (
                                <div className="card" key={`portfolio-card=${i}`}>
                                    <div className="image-wrapper">
                                        <img  loading="lazy"  src={card.image}/>     
                                    </div>
                                    <div className="text-wrapper">
                                        <a target="_blank" className="portfolio-btn" href={card.url}>
                                            {card.text}
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }


                </Slider>
            </div>
        </div>
    </div>
  );
}