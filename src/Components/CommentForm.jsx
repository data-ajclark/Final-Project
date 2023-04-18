import React from 'react';
import { commentsApi } from './CommentsBoard.jsx';
import { useState } from 'react';

export default function CommentForm ({ getComment }) {
	const [text, setText] = useState('');

	function handleClickAdd(e) {
		e.preventDefault(); 

		if (text) {
			const newComment = {
				comment: text,
			};

			fetch(commentsApi, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(newComment),
			})
				.then(res => {
					if (res.ok) {
						return res.json();
					}
					console.log('Error POSTing comment to api');
				})
				.then(task => {
					getComment();
					setText('');
				})
				.catch(error => {
					console.log('Error POSTing comment to api');
				});
		}
	}

	return (
		<div id="container-new-comment" className="mb-2 comment-box">
			<form>
				<label htmlFor="input-comment" className="me-2 input-label">Comment: </label>
				<input
					id="input-comment"
					value={text}
					onChange={e => setText(e.target.value)}
					maxLength="200"
				/>
				<button className="btn btn-success btn-lg" onClick={handleClickAdd}
				style={{
					fontFamily: 'revert',
					fontWeight: 'bolder',
					marginLeft: '5px',
					
				}}>
					Add
				</button>
				
			</form>
		</div>
	);
}
