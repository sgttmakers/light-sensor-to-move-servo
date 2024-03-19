basic.forever(function () {
    if (input.lightLevel() >= 50) {
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
    } else if (input.lightLevel() == 50) {
        ContinuousServo.turn_off_motor(DigitalPin.P0)
    } else {
        basic.clearScreen()
    }
})
