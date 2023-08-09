// When the document loads
// ----------------------------------------------------------------

$(document).ready(function() {

    console.log("Hello");


    loadTrips()
    
})

// card trips object arrays

const arrTrips = [
    {
        name: "Norway",
        description:"Embark on an unforgettable journey through the breathtaking landscapes of Norway with our exclusive holiday cruise. Immerse yourself in the pristine beauty of fjords, picturesque villages, and awe-inspiring natural wonders, all while enjoying luxurious accommodations, delectable cuisine, and world-class entertainment.",
        button:"More Info",
        image:"Trip1.png",

    },
    
    {
        name: "London",
        description:"London is the capital city of the United Kingdom. It is the U.K.'s largest metropolis and its economic, transportation, and cultural center. London is also among the oldest of the world's great cities, with its history spanning nearly two millennia.",
        button:"More Info",
        image:"Trip 2.jpg",

    },

    {
        name: "Seychelles Island",
        description:"Escape to a world of untouched beauty and unending relaxation on our unforgettable Seychelles Island holiday cruise. Immerse yourself in the stunning landscapes, pristine beaches, and vibrant culture of this tropical paradise as you embark on a journey that promises to create cherished memories for a lifetime.",
        button:"More Info",
        image:"Trip 3.jpg",

    },

    {
        name: "San Francisco",
        description:"Set sail on an enchanting holiday cruise through the iconic San Francisco Bay, where the city's stunning skyline and world-famous landmarks come to life in a symphony of lights and festive cheer. This exclusive holiday experience promises a memorable journey filled with joy, relaxation, and breathtaking sights that will leave you with cherished memories for years to come.",
        button:"More Info",
        image:"Trip 4.jpg",

    },

    {
        name: "Antarctica",
        description:"Embark on a journey of a lifetime to the pristine and mesmerizing landscapes of Antarctica, where an otherworldly adventure awaits you on our carefully curated holiday cruise. Brace yourself for an immersive exploration of the Earth's last untouched frontier, where towering glaciers, colossal icebergs, and captivating wildlife paint a breathtaking canvas of natural wonder.",
        button:"More Info",
        image:"Trip 5.jpg"

    }
]









// Trips card loads

function loadTrips () {

    // Load and display all the trips
    for (let i = 0; i < arrTrips.length; i++) {
        const trips = arrTrips[i]
        
        $(".row2").append($(".tripsTemplate").html());

      // 2: Create a varible that contains the most recently added plant card
      let currentChild = $(".row2").children().eq(i+1);

      // 3: Set the content for the plant card from the plants list
      $(currentChild).find(".card-img-top").attr('src','/Assets/' + trips.image);
      $(currentChild).find("#tripName").text(trips.name);
      $(currentChild).find("#tripBtn").text(trips.button);
      $(currentChild).find("#tripDes").text(trips.description);

    }

      

}