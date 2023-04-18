import React, { useState } from 'react';
import { commentsApi } from './CommentsBoard.jsx';
import '../App.css';

export default function CommentNames ({ comment, getComment }) {

	const [editMode, setEditMode] = useState(true);
	const [text, setText] = useState(comment.comment);

	function toggleEditMode() {
		setEditMode(!editMode);
	}

	function deleteComment(id) {
		fetch(`${commentsApi}/${id}`, {
			method: 'DELETE',
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				// handle error
				console.log(`Error deleting comment from api`);
			})
			.then(task => {
				// Do something with deleted task
				getComment();
			})
			.catch(error => {
				// handle error
				console.log(`Error deleting comment from api`);
			});
	}

	function updateComment(id) {
		fetch(`${commentsApi}/${id}`, {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ comment: text }),
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				// handle error
				console.log(`Error updating comment to api`);
			})
			.then(task => {
				// Do something with updated task
				getComment();
				setEditMode(false);
			})
			.catch(error => {
				// handle error
				console.log(`Error updating comment to api`);
			});
	}

	if (editMode)
		return (
			<>
			<section style={{
				marginTop: "10px"
			}}>
								<h2>{comment.comment}</h2>
								<div className="bottom-center">
								<button className="btn btn-primary comment-btn"onClick={toggleEditMode}
								style={{
									fontFamily: "revert",
									fontWeight: "bolder",
									color: 'black'
								}}>
									Edit 
								</button>
								<button className="btn btn-primary comment-btn" onClick={() => deleteComment(comment.id)}
								style={{
									backgroundColor: "red",
									fontFamily: "revert",
									fontWeight: "bolder",
									color: "black",
									marginLeft: '5px'
								}}>
									<span className="material-symbols-outlined icon">Delete</span>
								</button>
								</div>
							
			</section>
		</>
		);
	return (
		<section className="form-group">
						<textarea
								className="form-control"
								value={text}
								onChange={e => setText(e.target.value)}
								placeholder={comment.comment}
								maxLength="200"
								rows='10'
								style={{
									fontFamily: 'revert',
									fontWeight: 'bolder',
									marginBottom: '5px'
								}}
							/>
							<button className="btn btn-primary comment-btn" onClick={toggleEditMode} 
							style={{
								fontFamily: "revert",
								fontWeight: "bolder",
								color: "black",
								marginLeft: "20px"
							}}>
								Submit Edit
							</button>
							<button className="btn btn-primary comment-btn" onClick={() => updateComment(comment.id)}
							style={{
								backgroundColor: 'red',
								fontFamily: 'revert',
								fontWeight: 'bolder',
								color: "black",
								marginLeft: "5px"
							}}>
							Done
							</button>	
		
		</section>
	);
}
