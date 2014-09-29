/**
 * W strukturze przekazywane są podstawowe dane na temat przesyłki. Elementy tego typu są zwracane np. przez metodę getMyShipments.
 * @constructor
 * @param {number} shipmentId Identyfikator przesyłki.
 * @param {string} created Data utworzenia przesyłki, w formacie RRRR-MM-DD.
 * @param {Address} shipper Dane nadawcy przekazywane w strukturze adresowej.
 * @param {Address} receiver Dane odbiorcy przekazywane w strukturze adresowej.
 * @param {string} orderStatus Informacja czy do tej przesyłki jest zamówiony kurier.
 */
function ShipmentBasicData(shipmentId, created, shipper, receiver, orderStatus) {
	this.shipmentId = shipmentId;
	this.created = created;
	this.shipper = shipper;
	this.receiver = receiver;
	this.orderStatus = orderStatus;
}


module.exports.ShipmentBasicData = ShipmentBasicData;