/**
 * @constructor
 * @param {string} paymentMethod Wartość słownikowa: CASH - gotówka, BANK_TRANSFER - przelew.
 * @param {string} payerType Wartość słownikowa: SHIPPER - płatnik nadawca, RECEIVER - płatnik odbiorca, USER - płatnik trzecia strona.
 * @param {string} accountNumber Numer klienta (SAP) płatnika, wymagane dla payerType to SHIPPER lub USER.
 * @param {string} costsCenter Pole MPK na liście przewozowym.
 */
function PaymentData(paymentMethod, payerType, accountNumber, costsCenter) {
    this.paymentMethod = paymentMethod;
    this.payerType = payerType;
    this.accountNumber = accountNumber;
    this.costsCenter = costsCenter;
}


module.exports.PaymentData = PaymentData;