var DHLNodeAPI = require('../dhl-node-api').DHLNodeAPI;
var Structures = require('../Structures');

var WSDL_URL = 'http://sandbox.dhl24.com.pl/webapi';
var WSDL_OPTIONS = {};

new DHLNodeAPI().createClient(WSDL_URL, WSDL_OPTIONS).done(function (api) {
	api.setAuthData('username', 'password');

	api.createShipments(
		[
			new Structures.ArrayOfShipmentfulldata(
				[
					new Structures.ShipmentFullData(
						new Structures.AddressData('firma', '03123', 'Miasto', 'Ulica', 'nr', undefined, 'Osoba', 'tel', 'email'),
						new Structures.ReceiverAddressData('PL', false, false, undefined, 'Odbiorca', '03234', 'Miasto', 'Ulica', 'nr', 'nr', 'Osoba', 'tel', 'email'),
						new Structures.NeighbourAddress('Super neighbour', '03175', 'Warszawa', 'Dobra', '7', '24', 'Paweł Dobry', 'pawelek@buziaczek.pl'),
						new Structures.ArrayOfPiecedefinition(
							[
								new Structures.PieceDefinition('ENVELOPE', undefined, undefined, undefined, undefined, 1, false, undefined, undefined),
								new Structures.PieceDefinition('ENVELOPE', undefined, undefined, undefined, undefined, 2, false, undefined, undefined),
								new Structures.PieceDefinition('ENVELOPE', undefined, undefined, undefined, undefined, 3, false, undefined, undefined)
							]
						),
						new Structures.PaymentData('BANK_TRANSFER', 'SHIPPER', '8887774', undefined),
						new Structures.ServiceDefinition('AH', false, false, true, true, 10.00, 'BANK_TRANSFER', undefined, true, 20.00, false, undefined, false, false, false, false, false),
						'2014-10-04',
						false,
						'comment jakis jest',
						'cos tajnego',
						'ref1274466',
						'',
						'',
						''
					)
				]
			)
		]
	).done(function (result) {
		console.log('result', result);
	}, function (error) {
		console.error('error', error.stack);
	});
});