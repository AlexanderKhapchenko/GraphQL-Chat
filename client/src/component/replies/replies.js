import {useQuery, useSubscription} from "@apollo/client";
import './replies.css';
import {REPLIES} from "../../api/queries";
import {useEffect, useState} from "react";
import {NEW_REPLIE} from "../../api/subscriptions";

export function Replies ({id}){
    const [replies, setReplies] = useState([]);
    const { loading, error, data } = useQuery(REPLIES, {
        variables: {
            filter: id,
        },
    });

    const {data: dataNew} = useSubscription(NEW_REPLIE);

    useEffect(() => {

        if(!loading) {
            const newReply = dataNew?.newReply.message.replies.text;//.filter(replie => replie.message === id);
        }
    }, [dataNew]);


    useEffect(()=>{
        if(!loading) {
            setReplies(data.messages.messageList[0].replies);
        }
    }, [data])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return replies.map(({ text, id }) => (
    <div className="reply" key={id}>
        <p className="text-reply">
            message {text}
        </p>
    </div>
    ));
}
