export class AbsoluteNumberCalculator {
    public static findAbsolute(num: number): number {
        // return 0;

        if(num < 0)
            return  -num;
        return num;
    }
}