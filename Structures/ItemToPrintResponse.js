/**
 * Struktury tego typu można odnaleźć w odpowiedziach metody getLabels. Zawierają dane binarne zwracanych etykiet. List przewozowy oraz etykieta BLP są zwracane jako dokumenty PDF, etykieta ZBLP to plik tekstowy, do odczytu przez drukarki typu Zebra. Treści etykiet są zawsze zakodowane w Base64.
 * @constructor
 * @param {number} shipmentId Numer przesyłki, dla której której przygotowano etykietę.
 * @param {string} labelType Wartość słownikowa - jedna z wartości: LP - list przewozowy, BLP - etykieta BLP, ZPL - BLP w formacie dla drukarek Zebra.
 * @param {string} labelData Dane binarne etykiety (zakodowane w Base64).
 * @param {string} labelMimeType Typ mime przesyłanej etykiety.
 */
function ItemToPrintResponse(shipmentId, labelType, labelData, labelMimeType) {
	this.shipmentId = shipmentId;
	this.labelType = labelType;
	this.labelData = labelData;
	this.labelMimeType = labelMimeType;
}


module.exports.ItemToPrintResponse = ItemToPrintResponse;