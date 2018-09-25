import React from 'react';
import './About.css';

const About = () => {
    return(
        <div className="about" style={{margin: '30px 0 0 10px', minHeight: '60vh'}}>
            <h1>Hello World</h1>
            <h2>Introduction</h2>
            <div className="content">
                Movie Wiki is a website built for searching for different movies from all industries. You can use this website as your go-to tool for searching information of different movies. Go, give it a try!
            </div>
            <h2>Features</h2>
            <div className="content">
                Using this website, you can easily collect information about different movies, artists etc. Below are the options this website currently have: 
                <ul>
                    <li>Search for an specific movie. This includes: </li>
                    <ul>
                        <li>A short description about the movie</li>
                        <li>Rating</li>
                        <li>Popularity</li>
                        <li>Total Collection</li>
                        <li>Runtime</li>
                        <li>Producer</li>
                        <li>Release Date</li>
                        <li>Suitable for(Adult/All age)</li>
                    </ul>
                    <li>Get list of movies from an specific Genre. For example, Sci-Fi etc</li>
                    <li>Get <em>Similar Movies</em> list when you search for an specific movie</li>
                    <li>Cast names who worked for that movie</li>
                    <li><em>Reviews</em> to see if the movie is really worth to watch</li>
                </ul>
            </div>
            <h2>Technical Information</h2>
            <div className="content">
                This project is built using awesomness of React, power of TMDb API and lots of love! I built this web-app to practice my React skills and learn more and more about React. <br/>
                I am using few external components and libraries for making this web-app more powerful and easier to develop. Below is the list of them. Go, check them out too if you code in React!
                <ul>
                    <li><code>react-helmet</code><em>v5.2.0</em> : For setting Meta information dynamicaly</li>
                    <li><code>react-markdown</code> <em>v3.6.0</em> : for parsing MarkDown and convert them to HTML</li>
                    <li><code>react-router-dom</code><em>v4.3.1</em> : For using BrowserRoutes</li>
                    <li><code>gh-pages</code><em>v2.0.0</em> : For publishing this project to GitHub Pages</li>
                </ul>
            </div>
            <h2>Bugs, Feedback and Suggestion</h2>
            <div className="content">
                If you've encountered any bugs or errors in this website, please let me know via <a href="mailto:dev.abdus@gmail.com">Email</a>, <a href="https://twitter.com/thisisabdus">Twitter</a> or <a href="https://github.com/thisisabdus/issues">GitHub Issues</a>. <br/>
                Have any suggestions or feedback, you are always welcome! Just drop them in <a href="mailto:dev.abdus@gmail.com">Email</a> or <a href="https://twitter.com/thisisabdus">Twitter</a> or in WhatsApp. I am waiting to hear back from you &lt;3. <br/>
            </div>
            <h2>Finally, About Me</h2>
            <div className="content">
                Hello again, My name is Abdus and I live in a village somewhere in India. Thank you a lot for visiting this website. I really appriciate it! If you want to connect with me, I am on the web as @thisisAbdus. Drop me a message :) (<a href="https://github.com/thisisabdus">Github</a>, <a href="https://linkedin.com/in/thisisabdus">LinkedIn</a>, <a href="https://twitter.com/thisisabdus">Twitter</a>, <a href="https://medium.com/@thisisabdus">Medium</a> ,<a href="https://abdusdev.me">Website</a>) <br/><br/>
                Thank you for making it upto here! Have a good day ahead!
            </div>
        </div>
    )
}

export default About;