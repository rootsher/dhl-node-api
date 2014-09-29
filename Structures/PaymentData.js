/**
 * Struktura zawiera informacje o wybranej formie płatności oraz płatniku. Dostępne kombinacje płatnika oraz formy płatności:
 * 	- USER, forma płatności: BANK_TRANSFER, przesyłka typu "trzecia strona" (jeśli umożliwia to przydzielony numer SAP),
 * 	- SHIPPER, forma płatności: BANK_TRANSFER, płaci nadawca przelewem,
 * 	- RECEIVER, forma płatności: CASH, płaci odbiorca, gotówką.
 * @constructor
 * @param {string} paymentMethod Wartość słownikowa: CASH - gotówka, BANK_TRANSFER - przelew.
 * @param {string} payerType Wartość słownikowa: SHIPPER - płatnik nadawca, RECEIVER - płatnik odbiorca, USER - płatnik trzecia strona. !!!!
 * @param {string} [accountNumber] Numer klienta (SAP) płatnika, wymagane dla payerType to SHIPPER lub USER.
 * @param {string} [costsCenter] Pole MPK na liście przewozowym.
 */
function PaymentData(paymentMethod, payerType, accountNumber, costsCenter) {
	this.paymentMethod = paymentMethod;
	this.payerType = payerType;
	this.accountNumber = accountNumber;
	this.costsCenter = costsCenter;
}


module.exports.PaymentData = PaymentData;