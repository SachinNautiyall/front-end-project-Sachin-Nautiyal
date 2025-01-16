function searchGallery() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var criteria = document.getElementById('searchCriteria').value;
    var galleryItems = document.getElementsByClassName('gallery-item');

    for (var i = 0; i < galleryItems.length; i++) {
        var locationName = galleryItems[i].getElementsByClassName('location-name')[0].textContent.toLowerCase();

        if (criteria === 'country' && locationName.includes(input)) {
            galleryItems[i].style.display = 'block';
        } else if (criteria === 'continent' && isContinentMatch(locationName, input)) {
            galleryItems[i].style.display = 'block';
        } else {
            galleryItems[i].style.display = 'none';
        }
    }
}

function isContinentMatch(locationName, input) {
    const continents = {
        "africa": ["egypt"],
        "asia": ["india", "china", "japan"],
        "europe": ["italy", "denmark"],
        "north america": ["canada", "usa"],
        "south america": ["brazil"]
    };

    for (const continent in continents) {
        if (continent.includes(input)) {
            if (continents[continent].some(country => locationName.includes(country))) {
                return true;
            }
        }
    }
    return false;
}
