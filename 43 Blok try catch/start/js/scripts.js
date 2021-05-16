function searchDB() {

    console.log('Otwieram połączenie');

    db.search();

    console.log('Zamykam połączenie');

}

try {

    searchDB();

} catch(e) {
    // console.log(e);
    // console.dir(e); //wyświetla źródło błędu
    console.log("Wystąpił błąd: " + e.message);
} finally {

    console.log('Zamykam połączenie');

}