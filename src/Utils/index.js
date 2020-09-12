export const getMonth = (month) => {
    switch (month)
    {
        case 0: {
            return 'Janvier'
        }
        case 1: {
            return "Février"
        }
        case 2: {
            return 'Mars'
        }
        case 3: {
            return "Avril"
        }
        case 4: {
            return "Mai"
        }
        case 5: {
            return "Juin"
        }
        case 6: {
            return "Juillet"
        }
        case 7: {
            return "Août"
        }
        case 8: {
            return "Septembre"
        }
        case 9: {
            return "Octobre"
        }
        case 10: {
            return "Novembre"
        }
        case 11: {
            return "Décembre"
        }
        default: {
            break;
        }
    }
};

export const getDay = (day) => {
    switch (day)
    {
        case 0: {
            return "Dimanche"
        }
        case 1: {
            return "Lundi"
        }
        case 2: {
            return "Mardi"
        }
        case 3: {
            return "Mercredi"
        }
        case 4: {
            return "Jeudi"
        }
        case 5: {
            return "Vendredi"
        }
        case 6: {
            return "Samedi"
        }
        case 7: {
            return "Dimanche"
        }
        default: {
            break;
        }
    }
}

export const WeatherTableCodes = {
    0: "Soleil",
    1: "Peu nuagueux",
    2: "Ciel voilé",
    3: "Nuageux",
    4: "Très nuageux",
    5: "Couvert",
    6: "Brouillard",
    7: "Brouillard givrant",
    10: "Pluie",
    11: "Pluie",
    12: "Pluie",
    13: "Pluie verglaçante",
    14: "Pluie verglaçante",
    15: "Pluie verglaçante",
    16: "Bruine",
    20: "Neige",
    21: "Neige",
    22: "Neige",
    30: "Neige",
    31: "Neige",
    32: "Neige",
    40: "Averses de pluie",
    41: "Averses de pluie",
    42: "Averses de pluie",
    43: "Averses de pluie",
    44: "Averses de pluie",
    45: "Averses de pluie",
    46: "Averses de pluie",
    47: "Averses de pluie",
    48: "Averses de pluie",
    60: "Averses de neige",
    61: "Averses de neige",
    62: "Averses de neige",
    63: "Averses de neige",
    64: "Averses de neige",
    65: "Averses de neige",
    66: "Averses de neige",
    67: "Averses de neige",
    68: "Averses de neige",
    70: "Averses de neige et de pluie",
    71: "Averses de neige et de pluie",
    72: "Averses de neige et de pluie",
    73: "Averses de neige et de pluie",
    74: "Averses de neige et de pluie",
    75: "Averses de neige et de pluie",
    76: "Averses de neige et de pluie",
    77: "Averses de neige et de pluie",
    78: "Averses de neige et de pluie",
    100: "Orages",
    101: "Orages",
    102: "Orages",
    103: "Orages",
    104: "Orages",
    105: "Orages",
    106: "Orages",
    107: "Orages",
    108: "Orages",
    120: "Orages locaux",
    121: "Orages locaux",
    122: "Orages locaux",
    123: "Orages locaux",
    124: "Orages locaux",
    125: "Orages locaux",
    126: "Orages locaux",
    127: "Orages locaux",
    128: "Orages locaux",
    140: "Pluie orageuses",
    210: "Pluie intermittente",
    211: "Pluie intermittente",
    212: "Pluie intermittente",
    220: "Neige intermittente",
    221: "Neige intermittente",
    222: "Neige intermittente",
    230: "Neige & Pluie",
    231: "Neige & Pluie",
    232: "Neige & Pluie",
    235: "Grèle"
};

export const ImageByCode = (code) => {
    if (code >= 3 && code <= 7)
    {
        return `${process.env.PUBLIC_URL}/animated/cloudy-day-3.svg`;
    }
    if ((code >= 10 && code <= 15) || (code >= 210 && code <= 212))
    {
        return `${process.env.PUBLIC_URL}/animated/rainy-1.svg`;
    }
    if (code >= 40 && code <= 48)
    {
        return `${process.env.PUBLIC_URL}/animated/rainy-4.svg`;
    }
    if ((code >= 10 && code <= 15) || (code >= 210 && code <= 212))
    {
        return `${process.env.PUBLIC_URL}/animated/rainy-1.svg`;
    }
    if ((code >= 20 && code <= 32) || (code >= 220 && code <= 232))
    {
        return `${process.env.PUBLIC_URL}/animated/snowy-3.svg`;
    }
    if (code >= 60 && code <= 68)
    {
        return `${process.env.PUBLIC_URL}/animated/snowy-3.svg`;
    }
    if (code >= 70 && code <= 78)
    {
        return `${process.env.PUBLIC_URL}/animated/snowy-5.svg`;
    }
    if ((code >= 100 && code <= 140) || code === 235)
    {
        return `${process.env.PUBLIC_URL}/animated/thunder.svg`;
    }
    switch (code)
    {
        case 0: {
            return `${process.env.PUBLIC_URL}/animated/day.svg`;
        }
        case 1: {
            return `${process.env.PUBLIC_URL}/animated/cloudy-day-1.svg`;
        }
        case 2: {
            return `${process.env.PUBLIC_URL}/animated/cloudy-day-2.svg`;
        }
        default: {
            return `${process.env.PUBLIC_URL}/animated/day.svg`
        }
    }
};