import React from 'react';
import ReactMarkdown from 'react-markdown';
import ExpandCollapse from './ExpandCollapse';
import './Reviews.css';
import avatar from '../images/avatar.png'
import Config from '../Config';


class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviewList: ''
        }

        fetch('https://api.themoviedb.org/3/movie/' + props.movieID +'/reviews?api_key=' + Config.api_key)
        .then(res => res.json())
        .then(res => {
            this.setState({reviewList: res})
        });
    }

    render() {

        let review_list = [];
        for (let i in this.state.reviewList.results) {
            review_list.push(
                <div key={i} className="reviews_card">
                    <div className="reviewer_name">
                        <img style={{height: '50px', width: '50px'}} src={avatar} alt="avatar"/>
                        <h3>
                            <a href={this.state.reviewList.results[i].url}>{this.state.reviewList.results[i].author}</a> Says...
                        </h3>
                    </div>
                    <hr/>
                    <ExpandCollapse>
                        <div className='reviews_content'>
                            <ReactMarkdown source={this.state.reviewList.results[i].content}/>
                        </div>
                    </ExpandCollapse>
                    <div style={{color: 'orange'}}>Click To Expand</div>
                </div>
            )
        }
        return(
            <div className="movie_reviews">
                <h2>Reviews</h2>
                {this.state.reviewList.total_results === 0 ? <h4>No Reviews Found</h4>: ''}
                <div className="reviews_card_wrapper">
                    {review_list}
                </div>
            </div>
        )
    }
}

export default Reviews;
