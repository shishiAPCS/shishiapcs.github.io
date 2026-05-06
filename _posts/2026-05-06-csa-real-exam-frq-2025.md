---
title:  "CSA 2025年真考 FRQ Q1 Q2"
mathjax: true
layout: post
categories: media
---


# Question 1 — Toy Part Inventory

This question involves parts used to assemble toy vehicles. Each toy vehicle is assembled using one base and either two or four wheels. The following `PartGenerator` class represents a production line where parts are produced in an unspecified order.

```java
public class PartGenerator
{
    /**
     * Removes a part from the production line and
     * returns its type ("base" or "wheel")
     */
    public String nextPartType()
    {
        /* implementation not shown */
    }

    /* There may be instance variables, constructors,
       and methods that are not shown. */
}
```

The following `ToyPartInventory` class has a `PartGenerator` object and maintains the number of wheels and the number of bases that have been produced by that `PartGenerator` and are available for toy assembly. The class contains two methods, which you will write, that update the inventory and determine whether a given quantity of toy vehicles can be assembled using the current inventory.

```java
public class ToyPartInventory
{
    /**
     * The production line for this ToyPartInventory object,
     * initialized in the constructor
     */
    private PartGenerator generator;

    /**
     * The number of bases and wheels currently in the inventory
     */
    private int basesAvail;
    private int wheelsAvail;

    /**
     * Updates basesAvail and wheelsAvail to reflect numParts parts
     * coming off of the production line, as described in part (a)
     * Precondition: numParts > 0
     */
    public void updateInventory(int numParts)
    {
        /* to be implemented in part (a) */
    }

    /**
     * Returns a string indicating whether the current inventory
     * contains enough bases and wheels to build numToys units of
     * the toy specified by toyInfo, as described in part (b)
     * Precondition: numToys > 0 and toyInfo is correctly formatted.
     * Postcondition: basesAvail and wheelsAvail are unchanged.
     */
    public String checkInventory(int numToys, String toyInfo)
    {
        /* to be implemented in part (b) */
    }

    /* There may be instance variables, constructors,
       and methods that are not shown. */
}
```

---

## Part (a)

Write the `updateInventory` method, which adds `numParts` parts to the inventory.

The `updateInventory` method uses the `nextPartType` method of the `PartGenerator` class to find the part type of each part added to the inventory. The `nextPartType` method removes a part from the production line and returns either `"base"` or `"wheel"`, indicating the type of the removed part.

The following table shows some sample calls to `updateInventory` and the resulting updates to the current inventory based on possible `nextPartType` return values.

| Method Call           | Possible Values Returned by Calls to `nextPartType`                            | Inventory Before the Method Call      | Inventory After the Method Call       |
| --------------------- | ------------------------------------------------------------------------------ | ------------------------------------- | ------------------------------------- |
| `updateInventory(20)` | The 20 calls to `nextPartType` return `"base"` 5 times and `"wheel"` 15 times. | `basesAvail: 10`<br>`wheelsAvail: 20` | `basesAvail: 15`<br>`wheelsAvail: 35` |
| `updateInventory(5)`  | The 5 calls to `nextPartType` return `"wheel"` 5 times.                        | `basesAvail: 8`<br>`wheelsAvail: 5`   | `basesAvail: 8`<br>`wheelsAvail: 10`  |

Complete the `updateInventory` method.

```java
/**
 * Updates basesAvail and wheelsAvail to reflect numParts parts
 * coming off of the production line, as described in part (a)
 * Precondition: numParts > 0
 */
public void updateInventory(int numParts)
{
    
}
```

---

## Part (b)

Write the `checkInventory` method, which returns a string indicating whether the inventory contains enough bases and wheels to assemble `numToys` toy vehicles described by the `toyInfo` parameter. Each toy vehicle is assembled using one base and either two or four wheels.

The `toyInfo` parameter consists of a model ID, followed by an asterisk `"*"`, followed by a model name, followed by a dollar sign `"$"`, followed by the spelled-out number of wheels.

There is exactly one asterisk and exactly one dollar sign. The dollar sign always appears after the asterisk. The substring representing the model ID and model name always contain at least one character. The substring representing the number of wheels is always either `"two"` or `"four"`. You may assume that the `toyInfo` parameter is correctly formatted.

Examples of the `toyInfo` parameter are:

```java
"R8M*two door car$four"
"Z7*bike$two"
```

The string that `checkInventory` returns is the model name of the toy vehicle, followed by a hyphen `"-"`, followed by one of the following strings:

