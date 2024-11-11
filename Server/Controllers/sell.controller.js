import SalesTransaction from "../Models/transactionModel.js";

export const sellGiftCard= async (req, res) => {
    const {amount, cardName, countryCode, cardNumber, cardImage,} = req.body;
    try {

        if (!amount || !cardName || !countryCode || !cardNumber || !cardImage) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (!req.userId) {
            return res.status(401).json({ message: "Unauthorized. User ID is required." });
        }

        const newTransaction = new SalesTransaction({
            amount,
            cardName,
            countryCode,
            cardNumber,
            cardImage,
            userId: req.userId
        });

        await newTransaction.save();

        res.status(201).json();
        console.log({ message: 'Transaction submitted successfully', transaction: newTransaction });

    } catch (error) {
        console.error("Error in sell controller", error.message);
        res.status(500).json({error:"internal Server Error"});
    }
}
