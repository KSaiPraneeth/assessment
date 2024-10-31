class StringCalculator {
    add(numbers) {
        if (numbers === "") return 0;

        let delimiter = ",";
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            delimiter = parts[0].substring(2);
            numbers = parts[1];
        }

        const regex = new RegExp(`[${delimiter}\\n]`);
        const numberArray = numbers.split(regex).map(Number);

        const negatives = numberArray.filter(n => n < 0);
        if (negatives.length > 0) {
            throw new Error("negative numbers not allowed: " + negatives.join(", "));
        }

        return numberArray.reduce((sum, num) => sum + num, 0);
    }
}
module.exports =StringCalculator