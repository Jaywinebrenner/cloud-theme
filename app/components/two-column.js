


import React from 'react'

const TwoColumn = () => {
  return (
    <div className='two-column'>
        <div className='container'>
            <div className='title-wrapper'>
                <h2>Optimizing practices</h2>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>

            </div>

            <div className='section'>
                <div className='image-wrapper'>
                    <img src="/two-column/security.png"/>

                </div>
                <div className='text-wrapper'>
                    <h2>Security</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>


            <div className='section reverse'>
                <div className='text-wrapper'>

                    <h2>Reliability</h2>
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