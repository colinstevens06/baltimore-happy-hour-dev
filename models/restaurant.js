const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const happyHourOptionSchema = new Schema({
  time: {
    type: String,
    required: true
  },
  drinks: {
    type: Array,
    required: true
  },
  food: {
    type: Array,
    required: true
  }
})

const happyHourSchema = new Schema({
  day: {
    type: String,
    required: true
  },
  options: [happyHourOptionSchema]
})

const specialOptionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: Array,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})

const specialsSchema = new Schema({
  day: {
    type: String,
    required: true
  },
  options: [specialOptionSchema]
})

const hoursSchema = new Schema({
  day: {
    type: String,
    required: true
  },
  time: {
    type: String,
  }

})

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  location: {
    streetLineOne: {
      type: String,
      required: true
    },
    city: {
      name: {
        type: String,
        required: true
      },
      neighborhood: {
        type: String,
        required: true
      }
    },
    state: {
      type: String,
      required: true
    },
    zip: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    hours:
      [hoursSchema]
  },
  specials: [
    specialsSchema
  ],
  happyHour: [happyHourSchema],
  features: {
    description: {
      type: Array,
      required: true
    },
    sports: {
      sportsBar: {
        type: Boolean,
        required: true
      },
      teams: {
        type: Array,
        required: true
      },
    },
    games: {
      gamesBar: {
        type: Boolean,
        required: true
      },
      type: {
        type: Array,
        required: true
      }
    },
    music: {
      liveMusic: {
        type: Boolean,
        required: true
      },
      jukebox: {
        type: Boolean,
        required: true
      },
      dj: {
        type: Boolean,
        required: true
      },
      danceFloor: {
        type: Boolean,
        required: true
      },
    },
    outdoorSeating: {
      type: Boolean,
      required: true
    },
    trivia: {
      triviaBar: {
        type: Boolean,
        required: true
      },
      night: {
        type: String,
        required: true
      }
    },
    misc: {
      miscBar: {
        type: Boolean,
        required: true
      },
      miscTitle: {
        type: String,
        required: true
      },
      miscDescription: {
        type: String,
        required: true
      }
    },
    miscList: {
      type: Array,
      required: true,
    }
  },
  brunch: {
    brunchBar: {
      type: Boolean,
      required: true
    },
    brunchPrices: {
      type: Array,
      required: true
    }
  }

});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
