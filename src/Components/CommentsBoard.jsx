import React from 'react';
import { useState, useEffect } from 'react';
import CommentForm from './CommentForm.jsx';
import CommentNames from './CommentNames.jsx';

export const commentsApi = "https://6435ab73537112453fdca132.mockapi.io/comments"

function CommentsBoard() {
  const [comment, setComment] = useState([]);

  useEffect(getComment, []);

  function getComment() {
    fetch(commentsApi, {
      method: 'GET',
      headers: { 'content-type': 'application/json'},
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      console.log('GET error');
    })
    .then(data => {
      setComment(data);
    })
    .catch(error => {
      console.log('GET error')
    });
  }

  return (
    <div className="whole">
      <div className="comment">
          <header className="main-header">
            Leave a Comment:
          </header>     
        <div className="comments">
				  <CommentForm getComment={getComment} />
			  </div>
      </div>
      <section className="py-4 py-lg-5 container">
        <div className="row justify-content-center align-item-center">
          {comment.map(e => (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={e.id}>
                 <div className="card p-0 overflow-hidden h-100 shadow" style={{
                 }}>
                  <CommentNames comment={e} getComment={getComment} /> 
                 </div>
             </div>
          ))}
        </div>
      </section>
    </div>   
  );
}

export default CommentsBoard;
