var NodeSOAPWrapper = require('node-soap-wrapper').NodeSOAPWrapper;
var Structures = require('./Structures');


// ## API ###

/**
 * @name DHLNodeAPI
 * @constructor
 */
function DHLNodeAPI() {
    this._client = undefined;
    this._authData = undefined;
}

/**
 * @param {string} url URL address (WSDL) to connection.
 * @param {Object} options Options for SOAP client.
 */
DHLNodeAPI.prototype.createClient = function createClient(url, options) {
    var self = this;
    var nodeSOAPWrapper = new NodeSOAPWrapper();

    options = options || {};

    return nodeSOAPWrapper.createClient(url, options).then(nodeSOAPWrapper.liftAll).then(function (client) {
        self._client = client;

        return self;
    });
};

/**
 * @param {string} username Username for authentication.
 * @param {string} password Password for authentication.
 */
DHLNodeAPI.prototype.setAuthData = function setAuthData(username, password) {
    this._authData = new Structures.AuthData(username, password);
};

// ### Basic methods ###

/**
 * Sprawdzanie wersji webapi.
 */
DHLNodeAPI.prototype.getVersion = function getVersion() {
    return this._client.getVersion();
};

/**
 * Metoda umożliwia utworzenie przesyłek w systemie DHL24. Obowiązują wszystkie reguły walidacyjne, które używane są w serwisie WWW. W przypadku nie przejścia przez proces walidacyjny zostanie zwrócona struktura błędu z odpowiednim komunikatem, opisującym przyczynę problemu.
 *   Aby przesyłka była utworzona muszą być spełnione warunki:
 *     - wybrana usługa przewozowa musi być dostępna (w wybranych godzinach) dla danego kodu pocztowego, pomocne w tym może być sprawdzenie kodu pocztowego przy pomocy getPostalCodeServices,
 *     - paczki muszą spełniać ogólne kryteria, zestawione w cenniku.
 *   W trybie testowym metoda dokonuje walidacji danych wejściowych, bez sprawdzenia rzeczywistej dostępności usług czy też opcji płatności. Zwraca przykładową strukturę wyjściową lub struktury błędów.
 * @param {ArrayOfShipmentfulldata} shipments Tablica z minimum jedną strukturą definiującą przesyłkę (maksymalnie trzema).
 */
DHLNodeAPI.prototype.createShipments = function createShipments(shipments) {
    return this._client.createShipments({
        authData: this._authData,
        shipments: shipments
    });
};

/**
 * Metoda umożliwia usunięcie przesyłek utworzonych przez użytkownika w systemie DHL24 lub przez webapi. Daje możliwość skasowania dowolnej swojej przesyłki, o ile nie zamówiono po nią kuriera (w takim przypadku należy w pierwszej kolejności odwołać kuriera).
 * @param {ArrayOfString} shipments Tablica tekstowych identyfikatorów przesyłek.
 */
DHLNodeAPI.prototype.deleteShipments = function deleteShipments(shipments) {
    return this._client.deleteShipments({
        authData: this._authData,
        shipments: shipments
    });
};

/**
 * Możliwość pobrania listy przesyłek klienta DHL24. Zwracane są także identyfikatory przesyłek. Są one potrzebne aby skorzystać z innych metod (bookCourier, deleteShipments, getLabels, getShipmentScan, getTrackAndTraceInfo).
 * @param {string} createdFrom Początek zakresu czasowego, data w formacie RRRR-MM-DD.
 * @param {string} createdTo Koniec zakresu czasowego, data w formacie RRRR-MM-DD.
 * @param {number} offset Usługa zwraca maksymalnie 100 rekordów - w przypadku gdy w danym przedziale czasowym jest ich więcej, należy skorzystać z offsetu.
 */
DHLNodeAPI.prototype.getMyShipments = function getMyShipments(createdFrom, createdTo, offset) {
    return this._client.getMyShipments({
        authData: this._authData,
        createdFrom: createdFrom,
        createdTo: createdTo,
        offset: offset
    });
};

/**
 * Metoda zwraca ilość przesyłek danego użytkownika utworzonych w zadanym przedziale czasowym. Jej wykorzystanie pozwala w wygodniejszy sposób korzystać z parametru offset metody getMyShipments.
 * @param {string} createdFrom Początek zakresu czasowego, data w formacie RRRR-MM-DD.
 * @param {string} createdTo Koniec zakresu czasowego, data w formacie RRRR-MM-DD.
 */
DHLNodeAPI.prototype.getMyShipmentsCount = function getMyShipmentsCount(createdFrom, createdTo) {
    return this._client.getMyShipmentsCount({
        authData: this._authData,
        createdFrom: createdFrom,
        createdTo: createdTo
    });
};

/**
 * Metoda pozwala zweryfikować poprawność podanego kodu pocztowego oraz pobrać usługi DHL dostępne dla tego kodu. Wynik działania metody może zależeć od godziny wywołania metody (dostępność usług Domestic 9 oraz Domestic 12).
 *   W przypadku kodu pocztowego nie obsługiwanego przez DHL (lub niepoprawnego) metoda zwróci informację o braku dostępnych usług dla tego kodu. Podczas sprawdzania restrykcji na dzień bieżący metoda zwróci możliwe okienko czasowe tylko, jeśli zamówienie kuriera jest jeszcze w danym dniu możliwe.
 * @param {string} postCode Kod pocztowy w formacie 5 cyfr (bez kreski).
 * @param {string} pickupDate Data, dla której sprawdzamy dostępność usług (w formacie RRRR-MM-DD).
 */
DHLNodeAPI.prototype.getPostalCodeServices = function getPostalCodeServices(postCode, pickupDate) {
    return this._client.getPostalCodeServices({
        authData: this._authData,
        postCode: postCode,
        pickupDate: pickupDate
    });
};

