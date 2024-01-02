/*
 * Enum (numaralandırma)
 * Belirli Değerler Kümesi
 * Eleman sayısı değişmeyecek olan dataları ifade etmek için kullanılır
 * Genelde az miktarda farklı değere sahip olan verileri
 * gruplandırmak için tercih ederiz.
 * Enum isimlendiriken sonuna "enum" takısı koymak faydıdalırıdır
 * İsimlendirmede değişken isimlendirme kurallarına sadık kalırız
 */
var RenklerEnum;
(function (RenklerEnum) {
    RenklerEnum["Kirmizi"] = "Kirmizi";
    RenklerEnum["Yesil"] = "Yesil";
    RenklerEnum["Sari"] = "Sari";
})(RenklerEnum || (RenklerEnum = {}));
var araba_renk = RenklerEnum.Kirmizi;
console.log('renk', araba_renk);
// Örnek 2
var Gunler;
(function (Gunler) {
    Gunler[Gunler["Pazartesi"] = 0] = "Pazartesi";
    Gunler[Gunler["Sali"] = 1] = "Sali";
    Gunler[Gunler["Carsamba"] = 2] = "Carsamba";
    Gunler[Gunler["Persembe"] = 3] = "Persembe";
    Gunler[Gunler["Cuma"] = 4] = "Cuma";
    Gunler[Gunler["Cumartesi"] = 5] = "Cumartesi";
    Gunler[Gunler["Pazar"] = 6] = "Pazar";
})(Gunler || (Gunler = {}));
