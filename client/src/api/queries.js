import {gql} from "@apollo/client";

export const REPLIES = gql`
    query messagesQuery(
        $filter: String
    ) {
        messages(filter: $filter) {
            messageList {
                replies {
                    text
                    id
                }
            }
        }
    }
`;

export const MESSAGES = gql`
    query messagesQuery(
        $orderBy: MessageOrderByInput
        $skip: Int
        $first: Int
        $filter: String
        $search: String
    ) {
        messages(orderBy: $orderBy, filter: $filter, skip: $skip, first: $first, search: $search) {
            messageList {
                text
                likes
                dislikes
                id
           }
        }
    }
`;