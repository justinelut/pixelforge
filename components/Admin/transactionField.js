import progress from './Transaction'
//import { isAdmin } from "../../../access/isAdmin";

const TransactionField = {
    name: "transactions",
    type: "text",
    required: true,
    admin: {
        components: {
            Field: progress,
        },
    },
};

export default TransactionField;