import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Reviews.css';
import avatar from '../images/avatar.png'

class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviewList: '',
            isExpand: true
        }

        fetch('https://api.themoviedb.org/3/movie/' + props.movieID +'/reviews?api_key=9526f02a9f92adaf39272b5d785cff61')
        .then(res => res.json())
        .then(res => {
            this.setState({reviewList: res})
            console.log(res);
        });
    }

    clickToExpand() {
        this.setState({isExpand: !this.state.isExpand})
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
                    <div
                        onClick={this.clickToExpand.bind(this)} 
                        ref="reviews_content" 
                        className={'reviews_content ' + (this.state.isExpand ? 'collapse' : '')}
                    >
                        <ReactMarkdown source={this.state.reviewList.results[i].content}/>
                    </div>
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