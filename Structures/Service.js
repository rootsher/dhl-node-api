/**
 * @constructor
 * @param {string} serviceType
 * @param {number} serviceValue
 * @param {string} textInstruction
 * @param {string} collectOnDeliveryForm
 */
function Service(serviceType, serviceValue, textInstruction, collectOnDeliveryForm) {
    this.serviceType = serviceType;
    this.serviceValue = serviceValue;
    this.textInstruction = textInstruction;
    this.collectOnDeliveryForm = collectOnDeliveryForm;
}


module.exports.Service = Service;