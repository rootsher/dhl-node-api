/**
 * @constructor
 * @param {string} product
 * @param {boolean} deliveryEvening
 * @param {boolean} deliveryOnSaturday
 * @param {boolean} pickupOnSaturday
 * @param {boolean} collectOnDelivery
 * @param {number} collectOnDeliveryValue
 * @param {string} collectOnDeliveryForm
 * @param {string} collectOnDeliveryReference
 * @param {boolean} insurance
 * @param {number} insuranceValue
 * @param {boolean} returnOnDelivery
 * @param {string} returnOnDeliveryReference
 * @param {boolean} proofOfDelivery
 * @param {boolean} selfCollect
 * @param {boolean} predeliveryInformation
 * @param {boolean} deliveryToNeighbour
 * @param {boolean} preaviso
 */
function ServiceDefinition(product, deliveryEvening, deliveryOnSaturday, pickupOnSaturday, collectOnDelivery, collectOnDeliveryValue, collectOnDeliveryForm, collectOnDeliveryReference, insurance, insuranceValue, returnOnDelivery, returnOnDeliveryReference, proofOfDelivery, selfCollect, predeliveryInformation, deliveryToNeighbour, preaviso) {
	this.product = product;
	this.deliveryEvening = deliveryEvening;
	this.deliveryOnSaturday = deliveryOnSaturday;
	this.pickupOnSaturday = pickupOnSaturday;
	this.collectOnDelivery = collectOnDelivery;
	this.collectOnDeliveryValue = collectOnDeliveryValue;
	this.collectOnDeliveryForm = collectOnDeliveryForm;
	this.collectOnDeliveryReference = collectOnDeliveryReference;
	this.insurance = insurance;
	this.insuranceValue = insuranceValue;
	this.returnOnDelivery = returnOnDelivery;
	this.returnOnDeliveryReference = returnOnDeliveryReference;
	this.proofOfDelivery = proofOfDelivery;
	this.selfCollect = selfCollect;
	this.predeliveryInformation = predeliveryInformation;
	this.deliveryToNeighbour = deliveryToNeighbour;
	this.preaviso = preaviso;
}


module.exports.ServiceDefinition = ServiceDefinition;