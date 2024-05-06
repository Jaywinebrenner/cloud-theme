import React from 'react';

const ThreeCard = () => {
    const cardsData = [
        {
            title: "CONSULTING",
            icon: '/info-cards/icon1.png',
            content: ["Whether you have been around the digital block and know the ins-and-outs of launching a website or you are brand new to the world of websites, we can help you choose the best path for your needs."],
            button: true
        },
        {
            title: "DESIGN & BUILD",
            icon: '/info-cards/icon2.png',
            content: ["We have years of experience building responsive, performant and beautiful websites. It is something we love to do."],
        },
        {
            title: "MAINTENANCE",
            icon: '/info-cards/icon3.png',
            content: [
                "We provide ongoing support and maintenance to ensure your site remains secure, up-to-date, and performing at its best. Whether you need minor updates or major enhancements, our team is here to help you every step of the way."
            ]
        },
    ];
    
    


    return (
        <section className="three-card">
            <div className="container">
                <div className='title-content-wrapper'>
                    <h2>What We Do</h2>
                    <p>In today&apos;'s digital age, having an online presence is crucial for any business to reach a wider audience. We can help you do just that!</p>
                </div>
                <div className="three-card__wrapper">
                    {cardsData && cardsData.map((card, i) => (
                        <div className="card" key={`card-three-key=${i}`}>
                            <div className="top">
                                <h3>{card.title}</h3>
                            </div>
                            <div className="bottom">
                                <img src={card.icon} alt={card.title} />
                                <div className="subtitle">
                                    {card.content.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ThreeCard;
