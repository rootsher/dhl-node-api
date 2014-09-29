var DHLNodeAPI = require('../dhl-node-api').DHLNodeAPI;
var Structures = require('../Structures');

var WSDL_URL = 'http://sandbox.dhl24.com.pl/webapi';
var WSDL_OPTIONS = {};

new DHLNodeAPI().createClient(WSDL_URL, WSDL_OPTIONS).done(function (api) {
	api.setAuthData('username', 'password');

	/*api.createShipments(new Structures.ShipmentFullData(
		new Structures.Address('name', '44455', 'warsaw', 'blablab', '22', '55', undefined, undefined, undefined),
		new Structures.ReceiverAddress('country', false, false, '1234567890', 'name', '22233', 'wfwfwf', 'streetss', undefined, undefined, undefined, undefined),
		[ new Structures.PieceDefinition('ENVELOPE', undefined, undefined, undefined, undefined, 2, undefined, undefined, undefined) ],
		new Structures.PaymentData('CASH', 'SHIPPER', undefined, undefined),
		new Structures.ServiceDefinition('AH', undefined, undefined, undefined, 100, 'CASH', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined),
		'2015-07-28',
		undefined,
		undefined,
		'cos tam jest',
		undefined,
		undefined,
		undefined,
		undefined
	)).done(function (result) {
		console.log('result', result);
	}, function (error) {
		console.error('error', error.stack);
	});*/

	api.createShipment({
		shipmentInfo: {
			dropOffType: 'REQUEST_COURIER',
			serviceType: 'AH',
			billing: {
				shippingPaymentType: 'SHIPPER',
				billingAccountNumber: '2224993',
				paymentType: 'BANK_TRANSFER',
				costsCenter: 'ABC1235'
			},
			specialServices: {
				item: [
					{
						serviceType: 'ODB'
					},
					{
						serviceType: 'UBEZP',
						serviceValue: 20000
					}
				]
			},
			shipmentTime: {
				shipmentDate: '2014-09-30',
				shipmentStartHour: '12:00',
				shipmentEndHour: '15:00'
			},
			labelType: 'ZBLP',
		},
		content: 'zarowki',
		comment: 'uwaga',
		reference: 'AAA',
		ship: {
			shipper: {
				preaviso: {
					personName: '1',
					phoneNumber: '2',
					emailAddress: 'aaa@fefe.com'
				},
				contact: {
					personName: '4',
					phoneNumber: '5',
					emailAddress: 'aaa@fefe.com'
				},
				address: {
					name: '7',
					postalCode: '01241',
					city: '9',
					street: '10',
					houseNumber: '11',
					apartmentNumber: '12'
				}
			},
			receiver: {
				preaviso: {
					personName: '13',
					phoneNumber: '14',
					emailAddress: 'aaa@fefe.com'
				},
				contact: {
					personName: '16',
					phoneNumber: '17',
					emailAddress: 'aaa@fefe.com'
				},
				address: {
					country: 'PL',
					name: '20',
					postalCode: '01241',
					city: '22',
					street: '23',
					houseNumber: '24',
					apartmentNumber: '25'
				}
			}
		},
		pieceList: {
			item: [
				{
					type: 'ENVELOPE',
					quantity: 1
				},
				{
					type: 'PACKAGE',
					weight: 1,
					width: 2,
					height: 3,
					length: 4,
					quantity: 1
				}
			]
		}
	}).done(function (result) {
		//delete result[0].createShipmentResult.label;
		console.log('result', result[0].createShipmentResult);
	}, function (error) {
		console.error('error', error);
	});
});