/**
 * Możliwość pobrania historii procesu doręczania przesyłki oraz jej aktualnego statusu.
 * @param {string} shipmentId Numer identyfikacyjny przesyłki.
 */
DHLNodeAPI.prototype.getTrackAndTraceInfo = function getTrackAndTraceInfo(shipmentId) {
    return this._client.getTrackAndTraceInfo({
        authData: this._authData,
        shipmentId: shipmentId
    });
};

/**
 * Metoda umożliwia zamówienie kuriera do zdefiniowanych wcześniej przesyłek, na konkretny dzień w ramach wskazanych godzin. Po otrzymaniu żądania metoda sprawdza dane wejściowe: czy możliwy jest przyjazd kuriera w wyznaczonym czasie i czy wszystkie wskazane przesyłki mogą być odebrane w jednym miejscu (zgodność adresów nadania). W przypadku wystąpienia błędu komunikat zwrotny będzie wskazywał przyczynę problemu.
 *   Zamówić kuriera można:
 *     - dla listy przygotowanych wcześniej przesyłek (przez podanie identyfikatorów przesyłek w parametrze shipmentIdList),
 *     - bez podawanie przesyłek - wymagana jest wtedy struktura shipmentOrderInfo z podstawowymi danymi o zamówieniu.
 *   Uwaga - w przypadku zamawiania kuriera bez podania listy przesyłek, takie zamówienie będzie niewidoczne na liście przesyłek w serwisie www.
 * @param {string} pickupDate Data w formacie RRRR-MM-DD.
 * @param {string} pickupTimeFrom Godzina, od której przesyłka jest gotowa do odebrania (w formacie GG:MM).
 * @param {string} pickupTimeTo Godzina, do której można odebrać przesyłkę (w formacie GG:MM).
 * @param {string} additionalInfo Dodatkowe informacje dla kuriera.
 * @param {ArrayOfString} shipmentIdList Tablica elementów typu string, zawierająca identyfikatory przesyłek.
 * @param {ShipmentOrderInfo} shipmentOrderInfo Zbiorcze dane dotyczące nadawcy oraz ilości oraz wagi przesyłek.
 */
DHLNodeAPI.prototype.bookCourier = function bookCourier(pickupDate, pickupTimeFrom, pickupTimeTo, additionalInfo, shipmentIdList, shipmentOrderInfo) {
    return this._client.bookCourier({
        authData: this._authData,
        pickupDate: pickupDate,
        pickupTimeFrom: pickupTimeFrom,
        pickupTimeTo: pickupTimeTo,
        additionalInfo: additionalInfo,
        shipmentIdList: shipmentIdList,
        shipmentOrderInfo: shipmentOrderInfo
    });
};

/**
 * Metoda pozwala na anulowanie zlecenia zamówienia kuriera.
 * @param {ArrayOfString} orders Tablica numerów zleceń zamówienia kuriera, uzyskany za pomocą metody bookCourier.
 */
DHLNodeAPI.prototype.cancelCourierBooking = function cancelCourierBooking(orders) {
    return this._client.cancelCourierBooking({
        authData: this._authData,
        orders: orders
    });
};

/**
 * Możliwość pobierania etykiet stosowanych w procesie zamawiania kuriera DHL24. Możliwe jest pobranie etykiet: listu przewozowego oraz BLP (w formacie PDF oraz ZPL).
 *   Jeżeli używacie Państwo drukarki laserowej - etykieta wygenerowana w pliku pdf - parametr BLP.
 *   Jeżeli używacie Państwo drukarki termicznej zebra - etykieta wygenerowana w pliku zpl - parametr ZBLP.
 * @param {ArrayOfItemtoprint} itemsToPrint Tablica struktur typu ItemToPrint (maksymalnie trzy struktury).
 */
DHLNodeAPI.prototype.getLabels = function getLabels(itemsToPrint) {
    return this._client.getLabels({
        authData: this._authData,
        itemsToPrint: itemsToPrint
    });
};

/**
 * Możliwość wygenerowania tzw. raportu PNP (Potwierdzenie Nadania Przesyłek). Raport tego typu wykorzystywany jest przez klientów drukujących etykiety BLP.
 * @param {PnpRequest} pnpRequest
 */
DHLNodeAPI.prototype.getPnp = function getPnp(pnpRequest) {
    return this._client.getPnp({
        authData: this._authData,
        pnpRequest: pnpRequest
    });
};

/**
 * Metoda umożliwia pobranie skanu listu przewozowego dla zrealizowanej przesyłki.
 * @param {string} shipmentId Numer identyfikacyjny przesyłki.
 */
DHLNodeAPI.prototype.getShipmentScan = function getShipmentScan(shipmentId) {
    return this._client.getShipmentScan({
        authData: this._authData,
        shipmentId: shipmentId
    });
};

/**
 * Przy pomocy tej metody możliwe jest - w jednym żądaniu - utworzenie przesyłki i zamówienie kuriera.
 * @param {CreateShipmentRequest} shipment
 */
DHLNodeAPI.prototype.createShipment = function createShipment(shipment) {
    return this._client.createShipment({
        authData: this._authData,
        shipment: shipment
    });
};

/**
 * Przy pomocy tej metody możliwe jest - w jednym żądaniu - anulowanie kuriera i usunięcie przesyłki.
 * @param {DeleteShipmentRequest} shipment
 */
DHLNodeAPI.prototype.deleteShipment = function deleteShipment(shipment) {
    return this._client.deleteShipment({
        authData: this._authData,
        shipment: shipment
    });
};


module.exports.DHLNodeAPI = DHLNodeAPI;