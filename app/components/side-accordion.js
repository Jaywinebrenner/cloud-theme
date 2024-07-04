"use client"
import React, { useEffect } from 'react';









const SideAccordion = () => {
    const cards = [
        {
            title: "BASIC PLAN",
            content: [
                // "If your needs do not require frequent updates, the BASIC PLAN is your best option.",
                // "A 3-5 page website is generally around $1300 + a monthly Hosting / Retainer fee.",
                // "A single page website would be signifcantly less of course.",
                // "The Hosting / Retainer fee includes hosting the website for $20 a month and ensures our availability for content updates and further enhancements.",
                // "If you do need to update the copy and images on the website, it is $30 an hour with a 1 hour minimum. Generally all basic updates can be done within 1 hour."
                "If you need a simple static website and do not require frequent updates, the BASIC PLAN is an excellent choice. The cost varies based on several factors, but typically falls around the $1500 zone.",
                "There is a Hosting/Retainer fee of $50 a month which covers the cost of hosting your website and guarantees our support for content updates and further improvements.",
                "For updates to copy and images on the website, we offer flexible hourly rates with a minimum time requirement of one hour. Most basic updates are efficiently handled within this timeframe.",
                "A BASIC PLAN website is a cost-effective simplified solution to establish your online presence.",
            ]
        },
        {
            title: "UPDATEABLE PLAN",
            content: [
                // "If you would like full control over the content of your website and would like to change copy and images whenever you like, the UPDATABLE PLAN is best.",
                // "We would build your site in WordPress, a globally renowned Content Management System (CMS) known for its versatility and ease of use. With WordPress, you'll have access to an intuitive dashboard to update content whenever you want.",
                // "A 3-5 page website is generally around $1300 + a monthly Hosting / Retainer fee.",
                // "A single page website would be signifcantly less.",
                // "The Hosting / Retainer fee includes hosting the website for $30 a month and ensures our availability for any questions regarding the Content Management System."
                "If you would like full control over the content of your website and would like to change copy and images whenever you like, the UPDATABLE PLAN is best.",
                "We would build your site in WordPress, a globally renowned Content Management System (CMS) known for its versatility and ease of use. With WordPress, you'll have access to an intuitive dashboard to update content whenever you want.",
                "A 3+ page website is generally around $3000 + a monthly Hosting / Retainer fee. A single page website would be significantly less.",
                "There is a $50 monthly Hosting/Retainer fee that includes hosting the website and guarantees our availability for any CMS-related inquiries. Alternatively, you are welcome to self-host, in which case we would only charge the retainer fee for support. If you prefer not to manage any content updates at all and simply want to offload all website management, we offer flexible hourly rates to handle everything for you."
            ]
        },
        {
            title: "CUSTOM PLAN",
            content: [
                "If you would like more advanced features on your website like Ecommerce, User Authentication or a searchable Resource Center, let’s collaborate and bring your vision to life!",
                "We can schedule a chat to discuss your goals, preferences, and requirements. We'll work closely with you to understand your vision and iron out the details. We will then provide you with a fair and transparent pricing structure based on the scope of work."
            ]
        }
    ];
    

    // const pricingPointsLeft = [
    //     "How many pages? ",
    //     "Is it a static website or will you require a CMS?",
    //     "Will you be using a template or custom design?",
    //     "Did you want advanced features, like Authentication and E-commerce?",

    // ]
    // const pricingPointsRight = [
        
    //     "Do you need us to source or create your logo and imagery?",
    //     "Did you want Analytics and tracking?",
    //     "And the list goes on...",   
    // ]

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
        <>
        <section className="side-accordion desktop">
            <div className="container">
                <div className="top">
                    <h2>Pricing</h2>
                    {/* <p>This is the tricky part. The range is anywhere from $300+. Yea, not that helpful! In order to accurately price a website, we’d need to know the specifics of your need which we can suss out on once we know the scope. </p> */}
                    {/* <div className='pricing-points-wrapper'>
                        <div className='left'>
                            <ul>
                            {pricingPointsLeft && pricingPointsLeft.map((p, i) => {
                                return (
                                    <li key={`pricing-point-key=${i}`}>{p}</li>
                                )
                            })}
                            </ul>
                        </div>
                        <div className='right'>
                        <ul>
                            {pricingPointsRight && pricingPointsRight.map((p, i) => {
                                return (
                                    <li key={`pricing-point-key=${i}`}>{p}</li>
                                )
                            })}
                            </ul>
                        </div>
                    </div> */}
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

        <section className="side-accordion mobi">
            <div className="container">
                <div className="top">
                    <h2>Pricing</h2>
                    <p>This is the tricky part. The range is anywhere from $300+. Yea, not that helpful! In order to accurately price a website, we’d need to know the specifics of your need which we can suss out on once we know the scope. </p>
                </div>
                <div className='pricing-points-mobi-wrapper'>
                    {cards.map((card, i) => (
                        <div key={`card-mobi-${i}`} className='card-mobi'>
                            <h3>{card.title}</h3>
                            <div className='content-wrapper-mobi'>
                                {card.content.map((paragraph, index) => (
                                    <p key={`paragraph-${index}`}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
};

export default SideAccordion;
