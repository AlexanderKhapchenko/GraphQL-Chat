import {gql} from "@apollo/client";

export const ADD_REPLY = gql`
    mutation PostReply($text: String!, $id: ID!){
        postReply(text: $text, message: $id) {
            text
        }
    }
`;

export const CHANGE_LIKES = gql`
    mutation UpdateMessageLike($likes: Int!, $id: ID!){
        updateMessageLike(likes: $likes, id: $id) {
            text
        }
    }
`;

export const CHANGE_DISLIKES = gql`
    mutation UpdateMessageDislike($dislikes: Int!, $id: ID!){
        updateMessageDislike(dislikes: $dislikes, id: $id) {
            text
        }
    }
`;

export const ADD_MESSAGE = gql`
    mutation PostMessage($text: String!){
        postMessage(text: $text, dislikes: 0, likes: 0) {
            text
            dislikes
            likes
            id
        }
    }
`;