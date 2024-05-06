


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
                <div className='image-wrapper'>
                    <img src="/two-column/security-border.webp"/>

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
                <div className='text-wrapper'>

                    <h2>Decide What is right for your Website</h2>
                    <p>Urna condimentum mattis pellentesque id nibh tortor. Curabitur gravida arcu ac tortor dignissim convallis aenean. Turpis nunc eget lorem dolor sed. Amet facilisis magna etiam tempor orci eu lobortis elementum</p>
                </div>
                <div className='image-wrapper'>
                    <img src="/two-column/reliability.png"/>
                </div>
            </div>

            <div className='section'>
                <div className='image-wrapper'>
                    <img src="/two-column/efficiency.png"/>
                </div>
                <div className='text-wrapper'>
                    <h2>Effeciency</h2>
                    <p>Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Fringilla phasellus faucibus scelerisque eleifend donec. Amet massa vitae tortor condimentum lacinia quis vel. </p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default TwoColumn