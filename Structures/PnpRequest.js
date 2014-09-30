/**
 * @constructor
 * @param {string} date Data, w formacie RRRR-MM-DD, dla której raport jest generowany (w raporcie zestawiane są przesyłki nadawane w określonym dniu).
 * @param {string} type Dla jakich przesyłek raport ma być wygenerowany, dostępne wartości słownikowe: EX - krajowe ekspresowe do 31,5kg, DR - krajowe drobnicowe, ALL - wszystkie krajowe przesyłki, 2EUROPE - przesyłki eksportowe
 */
function PnpRequest(date, type) {
    this.date = date;
    this.type = type;
}


module.exports.PnpRequest = PnpRequest;