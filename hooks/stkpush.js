import axios from "axios";

function stkpush(
    consumerKey,
    consumerSecret,
    businessShortCode,
    passkey,
    accountReference,
    transactionDesc,
    environment = "sandbox"
) {
    const baseUrl =
        environment === "live"
            ? "https://api.safaricom.co.ke"
            : "https://sandbox.safaricom.co.ke";

    async function pay(amount, phoneNumber, callbackUrl) {
        const accessToken = await generateAccessToken();

        const timeStamp = new Date()
            .toISOString()
            .replace(/[^0-9]/g, "")
            .slice(0, -3);

        const password = Buffer.from(`${businessShortCode}${passkey}${timeStamp}`).toString('base64');

        const requestBody = initializeRequestBody(
            amount,
            phoneNumber,
            callbackUrl,
            timeStamp,
            password
        );

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        };

        try {
            const response = await axios.post(
                `${baseUrl}/mpesa/stkpush/v1/processrequest`,
                requestBody,
                config
            );
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async function generateAccessToken() {
        const credentials = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

        const config = {
            headers: {
                Authorization: `Basic ${credentials}`,
            },
        };

        try {
            const response = await axios.get(
                `${baseUrl}/oauth/v1/generate?grant_type=client_credentials`,
                config
            );

            return response.data.access_token;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    function initializeRequestBody(
        amount,
        phoneNumber,
        callbackUrl,
        timeStamp,
        password
    ) {
        return {
            BusinessShortCode: businessShortCode,
            Password: password,
            Timestamp: timeStamp,
            TransactionType: "CustomerPayBillOnline",
            Amount: amount,
            PartyA: phoneNumber,
            PartyB: businessShortCode,
            PhoneNumber: phoneNumber,
            CallBackURL: callbackUrl,
            AccountReference: accountReference,
            TransactionDesc: transactionDesc,
        };
    }

    return { pay };
}

export default stkpush;
