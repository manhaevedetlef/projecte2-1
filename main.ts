input.onButtonPressed(Button.A, () => {
    let keuze = Math.randomRange(1, 3);
    if (keuze === 1) {
        basic.showIcon(IconNames.Heart);
    }
    else if (keuze === 2) {
        basic.showIcon(IconNames.Happy);
    }
    else {
        basic.showIcon(IconNames.Ghost);
    }
})
