/**
 * @constructor
 * @param {ShipmentInfo} shipmentInfo
 * @param {string} content
 * @param {string} comment
 * @param {string} reference
 * @param {Ship} ship
 * @param {ArrayOfPackage} pieceList
 */
function CreateShipmentRequest(shipmentInfo, content, comment, reference, ship, pieceList) {
    this.shipmentInfo = shipmentInfo;
    this.content = content;
    this.comment = comment;
    this.reference = reference;
    this.ship = ship;
    this.pieceList = pieceList;
}


module.exports.CreateShipmentRequest = CreateShipmentRequest;