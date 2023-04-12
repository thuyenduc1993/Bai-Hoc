import {AbsoluteNumberCalculator} from "../app";

describe("testFindAbsolute0", () => {
    test("testFindAbsolute0", () => {
        let number = 0;
        let expected = 0;

        expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});