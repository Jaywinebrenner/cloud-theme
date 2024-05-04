"use client"

import React, { useEffect } from 'react';

const SideAccordion = () => {
    const cards = [
        {
            title: "SET-UP & TRAINING",
            content: [
                "A lacus vestibulum sed arcu. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae auctor eu augue ut lectus arcu bibendum at. Ultrices dui sapien eget mi proin sed libero enim. Et tortor at risus viverra adipiscing at in tellus integer. Elit pellentesque habitant morbi tristique senectus. Ultrices tincidunt arcu non sodales. In arcu cursus euismod quis. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Magna etiam tempor orci eu lobortis. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Vestibulum sed arcu non odio euismod lacinia at quis.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ]
        },
        {
            title: "MONTHLY MAINTENANCE",
            content: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Purus gravida quis blandit turpis cursus in hac habitasse. Pulvinar sapien et ligula ullamcorper malesuada proin. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Mollis aliquam ut porttitor leo a diam. Id aliquet lectus proin nibh nisl condimentum id venenatis. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Bibendum enim facilisis gravida neque. Congue quisque egestas diam in arcu cursus. Posuere morbi leo urna molestie. Dignissim convallis aenean et tortor at risus viverra. Vulputate dignissim suspendisse in est. Tortor condimentum lacinia quis vel. Pharetra diam sit amet nisl suscipit adipiscing. Vestibulum morbi blandit cursus risus at ultrices mi tempus."
            ]
        },
        {
            title: "PAYROLL",
            content: [
                "Nunc scelerisque viverra mauris in aliquam sem. Odio tempor orci dapibus ultrices in iaculis nunc. At risus viverra adipiscing at in tellus integer. Et tortor consequat id porta nibh venenatis. Quis auctor elit sed vulputate mi sit amet. Eu feugiat pretium nibh ipsum consequat nisl. Feugiat nibh sed pulvinar proin gravida. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Sagittis purus sit amet volutpat consequat mauris nunc congue. Accumsan sit amet nulla facilisi morbi. Mattis aliquam faucibus purus in massa tempor nec feugiat.",
                "Purus gravida quis blandit turpis cursus in hac habitasse. Pulvinar sapien et ligula ullamcorper malesuada proin. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Mollis aliquam ut porttitor leo a diam. Id aliquet lectus proin nibh nisl condimentum id venenatis. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Bibendum enim facilisis gravida neque. Congue quisque egestas diam in arcu cursus. Posuere morbi leo urna molestie. Dignissim convallis aenean et tortor at risus viverra. Vulputate dignissim suspendisse in est. Tortor condimentum lacinia quis vel. Pharetra diam sit amet nisl suscipit adipiscing. Vestibulum morbi blandit cursus risus at ultrices mi tempus."
            ]
        },
        {
            title: "RESOURCES",
            content: [
                "Purus gravida quis blandit turpis cursus in hac habitasse. Pulvinar sapien et ligula ullamcorper malesuada proin. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Mollis aliquam ut porttitor leo a diam. Id aliquet lectus proin nibh nisl condimentum id venenatis. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Bibendum enim facilisis gravida neque. Congue quisque egestas diam in arcu cursus. Posuere morbi leo urna molestie. Dignissim convallis aenean et tortor at risus viverra. Vulputate dignissim suspendisse in est. Tortor condimentum lacinia quis vel. Pharetra diam sit amet nisl suscipit adipiscing. Vestibulum morbi blandit cursus risus at ultrices mi tempus.",
                "A lacus vestibulum sed arcu. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae auctor eu augue ut lectus arcu bibendum at. Ultrices dui sapien eget mi proin sed libero enim. Et tortor at risus viverra adipiscing at in tellus integer. Elit pellentesque habitant morbi tristique senectus. Ultrices tincidunt arcu non sodales. In arcu cursus euismod quis. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Magna etiam tempor orci eu lobortis. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Vestibulum sed arcu non odio euismod lacinia at quis."
            ]
        }
    ];

    useEffect(() => {
        const initPricing = () => {
            const pricingSections = document.querySelectorAll('.side-accordion');
            pricingSections.forEach((pricingSection) => {
                const buttons = pricingSection.querySelectorAll('.side-accordion-button');
                const contents = pricingSection.querySelectorAll('.card-content');

                if (contents.length > 0) {
                    contents[0].style.display = 'block';
                    buttons[0].classList.add('active');
                }

                buttons.forEach((button, index) => {
                    button.addEventListener('click', () => {
                        contents.forEach((content) => {
                            content.style.display = 'none';
                        });
                        buttons.forEach((btn) => {
                            btn.classList.remove('active');
                        });

                        contents[index].style.display = 'block';
                        button.classList.add('active');
                    });
                });
            });
        };

        initPricing();
    }, []);

    return (
        <section className="side-accordion">
            <div className="container">
                <div className="top">
                    <h2>Our Services</h2>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                </div>
                <div className="side-accordion__main">
                    <div className="nav">
                        <div className="side-accordion-buttons">
                            {cards.map((card, i) => (
                                <div key={`card-key=${i}`} className="side-accordion-button" data-i={i}>
                                    {card.title}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="content">
                        {cards && cards.map((card, i) => (
                            <div key={`card-content-key=${i}`} className="card-content" id={`card-content-${i}`}>
                                {card.content.map((paragraph, index) => (
                                    <p key={`paragraph-${index}`}>{paragraph}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SideAccordion;
