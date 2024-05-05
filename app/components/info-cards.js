import React from 'react';

const InfoCards = () => {
  const cardsData = [
    {
      title: "CONSULTING",
      icon: '/info-cards/icon1.png',
      content: "Whether you&apos;ve been around the digital block and know the ins-and-outs of launching a website or you are brand new to the world of websites, we can help you choose the best path for your needs.",
      button: true
    },
    {
      title: "DESIGN & BUILD",
      icon: '/info-cards/icon2.png',
      content: "We have years of experience building responsive, performant and beautiful websites. It is something we love to do.",
    },
    // Other card objects...
  ];

  return (
    <section id="info-cards" className="info-cards">
      <div className="container">
        <div className="info-cards__wrapper">
          <div className="title-wrapper">
            <h2>What We Do</h2>
            <p>In today&apos;s digital age, having an online presence is crucial for any business to reach a wider audience. We can help you do just that!</p>
          </div>

          <div className="cards-wrapper">
            {cardsData.map((card, i) => (
              <div className="card" key={`card-key=${i}`}>
                <div className="card__top">
                  <h3>{card.title}</h3>
                </div>
                <div className="card__bottom">
                  <div className="icon-wrapper">
                    <img src={card.icon} alt={card.title} />
                  </div>
                  <p>{card.content}</p>
                  {card.button && (
                    <div className="button-wrapper">
                      <a href="/" className="button">Learn More</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
