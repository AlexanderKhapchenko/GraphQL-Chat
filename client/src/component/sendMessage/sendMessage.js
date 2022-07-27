import { useMutation } from "@apollo/client";
import {ADD_MESSAGE} from "../../api/mutations";
import {isMessageValid} from "../../helper/vallidations";


export function SendMessage (){
	const [addMessage] = useMutation(ADD_MESSAGE);
	let input;
	
  return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					if(isMessageValid(input.value)) {
						addMessage({variables: {text: input.value}});
					}
					input.value = '';
				}}
			>
				<input
					ref={node => {
						input = node;
					}}
				/>
				<button type="submit">Send</button>
			</form>
		</div>
	);
}