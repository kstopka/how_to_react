export const names: string[] = [
    "Aleksander",
    "Piotr",
    "Igor",
    "Rafał",
    "Marcin",
    "Bruno",
    "Adrian",
    "Kamil",
    "Kryspin",
    "Gracjan",
    "Izyda",
    "Edyta",
    "Iga",
    "Felicja",
    "Ola",
    "Andżelika",
    "Helena",
    "Oktawia",
    "Klementyna",
    "Celina",
];

export const surnames: string[] = [
    "Krajewska",
    "Wójcik",
    "Duda",
    "Kaźmierczak",
    "Zalewska",
    "Szulc",
    "Sokołowska",
    "Kalinowska",
    "Wiśniewska",
    "Cieślak",
    "Kubiak",
    "Kołodziej",
    "Kaźmierczak",
    "Głowacka",
    "Zielińska",
    "Mróz",
    "Sikorska",
    "Przybylska",
    "Stępień",
    "Kaźmierczak",
];

const createArrayOfNumber = (start: number, end: number): number[] => {
    const data = [];
    let number = start;
    while (number <= end) {
        data.push(number);
        number++;
    }
    return data;
};

export const ages: number[] = createArrayOfNumber(18, 50);

export const sex: string[] = ["male", "female"];
