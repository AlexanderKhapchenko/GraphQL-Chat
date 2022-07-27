import './App.css';
import { Messages } from './component/messages/messages';
import { SendMessage } from './component/sendMessage/sendMessage';
import MessagesFilter from "./component/messages-filter/messages-filter";
import {useQuery, useSubscription} from "@apollo/client";
import {MESSAGES} from "./api/queries";
import {useEffect, useState} from "react";
import {MESSAGE_CHANGED, NEW_MESSAGE} from "./api/subscriptions";
import {Button} from "./component/button/button";

function App() {
    const [messages, setMessages] = useState([]);

    const [orderBy, setOrderBy] = useState('createdAt_ASC');
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState('');
    const [maxPage, setMaxPage] = useState(1);

    const messagesPerPage = 5;

    const {data: allMessages, loading: allMessagesLoading} = useQuery(MESSAGES);
    const {loading, data, error} = useQuery(MESSAGES, {
        variables: {
            orderBy,
            search,
            first: messagesPerPage,
            skip: page * messagesPerPage,
        },
    });

    const {data: dataUpdate} = useSubscription(NEW_MESSAGE);
    const {data: dataUpdateMessage} = useSubscription(MESSAGE_CHANGED);

    useEffect(() => {
        if(!loading) {
            setMessages(data.messages.messageList);
        }
    }, [data]);

    useEffect(() => {
        if(dataUpdate && 'newMessage' in dataUpdate) {
            setMessages([...messages, dataUpdate.newMessage]);
        }
    }, [dataUpdate]);

    useEffect(() => {
        const updatedMessage = dataUpdateMessage?.changeMessage;

        if (updatedMessage) {
            setMessages((messages) =>
                messages.map((message) =>
                    updatedMessage.id === message.id
                        ? {
                            ...message,
                            ...updatedMessage,
                        }
                        : message,
                ),
            );
        }
    }, [dataUpdateMessage]);

    useEffect(() => {
        if(!allMessagesLoading) {
            const msgCount = allMessages.messages.messageList.length;
            setMaxPage(msgCount / 5);
        }
    }, [allMessages]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>My first Apollo Client 🚀</h2>
        <MessagesFilter onSearch={setSearch} search={search} orderByHandler={setOrderBy}/>
        <Messages messages={messages}/>
        {page > 0 && <Button onClick={() => setPage(page - 1)} innerText="Prev"/>}
        {page < maxPage - 1 && <Button onClick={() => setPage(page + 1)} innerText="Next"/>}
        <SendMessage />
    </div>
  );
}

export default App;
