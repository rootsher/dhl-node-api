/**
 * @constructor
 * @param {string} labelType Wartość słownikowa - jedna z wartości: LP - list przewozowy, BLP - etykieta BLP, ZBLP - etykieta BLP w formacie dla drukarek Zebra.
 * @param {string} shipmentId Numer przesyłki, dla której chcemy pobrać etykietę.
 */
function ItemToPrint(labelType, shipmentId) {
    this.labelType = labelType;
    this.shipmentId = shipmentId;
}


module.exports.ItemToPrint = ItemToPrint;