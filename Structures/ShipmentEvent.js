/**
 * Struktura wykorzystywana w odpowiedzi metody getTrackAndTraceInfo. Każda tego typu struktura odwzorowuje przejście przesyłki przez kolejny etap dostarczenia.
 * @constructor
 * @param {string} status Etap doręczenia przesyłki.
 * @param {string} description Opis słowny statusu.
 * @param {string} timestamp Data i czas powstania statusu.
 * @param {string} terminal Nazwa terminala, w którym status wystąpił.
 */
function ShipmentEvent(status, description, timestamp, terminal) {
	this.status = status;
	this.description = description;
	this.timestamp = timestamp;
	this.terminal = terminal;
}


module.exports.ShipmentEvent = ShipmentEvent;