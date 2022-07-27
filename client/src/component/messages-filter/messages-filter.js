import {ORDER_BY} from "../../api/constants/order-by";

function MessagesFilter(props) {

    function orderByHandler(event) {
        props.orderByHandler(event.target.value);
    }

    function filterHandler(event) {
        const term = event.target.value;
        props.onSearch(term);
    }

    return (
        <div className="messages-filter">
            <input
                type="text"
                onChange={filterHandler}
                placeholder="Search"
                className="messages-filter__input"
                value={props.search}
            />
            <select
                defaultValue={ORDER_BY.createdAt_ASC}
                onChange={orderByHandler}
                className="messages-filter__select"
            >
                <option value={ORDER_BY.createdAt_ASC}>
                    Sent time (Ascending)
                </option>
                <option value={ORDER_BY.createdAt_DESC}>
                    Sent time (Descending)
                </option>
                <option value={ORDER_BY.likes_ASC}>
                    Likes (Ascending)
                </option>
                <option value={ORDER_BY.likes_DESC}>
                    Likes (Descending)
                </option>
                <option value={ORDER_BY.dislikes_ASC}>
                    Dislikes (Ascending)
                </option>
                <option value={ORDER_BY.dislikes_DESC}>
                    Dislikes (Descending)
                </option>
            </select>
        </div>
    );
}

export default MessagesFilter;