var provideData = function () {
    var persons = [];

    var positions = {
        doors: function () {
            return {
                cssClass: 'doors',
                activityName: 'Bramki'
            }
        },
        marketplace: function () {
            return {
                cssClass: 'marketplace',
                activityName: 'Targi'
            }
        },
        panels: function () {
            return {
                cssClass: 'panels',
                activityName: 'Panele'
            }
        },

        cloakrooms: function () {
            return {
                cssClass: 'cloakrooms',
                activityName: 'Szatnie'
            }
        },
        tickets: function () {
            return {
                cssClass: 'tickets',
                activityName: 'Bilety'
            }
        },
        info: function () {
            return {
                cssClass: 'info',
                activityName: 'Informacja'
            }
        }

    };

    [
        'Ennio Morricone',
        'Jim Morrison',
        'David Guetta',
        'Alex Turner',
        'Fred Flinstone',
        'Jessica Alba',
        'Neil Patrick Harris',
        'Adam Małysz',
        'Krzysztof Krawczyk',
        'Janusz	Piechociński',
        'James Bond',
        'Beyonce Knowles',
        'Marshall Matters',
        'Zbigniew Zamachowski',
        'Ace Ventura',
        'Bruce Lee',
        'Christiano	Ronaldo',
        'Barack	Obama',
        'Michael Jordan'
    ].forEach(function (el, index) {
        var obj = {};
        obj.personName = el;
        for (var i = 9; i <= 22; i++) {
            var propName = 'hr' + i;
            var arr = ['doors', 'marketplace', 'panels', 'cloakrooms', 'tickets', 'info'];
            var fun = arr[Math.floor(Math.random() * 6)];

            obj[propName] = positions[fun]();
        }
        persons.push(obj);
    });

    var output = {};

    output.persons = persons;

    return output;
};

exports.data = provideData;