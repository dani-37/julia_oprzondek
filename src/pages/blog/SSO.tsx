import React from 'react';
import BlogPost from './Template.tsx'
import './blog.css'

const Content = () => (
    <div className='mt-5 flex justify-center mx-5 mb-[4px]'>
        <iframe 
            className='rounded-[5px]'
            src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FIslingtonRadio%2Fplaylists%2Fshe-sounds-off%2F" 
            width="90%" 
            height="180"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title='she sounds off'>
        </iframe>
    </div>
);

const Description = () => (
    <>
        <p className='font-aptos font-thin text-sm'>
        I am currently a host of She Sounds Off, a show on Islington Radio highlighting female voices and musicians on the London and global music scenes. Creating weekly episodes and sharing valuable music and artists that cut through the radio noise is, frankly, incredibly exciting. NB: it is the hosts that sound off, not the musicians featured in the show.
        </p>
        <p className='font-aptos font-thin text-sm'>
        Creating a safe space for female voices is very important to me. I do understand the glass ceilings that women and minorities have to face in the music industry, and being able to contribute to the changing of the status quo (albeit on a small scale) is very fulfilling.
        </p>
        <p className='font-aptos font-thin text-sm -mb-8'>
        Apart from hosting and choosing the tracklist, I also edit the episodes and create the show’s visual identity online.
        </p>
    </>
)

const DotDotDot = () => {
    return(<BlogPost title='She Sounds Off' 
                     description={<Description/>}
                     image='SSO'
                     content={<Content/>}
                     />
            )
}

export default DotDotDot