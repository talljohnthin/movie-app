export const pageVariants = {
    enter: {
        opacity:1,
    },
    leave: {
        opacity:0,
    }
}

export const pageTransition = {
    duration:1.5
}

export const movieVariants = {
    hidden: {
        opacity:0,
        transition: {
            staggerChildren: 0.2
        }
	},
    show: {
        opacity:1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

export const eachMovieVariants = {
    hidden: {
        opacity:0,
        y: 50,
	},
    show: {
        opacity:1,
        y:0,
        transition: {
            duration: 0.8
        }
    }
}