import React from 'react'

const InfoCards = () => {

    const cardsData = [
        {
            title: "CONSULTING",
            icon: '/info-cards/icon1.png',
            content: "Whether you have been around the digital block and know the ins-and-outs of launching a website or you are brand new to the world of websites, we can help you choose the best path for your needs.",
            button: true
          },
          {
            title: "DESIGN & BUILD",
            icon: '/info-cards/icon2.png',
            content: "We have years of experience building responsive, performant and beautiful websites. It is something we love to do.",
          },
        {
            title: "PAYROLL",
            icon: '/info-cards/icon3.png',
            content: "Nunc scelerisque viverra mauris in aliquam sem. Odio tempor orci dapibus ultrices in iaculis nunc. At risus viverra adipiscing at in tellus integer. Et tortor consequat id porta nibh venenatis. Quis auctor elit sed vulputate mi sit amet. Eu feugiat pretium nibh ipsum consequat nisl. Feugiat nibh sed pulvinar proin gravida. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Sagittis purus sit amet volutpat consequat mauris nunc congue. Accumsan sit amet nulla facilisi morbi. Mattis aliquam faucibus purus in massa tempor nec feugiat."
        },
        {
            title: "RESOURCES",
            icon: '/info-cards/icon4.png',
            content: "Purus gravida quis blandit turpis cursus in hac habitasse. Pulvinar sapien et ligula ullamcorper malesuada proin. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Mollis aliquam ut porttitor leo a diam. Id aliquet lectus proin nibh nisl condimentum id venenatis. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Bibendum enim facilisis gravida neque. Congue quisque egestas diam in arcu cursus. Posuere morbi leo urna molestie. Dignissim convallis aenean et tortor at risus viverra. Vulputate dignissim suspendisse in est. Tortor condimentum lacinia quis vel. Pharetra diam sit amet nisl suscipit adipiscing. Vestibulum morbi blandit cursus risus at ultrices mi tempus."
        },
        {
            title: "END OF YEAR & TAX PREP",
            icon: '/info-cards/icon5.png',
            content: "A lacus vestibulum sed arcu. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae auctor eu augue ut lectus arcu bibendum at. Ultrices dui sapien eget mi proin sed libero enim. Et tortor at risus viverra adipiscing at in tellus integer. Elit pellentesque habitant morbi tristique senectus. Ultrices tincidunt arcu non sodales. In arcu cursus euismod quis. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Magna etiam tempor orci eu lobortis. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Vestibulum sed arcu non odio euismod lacinia at quis."
        },
        {
            title: "FINANCIAL STATEMENTS",
            icon: '/info-cards/icon6.png',
            content: " Porttitor rhoncus dolor purus non enim praesent. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Volutpat odio facilisis mauris sit amet massa vitae. Id interdum velit laoreet id donec. Scelerisque fermentum dui faucibus in ornare. Pellentesque pulvinar pellentesque habitant morbi. Est ante in nibh mauris cursus mattis molestie. Diam ut venenatis tellus in metus vulputate eu scelerisque. Sapien eget mi proin sed libero enim. A scelerisque purus semper eget duis. Sit amet facilisis magna etiam. In mollis nunc sed id semper risus in. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit.",
            button: true
        },
    ]



  return (
<section id="<?php echo esc_attr($id); ?>" class="info-cards">
    <div class="container">
        <div class="info-cards__wrapper">

            <div class="title-wrapper">
                <h2>What We Do</h2>
                <p>In today&apos;'s digital age, having an online presence is crucial for any business to reach a wider audience. We can help you do just that!</p>
            </div>
            <i class="fa fa-camera"></i>

            <div class="cards-wrapper">

                {
                    cardsData && cardsData.map((card, i)=> {
                        return (
                            <div class="card" key={`card-key=${i}`}>
                                <div class="card__top">
                                    <h3>{card.title}</h3>
                                </div>
                                <div class="card__bottom">
                                    <div class="icon-wrapper">
                                        <img src={card.icon} alt={card.icon} />
                                    </div>
                                    <p>{card.content}</p>
                                    {card.button && <div class="button-wrapper">
                                        <a href="" class="button">Learn More</a>
                                    </div>}
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    </div>
</section>
  )
}

export default InfoCards