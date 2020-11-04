import minClassRooms from './six';

const testSix = () => {
    let schedules = [
        {
            start: "11:00",
            end: "14:00"
        },
        {
            start: "12:00",
            end: "15:00"
        },
        {
            start: "14:30",
            end: "16:00"
        }
    ];
    const result = minClassRooms(schedules);
    expect(result).toEqual(2);
};

describe("Test for exercise six", () => {
    it("With example values", testSix);
  });