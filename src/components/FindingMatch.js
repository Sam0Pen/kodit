const FindingMatch = async (home, appartments) => {
    let home_rooms = parseInt(home.rooms);
    let app_array = appartments;
    let array = [];
    for (let i = 0; i < app_array.length; i++) {
        let appartment = app_array[i];
            if (home_rooms === appartment.room_count && appartment.price_sqm != null) {
                array.push(appartment);   
            }
        }
    return array;
}
export default FindingMatch;