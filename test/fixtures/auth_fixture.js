var authFixtures = {
  validateTokenResponse: {
    provider: 'firma8',
    uid: '1234',
    info: {
      name: 'jon',
      email: 'jon@firma8.com'
    },
    extra: {
      token: '5678',
      customers: [
        {
          id: '3942',
          name: 'firma8',
          roles: [
            'member',
            'admin'
          ],
          languages: [
            'en',
            'es',
            'de'
          ]
        }
      ]
    }
  },

  languagesResponse: [
    {
      "name": "Dutch",
      "alpha2": "nl",
      "alpha3": "nld",
      "direction": "ltr",
      "regions": [
        {
          "name": "Aruba ",
          "code": "AW"
        },
        {
          "name": "Belgium",
          "code": "be"
        }
      ]
    },
    {
      "name": "English",
      "alpha2": "en",
      "alpha3": "eng",
      "direction": "ltr",
      "regions": [
        {
          "name": "Australia",
          "code": "au"
        },
        {
          "name": "Belize",
          "code": "bz"
        }
      ]
    },
    {
      "name": "Spanish",
      "alpha2": "es",
      "alpha3": "spa",
      "direction": "ltr",
      "regions": [
        {
          "name": "Argentina",
          "code": "ar"
        },
        {
          "name": "Bolivia",
          "code": "bo"
        }
      ]
    },
    {
      "name": "German",
      "alpha2": "de",
      "alpha3": "deu",
      "direction": "ltr",
      "regions": [
        {
          "name": "Austria",
          "code": "at"
        },
        {
          "name": "Belgium ",
          "code": "BE"
        }
      ]
    }
  ],

  languagesFormatted: [
    {
      "code": "en",
      "name": "English",
      "direction": "ltr"
    },
    {
      "code": "en-au",
      "name": "English-Australia",
      "direction": "ltr"
    },
    {
      "code": "en-bz",
      "name": "English-Belize",
      "direction": "ltr"
    },
    {
      "code": "es",
      "name": "Spanish",
      "direction": "ltr"
    },
    {
      "code": "es-ar",
      "name": "Spanish-Argentina",
      "direction": "ltr"
    },
    {
      "code": "es-bo",
      "name": "Spanish-Bolivia",
      "direction": "ltr"
    },
    {
      "code": "de",
      "name": "German",
      "direction": "ltr"
    },
    {
      "code": "de-at",
      "name": "German-Austria",
      "direction": "ltr"
    },
    {
      "code": "de-BE",
      "name": "German-Belgium ",
      "direction": "ltr"
    }
  ]
};

exports = module.exports = authFixtures;
