/**
 * @constructor
 * @param {AddressData} shipper Dane nadawcy.
 * @param {number} numberOfExPieces Ilość przesyłek ekspresowych.
 * @param {number} numberOfDrPieces Ilość przesyłek drobnicowych.
 * @param {number} totalWeight Łączna waga paczek.
 * @param {number} heaviestPieceWeight Waga najcięższej paczki.
 */
function ShipmentOrderInfo(shipper, numberOfExPieces, numberOfDrPieces, totalWeight, heaviestPieceWeight) {
	this.shipper = shipper;
	this.numberOfExPieces = numberOfExPieces;
	this.numberOfDrPieces = numberOfDrPieces;
	this.totalWeight = totalWeight;
	this.heaviestPieceWeight = heaviestPieceWeight;
}


module.exports.ShipmentOrderInfo = ShipmentOrderInfo;