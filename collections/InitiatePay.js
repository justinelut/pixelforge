import { isAdmin } from "../access/isAdmin";
import {processPayment} from '../hooks/payments'

const InitiatePay = {
  slug: 'initiatedpayments',
  admin: {
    useAsTitle: 'paymentstatus',
  },
  access: {
    create: () => true,
    read: isAdmin,
    update: () => false,
    delete: isAdmin,
  },

  fields: [
    {
      name: 'phonenumber',
      label: 'Phone Number',
      type: 'number',
      required: true,
    },
    {
      name: 'paymentstatus',
      label: 'Payment Status',
      type: 'text',
      required: true,
    },
  ],

  hooks:{
    beforeValidate: [processPayment],
  }
};

export default InitiatePay;