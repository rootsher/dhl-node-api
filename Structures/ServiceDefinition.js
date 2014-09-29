/**
 * W tej strukturze przesyłane są informacje o wybranej usłudze przewozowej oraz usługach dodatkowych.
 * 	Możliwości łączenia ze sobą poszczególnych produktów oraz usług dodatkowych są ograniczone - WebAPI nie umożliwi utworzenia przesyłki z niedozwoloną kombinacją usług (zwracając czytelny komunikat błędu). Więcej szczegółów dostępnych jest w cenniku usług krajowych DHL.
 * @constructor
 * @param {string} product Wartość słownikowa: AH - przesyłka krajowa, 09 - Domestic 09, 12 - Domestic 12, EK - przesyłka eksportowa.
 * @param {boolean} [deliveryEvening] Wybór usługi Doręczenie wieczorne.
 * @param {boolean} [deliverySaturday] Wybór usługi Doręczenie w sobotę.
 * @param {boolean} [collectOnDelivery] Wybór usługi opłata za pobraniem.
 * @param {number} collectOnDeliveryValue Kwota pobrania w PLN, z dokładnością do groszy, maksymalnie 11000 zł. Obowiązkowy jeśli wybrano COD.
 * @param {string} collectOnDeliveryForm Forma zwrotu pobrania. Dopuszczalne wartości: CASH - gotówka, BANK_TRANSFER - przelew. Obowiązkowy jeśli wybrano COD.
 * @param {string} [collectOnDeliveryReference] Pole "referencja pobrania" na liście przewozowym.
 * @param {boolean} [insurance] Wybór usługi ubezpieczenie.
 * @param {number} insuranceValue Wartość przesyłki do ubezpieczenia. Obowiązkowy jeśli wybrano insurance.
 * @param {boolean} [returnOnDelivery] Usługa zwrotu potwierdzonego dokumentu.
 * @param {string} [returnOnDeliveryReference] Nazwa dokumentu zwrotnego.
 * @param {boolean} [proofOfDelivery] Wybór usługi potwierdzenie doręczenia.
 * @param {boolean} [selfCollect] Wybór usługi odbiór własny.
 * @param {boolean} [deliveryToNeighbour] Doręczenie do sąsiada.
 * @param {boolean} [predeliveryInformation] Wybór usługi informacja przed doręczeniem.
 * @param {boolean} [preaviso] Wybór usługi preawizacji - informacja dla odbiorcy o przyjęciu paczki do przesłania.
 */
function ServiceDefinition(product, deliveryEvening, deliverySaturday, collectOnDelivery, collectOnDeliveryValue, collectOnDeliveryForm, collectOnDeliveryReference, insurance, insuranceValue, returnOnDelivery, returnOnDeliveryReference, proofOfDelivery, selfCollect, deliveryToNeighbour, predeliveryInformation, preaviso) {
	this.product = product;
	this.deliveryEvening = deliveryEvening;
	this.deliverySaturday = deliverySaturday;
	this.collectOnDelivery = collectOnDelivery;
	this.collectOnDeliveryValue = collectOnDeliveryValue;
	this.collectOnDeliveryForm = collectOnDeliveryForm;
	this.collectOnDeliveryReference = collectOnDeliveryReference;
	this.insurance = insurance;
	this.insuranceValue = insuranceValue;
	this.returnOnDelivery = returnOnDelivery;
	this.returnOnDeliveryReference = returnOnDeliveryReference;
	this.proofOfDelivery = proofOfDelivery;
	this.selfCollect = selfCollect;
	this.deliveryToNeighbour = deliveryToNeighbour;
	this.predeliveryInformation = predeliveryInformation;
	this.preaviso = preaviso;
}


module.exports.ServiceDefinition = ServiceDefinition;