import React, { useEffect, useState} from 'react'

const Home = () => {

    const text = useLanguage()

    return (
        <div className='sectionHead'>
            <YoutubeBackground
                videoId='CLk7A7HXhYQ'
                className={'video'}
                mute={true}
                loop={true}
            >
                <div className='contentHead'>
                    <div className='centerContent'>
                        <h1>{text.home.title}</h1> <br></br>
                        <div className='clock'>
                            <Clock
                                format={'HH:mm:ss'}
                                ticking={true}
                                style={{ fontSize: '50px', color: 'white' }}
                            />
                            <div className='date'>
                                <Clock
                                    format={'dddd, DD MMMM YYYY'}
                                    ticking={true}
                                    style={{ fontSize: '20px', color: 'white' }}
                                />
                            </div>
                            <a
                                href='#rsiDesc'
                                type='button'
                                className='btn btn-primary'
                                style={{ marginTop: '20px' }}
                            >
                                {text.home.button}
                            </a>
                        </div>
                    </div>

                </div>
            </YoutubeBackground>
            <div className='rsiDesc' id='rsiDesc'>
                <div className='rsiDescContent'>
                    <div className='left'>
                        <h1>
                            <a
                                href='https://www.google.com/search?q=repetitive+strain+injury&rlz=1C1UEAD_enID995ID995&oq=rep&aqs=chrome.1.69i57j69i59j0i131i433i512j0i433i512j69i60l3j69i65.4161j0j7&sourceid=chrome&ie=UTF-8'
                                target={'_blank'} rel="noreferrer"
                            >
                                {text.home.rsi.title}
                            </a>
                        </h1>
                    </div>
                    <div className='right'>
                        <p>{text.home.rsi.desc}</p>
                    </div>
                </div>
            </div>
            <div className='solveContent'>
                <div className='left'>
                    <img
                        src='https://www.australiawidefirstaid.com.au/media-library/infographic-about-repetitive-strain-injury-1000w.jpg'
                        alt='undraw-healthy-habit-6tyl'
                    />
                </div>
                <div className='right'>

                    <h1>{text.home.solve.title}</h1>
                    <p>{text.home.solve.desc}</p>
                </div>
            </div>
            <div className='endSection'>
                <h1 className='endTitle'>{text.home.endSection.title}</h1>
                <p className='endDesc'>{text.home.endSection.desc}</p> <br></br>
                <Link to="/break">
                <button
                
                type='button'
                className='btn btn-primary'
                style={{ marginTop: '20px' }}
            >
                {text.home.endSection.button}
            </button>
                </Link>
                <div className='mobile'>
                    <h1>Silahkan gunakan Laptop anda untuk mengakses fitur website lebih lanjut</h1>
                </div>
            </div>

        </div>

    )
}

export default Home
