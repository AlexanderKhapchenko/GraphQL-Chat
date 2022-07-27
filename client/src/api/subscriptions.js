import {gql} from "@apollo/client";

export const NEW_MESSAGE = gql`
    subscription {
        newMessage {
            id text likes dislikes
        }
    }
`;

export const MESSAGE_CHANGED = gql`
    subscription {
        changeMessage {
            id text likes dislikes
        }
    }
`;

export const NEW_REPLIE = gql`
    subscription  {
        newReply {
            message {
                    replies {
                        text
                        message
                        id
                    }
            }
        }
    }
`;