* `"need parts"` if either additional bases, additional wheels, or both are needed to assemble `numToys` toys
* `"enough parts"` if the current inventory contains enough wheels and bases to assemble `numToys` toys, each containing the number of wheels specified by `toyInfo`

The following table shows some sample calls to `checkInventory` and the intended return values based on the current inventory. Before each method call in the table, assume that `basesAvail` is `10` and `wheelsAvail` is `20`.

| Method Call                                  | Return Value                  | Explanation                        |
| -------------------------------------------- | ----------------------------- | ---------------------------------- |
| `checkInventory(12, "Z7*bike$two")`          | `"bike-need parts"`           | 12 bases and 24 wheels are needed. |
| `checkInventory(9, "03*sedan$four")`         | `"sedan-need parts"`          | 9 bases and 36 wheels are needed.  |
| `checkInventory(5, "R8M*two door car$four")` | `"two door car-enough parts"` | 5 bases and 20 wheels are needed.  |

Complete the `checkInventory` method.

```java
/**
 * Returns a string indicating whether the current inventory
 * contains enough bases and wheels to build numToys units of
 * the toy specified by toyInfo, as described in part (b)
 * Preconditions: numToys > 0 and toyInfo is correctly formatted.
 * Postcondition: basesAvail and wheelsAvail are unchanged.
 */
public String checkInventory(int numToys, String toyInfo)
{
    
}
```

---

# Question 2 — Rental Car Plan

Car rental companies rent cars to customers. You will write the complete `RentalCarPlan` class, which represents a car rental plan: an agreement between a car rental company and a customer.

The car rental plan is specified by the following information:

* The daily rental fee, in dollars, which is the cost per day of renting the car
* The number of free miles included in the plan, which is the number of miles the car can be driven without an additional mileage charge
* The per-mile charge, in dollars, for each mile that the car is driven beyond the number of free miles

The `RentalCarPlan` class contains a constructor and two methods. Assume that all parameters representing days and miles are greater than zero and that all parameters representing costs are greater than or equal to zero.

The constructor has three parameters:

* a `double` that represents the daily rental fee
* an `int` that represents the number of free miles included in the plan
* a `double` that represents the per-mile charge

The `calculateBill` method calculates and returns a `double` that represents the cost, in dollars, of renting a car with this plan for the given number of days and miles.

The `calculateBill` method has two `int` parameters:

* the number of days for which the car is rented
* the number of miles driven

The calculated bill is the sum of the total rental fee and the mileage charge.

* The total rental fee is the product of the daily rental fee and the number of days for which the car is rented.
* The mileage charge is the product of the per-mile charge and the number of miles driven beyond the included miles.
* The mileage charge is zero if the number of miles driven is less than or equal to the number of free miles included in the plan.

The `costsLessThan` method compares the cost of this plan with the cost of another plan for a given number of days and miles. The method returns `true` if the cost of this plan is less than the cost of the other plan and returns `false` otherwise.

The `costsLessThan` method has three parameters:

* a `RentalCarPlan` object that represents the other plan
* an `int` that represents the number of days for which the car is rented
* an `int` that represents the number of miles driven

When writing the `costsLessThan` method, you must use `calculateBill` to calculate the cost for both plans being compared in order to receive full credit. Assume that `calculateBill` works as intended, regardless of what you wrote.

The following table contains a sample code execution sequence and the corresponding results. The code execution sequence appears in a class other than `RentalCarPlan`.

| Statement                                                    | Value Returned | Explanation                                                                                                            |
| ------------------------------------------------------------ | -------------: | ---------------------------------------------------------------------------------------------------------------------- |
| `double cost;`                                               |                |                                                                                                                        |
| `boolean isCheaper;`                                         |                |                                                                                                                        |
| `RentalCarPlan lowMiles = new RentalCarPlan(25.0, 50, 0.5);` |                | `lowMiles` is a new `RentalCarPlan` with a daily rental fee of `$25.00`, 50 free miles, and a `$0.50` per-mile charge. |
| `cost = lowMiles.calculateBill(3, 40);`                      |         `75.0` | The cost of renting a car for 3 days and driving 40 miles: `25.0 * 3`                                                  |
| `cost = lowMiles.calculateBill(10, 350);`                    |        `400.0` | The cost of renting a car for 10 days and driving 350 miles: `(25.0 * 10) + (0.5 * (350 - 50))`                        |

Write the complete `RentalCarPlan` class. Your implementation must meet all specifications and conform to the examples shown in the table.

```java
public class RentalCarPlan
{
    
}
```
