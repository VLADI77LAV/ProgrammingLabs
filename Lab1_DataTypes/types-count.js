const values = [
    true, "hello", 5, 12, -200, false, false, "word",
    3.14, "KPI", 100, true, "programming", 0, false,
    null, { n: 10 }, [1, 2, 3]
];

const counts = {};

for (const value of values) {
    const type = typeof value;

    if (counts[type] === undefined) {
        counts[type] = 0;
    }

    counts[type]++;
}

console.dir(counts);