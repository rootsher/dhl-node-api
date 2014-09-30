/**
 * @constructor
 * @param {string} shippingPaymentType
 * @param {number} billingAccountNumber
 * @param {string} paymentType
 * @param {string} costsCenter
 */
function Billing(shippingPaymentType, billingAccountNumber, paymentType, costsCenter) {
	this.shippingPaymentType = shippingPaymentType;
	this.billingAccountNumber = billingAccountNumber;
	this.paymentType = paymentType;
	this.costsCenter = costsCenter;
}


module.exports.Billing = Billing;