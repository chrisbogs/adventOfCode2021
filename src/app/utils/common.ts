
export abstract class Common {
    public static CountIncreases(nums: Array<number>): number {
        if (nums === undefined || nums.length < 1) {
            return 0;
        }

        // Count the number of times that we increase when iterating though the given list of numbers.
        let result: number = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                result++;
            }
        }

        return result;
    }

    public static CountIncreasesInThreeMeasurementWindow(nums: number[]) {
        if (nums === undefined || nums.length < 3) {
            return 0;
        }

        // Count the number of times that we increase 
        // when iterating though the given list of numbers.
        // using a three value sum for the window.
        let result: number = 0;
        for (let i = 3; i < nums.length; i++) {
            if (nums[i] + nums[i - 1] + nums[i - 2]
                > nums[i - 1] + nums[i - 2] + nums[i - 3]
            ) {
                result++;
            }
        }

        return result;
    }
    public static flipBitString(bitString: string): string {
        return bitString.split('').map(function (b) {
            return (1 - parseInt(b, 2)).toString();
        }).join('');
    }

    public static SumOfSeriesInt(n: number): number {
        if (n == 0) return 0;
        if (n == 1) return 1;
        if (n == 2) return 3;
        return Math.floor(n * (n+1) / 2);
    }
}