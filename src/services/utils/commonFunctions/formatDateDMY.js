

export const formatDateDMY = (dateString) => {
    const options = {day: "numeric", month:"numeric", year:"numeric"};
    const formattedDate = new Date(dateString).toLocaleDateString("es-ES", options);
    
    return formattedDate
}