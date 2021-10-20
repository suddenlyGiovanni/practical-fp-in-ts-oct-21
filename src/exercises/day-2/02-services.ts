/**
 * Theory:
 *
 * Introduction to the environmental effect pattern that uses R to abstract modules
 */

/**
 * Previously we used T.accessM and T.provideAll to access and provide environment,
 * that works but has a series of issues:
 *
 * 1) we need to pay attention to never have collisions between our services
 * 2) it is annoying to always have to type explicitely the requirements
 * 3) building up accessors helps usability but it is verbose
 */

/**
 * Introduction to the Tag & Has module.
 */

/**
 * Exercise:
 *
 * Write an interface to describe a MathService with 4 functions:
 *
 * 1) add (takes 2 numbers and return T.UIO<number> of the sum)
 * 2) mul (takes 2 numbers and return T.UIO<number> of the multiplication)
 * 3) sub (takes 2 numbers and return T.UIO<number> of the difference)
 * 4) div (takes 2 numbers and return T.IO<DivisionByZero, number> of the division)
 */
export interface MathService {}

/**
 * Exercise:
 *
 * Create a tag for the MathService named MathService using `tag<MathService>()` from @effect-ts/core/Has
 */

/**
 * Exercise:
 *
 * Test the following functions:
 *
 * 1) T.accessService
 * 2) T.accessServiceM
 * 3) T.provideService
 * 4) T.provideServiceM
 * 5) T.deriveLifted
 */

/**
 * Exercise:
 *
 * Write a small program that uses all the functions from MathService
 */

/**
 * Exercise:
 *
 * Tag can be used directly with the generator syntax, try to `yield* _(MathService)` in a T.gen
 */

/**
 * Graduation:
 *
 * We want to create a small program that firstly generates a random integer using RandomGeneratorService
 * then if the number is more then 0.5 continues by logging it using ConsoleService if it is less than 0.5
 * it returns a failure of InvalidRandom.
 *
 * While writing the program test all the possible outcomes.
 */