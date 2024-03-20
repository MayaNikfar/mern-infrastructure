import { checkToken } from "../../utilities/user-service";

const OrderHistoryPage = () => {
    const _handleCheckToken = async () => {
        const expDate = await checkToken();
        console.log(expDate);
    };

    return (
        <h1>
            OrderHistoryPage
            <button onClick={ _handleCheckToken }>Click when my login expires</button>
        </h1>
    )
};

export default OrderHistoryPage;