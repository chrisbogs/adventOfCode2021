export abstract class Common 
{         
    public static CountIncreases(nums:Array<number>): number
    {
        if (nums === undefined || nums.length < 1){
            return 0;
        }
        
        // Count the number of times that we increase when iterating though the given list of numbers.
        let result:number = nums[0];
        for(let i = 1; i < nums.length; i++){
            if (nums[i] > nums[i-1]){
                result++;   
            }
        }
        
        return result;
    }
}