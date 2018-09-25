import React from 'react';
import {Helmet} from 'react-helmet';

const Meta = (props) => {
    return(
        <Helmet>
            <title>{props.data.original_title + ' - ' + props.data.tagline}</title>

            {/* FACEBOOK AND TWITTER META */}
            <meta property="og:title" content={props.data.original_title}></meta>
            <meta property="og:description" content={props.data.overview}></meta>
            <meta property="og:image" content={"https://image.tmdb.org/t/p/w342" + props.data.backdrop_path}></meta>
            <meta property="og:url" content={window.location.host + '/movie-wiki/movie/' + props.data.id}></meta>
            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta property="og:site_name" content="Movie Wiki"></meta>
            <meta name="twitter:image:alt" content={props.data.original_title}></meta>
        </Helmet>
    )
}

export default Meta;