import orderByProps from "../orderProperties";

const dataList = [
    [
            {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
            ["name", "level"],
            [
                { key: 'name', value: 'мечник' },
                { key: 'level', value: 2 },
                { key: 'attack', value: 80 },
                { key: 'defence', value: 40 },
                { key: 'health', value: 10 }
            ]
    ],
    [
            { attack: 80, defence: 40, health: 10, level: 2, name: 'мечник'},
            ["name", "level"],
            [
                { key: 'name', value: 'мечник' },
                { key: 'level', value: 2 },
                { key: 'attack', value: 80 },
                { key: 'defence', value: 40 },
                { key: 'health', value: 10 }
            ]
    ],
    [
            {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
            ["health", "attack"],
            [
                { key: 'health', value: 10 },
                { key: 'attack', value: 80 },
                { key: 'defence', value: 40 },
                { key: 'level', value: 2 },
                { key: 'name', value: 'мечник' },
            ]
    ],
    [
            {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
            ["health", "dead"],
            [
                { key: 'health', value: 10 },
                { key: 'attack', value: 80 },
                { key: 'defence', value: 40 },
                { key: 'level', value: 2 },
                { key: 'name', value: 'мечник' },
            ]
    ],
    [
            { attack: 80, defence: 40, health: 10, level: 2, name: 'мечник'},
            ["dead", "level"],
            [
                { key: 'level', value: 2 },
                { key: 'attack', value: 80 },
                { key: 'defence', value: 40 },
                { key: 'health', value: 10 },
                { key: 'name', value: 'мечник' }
            ]
    ],
]

test.each(dataList)('order properties', (data, forSort, expected) => {
    const result = orderByProps(data, forSort);
    expect(result).toEqual(expected);
});






