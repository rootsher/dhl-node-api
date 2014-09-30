/**
 * @constructor
 * @param {string} dropOffType
 * @param {string} serviceType
 * @param {Billing} billing
 * @param {ArrayOfService} specialServices
 * @param {ShipmentTime} shipmentTime
 * @param {string} labelType
 */
function ShipmentInfo(dropOffType, serviceType, billing, specialServices, shipmentTime, labelType) {
	this.dropOffType = dropOffType;
	this.serviceType = serviceType;
	this.billing = billing;
	this.specialServices = specialServices;
	this.shipmentTime = shipmentTime;
	this.labelType = labelType;
}


module.exports.ShipmentInfo = ShipmentInfo;