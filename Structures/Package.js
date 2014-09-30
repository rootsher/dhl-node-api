/**
 * @constructor
 * @param {string} type
 * @param {boolean} euroReturn
 * @param {number} weight
 * @param {number} width
 * @param {number} height
 * @param {number} length
 * @param {number} quantity
 * @param {boolean} nonStandard
 * @param {string} blpPieceId
 */
function Package(type, euroReturn, weight, width, height, length, quantity, nonStandard, blpPieceId) {
	this.type = type;
	this.euroReturn = euroReturn;
	this.weight = weight;
	this.width = width;
	this.height = height;
	this.length = length;
	this.quantity = quantity;
	this.nonStandard = nonStandard;
	this.blpPieceId = blpPieceId;
}


module.exports.Package = Package;