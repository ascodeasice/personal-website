// Add class to something when scrolled to it
// Credit: https://css-tricks.com/scroll-triggered-animation-vanilla-javascript/

function scrollTrigger(triggerSelector, targetSelector, className, threshold, willRemove = true) {
    let triggers = document.querySelectorAll(triggerSelector)
    let targets = document.querySelectorAll(targetSelector)
    triggers = Array.from(triggers)
    targets = Array.from(targets)

    triggers.forEach(trigger => {
        targets.forEach(target => {
            addObserver(trigger, target, className, threshold, willRemove)
        })
    })
}

function addObserver(trigger, target, className, threshold = 0, willRemove) {
    const options = {
        threshold: threshold,
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // `entry.isIntersecting` will be true if the element is visible
            if (entry.isIntersecting) {
                target.classList.add(className)
            } else if (willRemove) {
                target.classList.remove(className)
            }
        })
    }, options)
    // Adding the observer to the element
    observer.observe(trigger)
}

export default scrollTrigger;