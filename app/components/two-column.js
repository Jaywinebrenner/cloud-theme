


import React from 'react'

const TwoColumn = () => {
  return (
    <div className='two-column'>
        <div className='container'>
            <div className='title-wrapper'>
                <h2>How It works</h2>
                {/* <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> */}

            </div>

            <div className='section'>
                <div className='window'>
                    <div className='icon-wrapper'>
                        <img  loading="lazy"  className='icon' src="/two-column/icons/get-in-touch.png"/>
                    </div>
                    <div className='cloud-container'>
                        <img  loading="lazy"  className='cloud' src="/two-column/single-cloud.webp"/>
                    </div>
                    <div className='window-inner-border'></div>
                </div>
                <div className='text-wrapper'>
                    <h2>Get in touch!</h2>
                    <p>Connect with us to kickstart the process. Whether you're looking for a simple one-page website or a more complex site with advanced features like a Content Management System (CMS) or a blog, we'll schedule a consultation to discuss your needs, goals, and vision for your website.</p>
                    <div className='btn-wrapper'>
                        <a href="/contact" className='btn'>Contact</a>
                    </div>
                </div>
            </div>

            <div className='section reverse'>
                 <div className='window'>
                    <div className='icon-wrapper'>
                        <img  loading="lazy"  className='icon' src="/two-column/icons/decide.png"/>
                    </div>
                    <div className='cloud-container'>
                        <img  loading="lazy"  className='cloud' src="/two-column/single-cloud.webp"/>
                    </div>
                    <div className='window-inner-border'></div>
                </div>
                <div className='text-wrapper'>
                    <h2>Determine a style</h2>
                    <p>Whether you're a design enthusiast armed with a Figma file or a detailed layout, we're ready to bring your vision to life.</p>
                    <p>If you have a general concept in mind for your website's look and feel, we're here to dive deep into it. Share with us the websites that inspire you, the color palettes that resonate, and the images that reflect your story. We'll meticulously craft your website and keep you in the loop with links to the work-in-progress for your valuable feedback.
                    </p>
                </div>
            </div>

            <div className='section'>
                <div className='window'>
                    <div className='icon-wrapper'>
                        <img  loading="lazy"  className='icon' src="/two-column/icons/deploy.png"/>
                    </div>
                    <div className='cloud-container'>
                        <img  loading="lazy"  className='cloud' src="/two-column/single-cloud.webp"/>
                    </div>
                    <div className='window-inner-border'></div>
                </div>
                <div className='text-wrapper'>

                    <h2>Deploy and maintain</h2>
                    <p>After completing the website development process, we'll seamlessly set up your domain and hosting service, ensuring a smooth transition to the online world.</p>
                    <p>We remain at your service through the retainer, offering support for content updates, implementing new features, and providing ongoing website maintenance.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TwoColumn