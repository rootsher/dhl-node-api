/**
 * @constructor
 * @param {string} product Wartość słownikowa: AH - przesyłka krajowa, 09 - Domestic 09, 12 - Domestic 12, EK - przesyłka eksportowa.
 * @param {boolean} deliveryEvening Wybór usługi Doręczenie wieczorne.
 * @param {boolean} deliveryOnSaturday Wybór usługi Doręczenie w sobotę.
 * @param {boolean} pickupOnSaturday Wybiór usługi Odbiór w sobotę.
 * @param {boolean} collectOnDelivery Wybór usługi opłata za pobraniem.
 * @param {number} collectOnDeliveryValue Kwota pobrania w PLN, z dokładnością do groszy, maksymalnie 11000 zł.
 * @param {string} collectOnDeliveryForm Forma zwrotu pobrania. Dopuszczalne wartości: CASH - gotówka, BANK_TRANSFER - przelew.
 * @param {string} collectOnDeliveryReference Pole "referencja pobrania" na liście przewozowym.
 * @param {boolean} insurance Wybór usługi ubezpieczenie.
 * @param {number} insuranceValue Wartość przesyłki do ubezpieczenia.
 * @param {boolean} returnOnDelivery Usługa zwrotu potwierdzonego dokumentu.
 * @param {string} returnOnDeliveryReference Nazwa dokumentu zwrotnego.
 * @param {boolean} proofOfDelivery Wybór usługi potwierdzenie doręczenia.
 * @param {boolean} selfCollect Wybór usługi odbiór własny.
 * @param {boolean} predeliveryInformation Wybór usługi informacja przed doręczeniem.
 * @param {boolean} deliveryToNeighbour Doręczenie do sąsiada.
 * @param {boolean} preaviso Wybór usługi preawizacji - informacja dla odbiorcy o przyjęciu paczki do przesłania.
 */
function ServiceDefinition(product, deliveryEvening, deliveryOnSaturday, pickupOnSaturday, collectOnDelivery, collectOnDeliveryValue, collectOnDeliveryForm, collectOnDeliveryReference, insurance, insuranceValue, returnOnDelivery, returnOnDeliveryReference, proofOfDelivery, selfCollect, predeliveryInformation, deliveryToNeighbour, preaviso) {
    this.product = product;
    this.deliveryEvening = deliveryEvening;
    this.deliveryOnSaturday = deliveryOnSaturday;
    this.pickupOnSaturday = pickupOnSaturday;
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
    this.predeliveryInformation = predeliveryInformation;
    this.deliveryToNeighbour = deliveryToNeighbour;
    this.preaviso = preaviso;
}


module.exports.ServiceDefinition = ServiceDefinition;