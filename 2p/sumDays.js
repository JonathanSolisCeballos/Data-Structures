function addDays(day, nDays) {
    switch ((day + nDays) % 7) {
        case 0:
            return "Lunes";
            break;
        case 1:
            return "Martes";
            break;
        case 2:
            return "Miércoles";
            break;
        case 3:
            return "Jueves";
            break;
        case 4:
            return "Viernes";
            break;
        case 5:
            return "Sábado";
            break;
        case 6:
            return "Domingo";
            break;
    }
}