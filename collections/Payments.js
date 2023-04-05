import { isAdmin } from "../access/isAdmin";
import { SavePayment } from '../hooks/payments'

const Payments = {
    slug: 'payments',
    admin: {
        useAsTitle: 'MpesaReceiptNumber',
    },
    access: {
        create: () => true,
        read: isAdmin,
        delete: isAdmin,
    },
    fields: [
        {
            name: 'userId',
            label: 'User ID',
            type: 'text',
            required: true,
            access: {
                update: () => false,
            },
        },
        {
            name: 'projectId',
            label: 'Project Id',
            type: 'text',
            required: true,
            access: {
                update: () => false,
            },
        },
        {
            name: 'confirmed',
            label: 'Confirmed',
            type: 'text',
            required: true,
            access: {
                update: () => true,
            },
        },
        {
            name: 'Amount',
            label: 'Amount Payed',
            type: 'number',
            required: true,
            access: {
                update: () => false,
            },
        },
        {
            name: 'MpesaReceiptNumber',
            label: 'Mpesa Confirmation Number',
            type: 'text',
            required: true,
            access: {
                update: () => false,
            },
        },
        {
            name: 'TransactionDate',
            label: 'Transaction Date',
            type: 'number',
            required: true,
            access: {
                update: () => false,
            },
        },
        {
            name: 'PhoneNumber',
            label: 'Phone Number',
            type: 'number',
            required: true,
            access: {
                update: () => false,
            },
        },
    ],
    hooks: {
        beforeValidate: [SavePayment],
    }
};

export default Payments;