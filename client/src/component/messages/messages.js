import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { Replies } from '../replies/replies';
import './messages.css';
import {ADD_REPLY, CHANGE_DISLIKES, CHANGE_LIKES} from "../../api/mutations";
import {isMessageValid} from "../../helper/vallidations";

export function Messages ({messages}){

	const [addReply] = useMutation(ADD_REPLY);
	const [changeLikes] = useMutation(CHANGE_LIKES);
	const [changeDislikes] = useMutation(CHANGE_DISLIKES);
	
	const ReplyOnClick = (id) => {
		const text = prompt('Enter your reply');
		if(isMessageValid(text)) {
			addReply({variables: { text, id}});
		}
	}

  return messages.map(({text, likes, dislikes, id }) => (
    <div className="message" key={id}>
      <p className="text">
		  messages {text}
      </p>
			<div className="buttons">
				<div className="likes">
					<p className="info">
						likes {likes}
					</p>
					<button className="btn" onClick={() =>changeLikes({variables: {likes: ++likes, id}})} >Like</button>
				</div>
				<div className="dislikes">
					<p className="info">
						dislikes {dislikes}
					</p>
					<button className="btn" onClick={() =>changeDislikes({variables: {dislikes: ++dislikes, id}})}>Dislike</button>
				</div>
				<div className="replie-btn">
					<button className="btn" onClick={() => ReplyOnClick(id)}>Reply</button>
				</div>
			</div>

			<Replies
				id = {id}
			/>
    </div>
  ));
}