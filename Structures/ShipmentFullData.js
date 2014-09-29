/**
 * W strukturze przekazywane są pełne dane na temat wybranej przesyłki. Wypełnione struktury tego typu służą do definiowania przesyłek metodą createShipments.
 * @constructor
 * @param {Address} shipper Dane nadawcy przekazywane w strukturze adresowej.
 * @param {ReceiverAddress} receiver Dane odbiorcy przekazywane w strukturze adresowej.
 * @param {PieceDefinition[]} pieceList Dane dotyczące paczek, lista elementów typu PieceDefinition.
 * @param {PaymentData} payment Dane dotyczące płatnika oraz płatności.
 * @param {ServiceDefinition} service Dane dotyczące wybranej usługi przewozowej i usług dodatkowych.
 * @param {string} shipmentDate Data nadania (widoczna na liście przewozowym) - w formacie RRRR-MM-DD.
 * @param {boolean} [skipRestrictionCheck] Czy pominąć sprawdzenie restrykcji.
 * @param {string} [comment] Dodatkowy komentarz (widoczny na liście przewozowym).
 * @param {string} content Zawartość przesyłki.
 * @param {string} [reference] Numer referencyjny przesyłki.
 * @param {number} shipmentId Tylko odpowiedź. Identyfikator przesyłki (jeśli przesyłka jest już utworzona, w przeciwnym wypadku pole puste).
 * @param {string} created Tylko odpowiedź. Data utworzenia przesyłki, w formacie RRRR-MM-DD (jeśli przesyłka jest już utworzona, w przeciwnym wypadku pole puste).
 * @param {string} orderStatus Tylko odpowiedź. Informacja czy do tej przesyłki jest zamówiony kurier.
 */
function ShipmentFullData(shipper, receiver, pieceList, payment, service, shipmentDate, skipRestrictionCheck, comment, content, reference, shipmentId, created, orderStatus) {
	this.shipper = shipper;
	this.receiver = receiver;
	this.pieceList = pieceList;
	this.payment = payment;
	this.service = service;
	this.shipmentDate = shipmentDate;
	this.skipRestrictionCheck = skipRestrictionCheck;
	this.comment = comment;
	this.content = content;
	this.reference = reference;
	this.shipmentId = shipmentId;
	this.created = created;
	this.orderStatus = orderStatus;
}


module.exports.ShipmentFullData = ShipmentFullData;