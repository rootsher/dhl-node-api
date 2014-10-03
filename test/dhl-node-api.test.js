var DHLNodeAPI = require('../dhl-node-api').DHLNodeAPI;
var Structures = require('../Structures');

var WSDL_URL = 'http://sandbox.dhl24.com.pl/webapi';
var WSDL_OPTIONS = {};

new DHLNodeAPI().createClient(WSDL_URL, WSDL_OPTIONS).done(function (api) {
    api.setAuthData('username', 'username');

    api.createShipments([
        new Structures.ArrayOfShipmentfulldata([
            new Structures.ShipmentFullData(
                new Structures.AddressData('company', '03123', 'city', 'street', '00', undefined, 'person', 'phone', 'email@address.com'),
                new Structures.ReceiverAddressData('PL', false, false, undefined, 'receiver', '03234', 'city', 'street', '00', '00', 'person', 'phone', 'email2@addres.com'),
                new Structures.NeighbourAddress('neighbour', '03165', 'city', 'street', '00', '1', 'person', 'email3@address.com'),
                new Structures.ArrayOfPiecedefinition([
                    new Structures.PieceDefinition('ENVELOPE', undefined, undefined, undefined, undefined, 1, false, undefined, undefined),
                    new Structures.PieceDefinition('ENVELOPE', undefined, undefined, undefined, undefined, 2, false, undefined, undefined),
                    new Structures.PieceDefinition('ENVELOPE', undefined, undefined, undefined, undefined, 3, false, undefined, undefined)
                ]),
                new Structures.PaymentData('BANK_TRANSFER', 'SHIPPER', '1234567', undefined),
                new Structures.ServiceDefinition('AH', false, false, true, true, 10.00, 'BANK_TRANSFER', undefined, true, 20.00, false, undefined, false, false, false, false, false),
                '2014-10-04',
                false,
                'comment',
                'content',
                'ref123456',
                '',
                '',
                ''
            )
        ])
    ]).done(function (result) {
        console.log('result', result[0].createShipmentsResult.item[0]);
    }, function (error) {
        console.error('error', error.stack);
    });
});